import { createClient } from '@sanity/client';

// Initialize Sanity client
const client = createClient({
    projectId: 'zgo49znz',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_TOKEN || '', // We'll set this in a moment
});

// Your existing content from the website
const personalInfo = {
    _type: 'personalInfo',
    name: 'Isum Enuka',
    tagline: 'Building innovative solutions with AI, ML, and React',
};

const projects = [
    {
        _type: 'project',
        title: 'Food Preservation ML',
        description: 'Machine Learning model designed to predict food spoilage rates and optimize storage conditions using sensor data analysis.',
        tags: ['Python', 'scikit-learn', 'Pandas', 'IoT'],
        link: 'https://github.com/isumenuka',
        order: 1,
    },
    {
        _type: 'project',
        title: 'Traditional Masks Detection',
        description: 'Deep Learning computer vision project capable of identifying and classifying traditional Sri Lankan masks from images.',
        tags: ['TensorFlow', 'Keras', 'Deep Learning', 'OpenCV'],
        link: 'https://github.com/isumenuka',
        order: 2,
    },
    {
        _type: 'project',
        title: 'TeamMate App',
        description: 'A collaborative platform for developers to find teammates for hackathons and side projects based on skill compatibility.',
        tags: ['React', 'Node.js', 'Firebase', 'Tailwind'],
        link: 'https://github.com/isumenuka',
        order: 3,
    },
    {
        _type: 'project',
        title: 'Suno.AI Music Generator',
        description: 'Experimental project leveraging Suno.AI to generate algorithmic music compositions based on mood prompts.',
        tags: ['AI Audio', 'Suno', 'Python', 'API Integration'],
        link: 'https://www.linkedin.com/in/ezsumm/',
        order: 4,
    },
    {
        _type: 'project',
        title: 'Kaggle Competitions',
        description: 'Various data science notebooks and solutions provided for competitive programming challenges on Kaggle.',
        tags: ['Data Analysis', 'Jupyter', 'XGBoost', 'Matplotlib'],
        link: 'https://www.kaggle.com/',
        order: 5,
    },
];

const experiences = [
    {
        _type: 'experience',
        title: 'Graphic Designer',
        company: 'Teminas',
        type: 'Full-time',
        period: 'Jul 2023 - Mar 2025 · 1 yr 9 mos',
        location: 'Sri Lanka · Hybrid',
        description: 'We will guide you to good things.',
        skills: [
            'Artworking',
            'Computer Graphics Design',
            'Online Graphics',
            'Graphic Design Software',
            'Adobe Premiere Pro',
            'Image Design',
            'Adobe Photoshop',
            'Video Editing',
            'Graphic Design',
            'Logo Design',
            'Adobe Illustrator',
        ],
        link: {
            text: 'Home | Teminas',
            url: '#',
        },
        order: 1,
    },
    {
        _type: 'experience',
        title: 'Stock Photographer',
        company: 'Wirestock',
        type: 'Part-time',
        period: 'Jul 2023 - Mar 2025 · 1 yr 9 mos',
        location: 'United States · Remote',
        description: `Traversing the vast expanse of the digital canvas, I passionately dive into the intricate world of algorithms, one line at a time. My heart beats with the rhythm of an AI artist, weaving the magic of art through the tapestry of code.

In this captivating journey, I wield algorithms as my creative tools, each line of code a stroke of the brush. With a fusion of technology and artistic expression, I craft masterpieces that defy conventional boundaries.

As an AI artist at heart, I draw inspiration from the dance of data and logic. My code is my canvas, and algorithms are my brushes. Through their harmonious interplay, I bring pixels to life, creating visual symphonies that captivate the senses.

My art transcends the physical, residing in the digital realm, waiting to be discovered by those who explore this code-driven world. Join me on this voyage as I unravel the endless possibilities of the digital canvas, one algorithm at a time, in pursuit of soul-stirring art.`,
        skills: ['Stock Photography'],
        link: {
            text: 'isuma Portfolio on Wirestock',
            url: '#',
        },
        order: 2,
    },
    {
        _type: 'experience',
        title: 'Founder',
        company: 'ezsumm',
        type: 'Self-employed',
        period: 'Oct 2024 - Present · 1 yr 4 mos',
        location: 'Sri Lanka · Remote',
        description: "Let's Dream Out Of The Box",
        skills: ['Editing', 'Graphic Design', 'Logo Design'],
        link: {
            text: 'isum.online',
            url: '#',
        },
        order: 3,
    },
];

const education = [
    {
        _type: 'education',
        institution: 'Robert Gordon University',
        degree: 'BSc (Hons), Artificial Intelligence And Data Science',
        period: 'Jan 2025 - Jan 2029',
        link: {
            text: 'Informatics Institute of Technology | IIT Campus',
            url: '#',
        },
        order: 1,
    },
    {
        _type: 'education',
        institution: 'Ananda College',
        degree: 'Grade: 12 to 13',
        period: 'Jan 2022',
        skills: ['Team Leadership', 'Teamwork'],
        link: {
            text: 'Ananada College - Colombo',
            url: '#',
        },
        order: 2,
    },
    {
        _type: 'education',
        institution: 'Central College Piliyandala',
        degree: 'General Studies',
        period: 'Jan 2015 - Dec 2021',
        grade: 'Grade: 6 to 11',
        skills: ['Swimming', 'Art', 'Team Leadership', 'Sports', 'Teamwork'],
        link: {
            text: 'Central College Piliyandala',
            url: '#',
        },
        order: 3,
    },
];

const skillCategories = [
    {
        _type: 'skillCategory',
        title: 'Languages',
        skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'LaTeX', 'C++'],
        order: 1,
    },
    {
        _type: 'skillCategory',
        title: 'AI & ML Frameworks',
        skills: ['TensorFlow', 'Keras', 'XGBoost', 'scikit-learn', 'Pandas', 'NumPy'],
        order: 2,
    },
    {
        _type: 'skillCategory',
        title: 'Web Technologies',
        skills: ['React', 'Tailwind CSS', 'Node.js', 'Firebase', 'REST APIs'],
        order: 3,
    },
    {
        _type: 'skillCategory',
        title: 'Tools & Platforms',
        skills: ['Git', 'Docker', 'Google Colab', 'n8n', 'Discord API', 'VS Code'],
        order: 4,
    },
];

const contact = {
    _type: 'contact',
    email: 'contact@isumenuka.com',
    github: 'https://github.com/isumenuka',
    linkedin: 'https://www.linkedin.com/in/ezsumm/',
};

// Migration function
async function migrate() {
    console.log('🚀 Starting migration...\n');

    try {
        // 1. Create Personal Info
        console.log('📝 Creating Personal Info...');
        const personalInfoResult = await client.create(personalInfo);
        console.log('✅ Personal Info created:', personalInfoResult._id);

        // 2. Create Projects
        console.log('\n📁 Creating Projects...');
        for (const project of projects) {
            const result = await client.create(project);
            console.log(`✅ Created project: ${project.title}`);
        }

        // 3. Create Experiences
        console.log('\n💼 Creating Experiences...');
        for (const exp of experiences) {
            const result = await client.create(exp);
            console.log(`✅ Created experience: ${exp.title} at ${exp.company}`);
        }

        // 4. Create Education
        console.log('\n🎓 Creating Education...');
        for (const edu of education) {
            const result = await client.create(edu);
            console.log(`✅ Created education: ${edu.institution}`);
        }

        // 5. Create Skill Categories
        console.log('\n🛠️  Creating Skills...');
        for (const category of skillCategories) {
            const result = await client.create(category);
            console.log(`✅ Created skill category: ${category.title}`);
        }

        // 6. Create Contact
        console.log('\n📧 Creating Contact Info...');
        const contactResult = await client.create(contact);
        console.log('✅ Contact info created:', contactResult._id);

        console.log('\n\n🎉 MIGRATION COMPLETE!');
        console.log('✅ All your existing content has been imported to Sanity!');
        console.log('\n📍 Go to http://localhost:3333 to see and edit your content!');
    } catch (error) {
        console.error('❌ Migration failed:', error);
        throw error;
    }
}

// Run migration
migrate().catch((error) => {
    console.error('Migration error:', error);
    process.exit(1);
});
