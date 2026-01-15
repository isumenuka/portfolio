import React, { useEffect, useRef, RefObject } from 'react';
import { gsap } from 'gsap';

const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b;

// Always return global client coordinates for fixed positioning
const getMousePos = (e: Event): { x: number; y: number } => {
    const mouseEvent = e as MouseEvent;
    return { x: mouseEvent.clientX, y: mouseEvent.clientY };
};

interface CrosshairProps {
    color?: string;
    containerRef?: RefObject<HTMLElement>;
}

const Crosshair: React.FC<CrosshairProps> = ({ color = 'white', containerRef = null }) => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const lineHorizontalRef = useRef<HTMLDivElement>(null);
    const lineVerticalRef = useRef<HTMLDivElement>(null);
    const filterXRef = useRef<SVGFETurbulenceElement>(null);
    const filterYRef = useRef<SVGFETurbulenceElement>(null);

    const mouse = useRef({ x: 0, y: 0 });
    const renderedStyles = useRef({
        tx: { previous: 0, current: 0, amt: 0.15 },
        ty: { previous: 0, current: 0, amt: 0.15 }
    });

    useEffect(() => {
        const handleMouseMove = (ev: Event) => {
            const mouseEvent = ev as MouseEvent;
            // Use global coordinates
            mouse.current = getMousePos(mouseEvent);

            if (containerRef?.current) {
                const bounds = containerRef.current.getBoundingClientRect();
                // Check if global mouse is within the container bounds
                if (
                    mouseEvent.clientX < bounds.left ||
                    mouseEvent.clientX > bounds.right ||
                    mouseEvent.clientY < bounds.top ||
                    mouseEvent.clientY > bounds.bottom
                ) {
                    gsap.to([lineHorizontalRef.current, lineVerticalRef.current].filter(Boolean), { opacity: 0 });
                } else {
                    gsap.to([lineHorizontalRef.current, lineVerticalRef.current].filter(Boolean), { opacity: 1 });
                }
            }
        };

        // Attach to window to ensure we catch movements everywhere for bounds checking
        window.addEventListener('mousemove', handleMouseMove);

        gsap.set([lineHorizontalRef.current, lineVerticalRef.current].filter(Boolean), { opacity: 0 });

        const onMouseMoveStart = () => {
            // Initial fade in is handled by the bounds check in handleMouseMove usually, 
            // but if we want a start animation:
            gsap.to([lineHorizontalRef.current, lineVerticalRef.current].filter(Boolean), {
                duration: 0.9,
                ease: 'Power3.easeOut',
                opacity: 1
            });
            requestAnimationFrame(render);
            window.removeEventListener('mousemove', onMouseMoveStart);
        };
        window.addEventListener('mousemove', onMouseMoveStart);

        const primitiveValues = { turbulence: 0 };

        const tl = gsap
            .timeline({
                paused: true,
                onStart: () => {
                    if (lineHorizontalRef.current) {
                        lineHorizontalRef.current.style.filter = 'url(#filter-noise-x)';
                    }
                    if (lineVerticalRef.current) {
                        lineVerticalRef.current.style.filter = 'url(#filter-noise-y)';
                    }
                },
                onUpdate: () => {
                    if (filterXRef.current && filterYRef.current) {
                        filterXRef.current.setAttribute('baseFrequency', primitiveValues.turbulence.toString());
                        filterYRef.current.setAttribute('baseFrequency', primitiveValues.turbulence.toString());
                    }
                },
                onComplete: () => {
                    if (lineHorizontalRef.current && lineVerticalRef.current) {
                        lineHorizontalRef.current.style.filter = 'none';
                        lineVerticalRef.current.style.filter = 'none';
                    }
                }
            })
            .to(primitiveValues, {
                duration: 0.5,
                ease: 'power1',
                startAt: { turbulence: 1 },
                turbulence: 0
            });

        const enter = () => tl.restart();
        const leave = () => {
            tl.progress(1).kill();
        };

        const render = () => {
            renderedStyles.current.tx.current = mouse.current.x;
            renderedStyles.current.ty.current = mouse.current.y;

            for (const key in renderedStyles.current) {
                // @ts-ignore
                const style = renderedStyles.current[key];
                style.previous = lerp(style.previous, style.current, style.amt);
            }

            if (lineHorizontalRef.current && lineVerticalRef.current) {
                // Using fixed positioning, so x/y translate works in screen coords
                gsap.set(lineVerticalRef.current, { x: renderedStyles.current.tx.previous });
                gsap.set(lineHorizontalRef.current, { y: renderedStyles.current.ty.previous });
            }

            requestAnimationFrame(render);
        };

        const links: NodeListOf<HTMLAnchorElement> = containerRef?.current
            ? containerRef.current.querySelectorAll('a')
            : document.querySelectorAll('a');

        links.forEach(link => {
            link.addEventListener('mouseenter', enter);
            link.addEventListener('mouseleave', leave);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousemove', onMouseMoveStart);
            links.forEach(link => {
                link.removeEventListener('mouseenter', enter);
                link.removeEventListener('mouseleave', leave);
            });
        };
    }, [containerRef]);

    return (
        <div
            ref={cursorRef}
            // Always fixed to ensure lines span the full viewport
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[10000]"
        >
            <svg className="absolute top-0 left-0 w-full h-full">
                <defs>
                    <filter id="filter-noise-x">
                        <feTurbulence type="fractalNoise" baseFrequency="0.000001" numOctaves="1" ref={filterXRef} />
                        <feDisplacementMap in="SourceGraphic" scale="40" />
                    </filter>
                    <filter id="filter-noise-y">
                        <feTurbulence type="fractalNoise" baseFrequency="0.000001" numOctaves="1" ref={filterYRef} />
                        <feDisplacementMap in="SourceGraphic" scale="40" />
                    </filter>
                </defs>
            </svg>
            <div
                ref={lineHorizontalRef}
                className={`absolute w-full h-px pointer-events-none opacity-0 transform translate-y-1/2`}
                style={{ background: color }}
            ></div>
            <div
                ref={lineVerticalRef}
                className={`absolute h-full w-px pointer-events-none opacity-0 transform translate-x-1/2`}
                style={{ background: color }}
            ></div>
        </div>
    );
};

export default Crosshair;
