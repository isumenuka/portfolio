import React from 'react';
import FlowingMenu from '../ui/FlowingMenu';

const Interests: React.FC = () => {
  const menuItems = [
    {
      link: "#",
      text: "Content Creation",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop"
    },
    {
      link: "#",
      text: "Music Production",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop"
    },
    {
      link: "#",
      text: "Comp. Programming",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
    },
    {
      link: "#",
      text: "Gaming Analysis",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="interests" className="h-[400px]">
      <FlowingMenu
        items={menuItems}
        speed={15}
        textColor="#fff"
        bgColor="#0a0a0a"
        marqueeBgColor="#06b6d4"
        marqueeTextColor="#0a0a0a"
        borderColor="#ffffff33"
      />
    </section>
  );
};

export default Interests;