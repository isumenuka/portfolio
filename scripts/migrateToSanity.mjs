// Migrate all hardcoded data to Sanity CMS
import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'zgo49znz',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: '', // We'll use the public API to check, then create via Sanity Studio
});

// All your hardcoded data to migrate
const MIGRATION_DATA = {
    projects: [
        {
            _type: 'project',
            title: "Food Preservation ML",
            description: "Machine Learning model designed to predict food spoilage rates and optimize storage conditions using sensor data analysis.",
            tags: ["Python", "scikit-learn", "Pandas", "IoT"],
            link: "https://github.com/isumenuka",
            order: 1
        },
        {
            _type: 'project',
            title: "Traditional Masks Detection",
            description: "Deep Learning computer vision project capable of identifying and classifying traditional Sri Lankan masks from images.",
            tags: ["TensorFlow", "Keras", "Deep Learning", "OpenCV"],
            link: "https://github.com/isumenuka",
            order: 2
        },
        {
            _type: 'project',
            title: "TeamMate App",
            description: "A collaborative platform for developers to find teammates for hackathons and side projects based on skill compatibility.",
            tags: ["React", "Node.js", "Firebase", "Tailwind"],
            link: "https://github.com/isumenuka",
            order: 3
        },
        {
            _type: 'project',
            title: "Suno.AI Music Generator",
            description: "Experimental project leveraging Suno.AI to generate algorithmic music compositions based on mood prompts.",
            tags: ["AI Audio", "Suno", "Python", "API Integration"],
            link: "https://www.linkedin.com/in/ezsumm/",
            order: 4
        },
        {
            _type: 'project',
            title: "Kaggle Competitions",
            description: "Various data science notebooks and solutions provided for competitive programming challenges on Kaggle.",
            tags: ["Data Analysis", "Jupyter", "XGBoost", "Matplotlib"],
            link: "https://www.kaggle.com/",
            order: 5
        }
    ],

    experiences: [
        {
            _type: 'experience',
            title: 'Graphic Designer',
            company: 'Teminas',
            type: 'Full-time',
            period: 'Jul 2023 - Mar 2025 · 1 yr 9 mos',
            location: 'Sri Lanka · Hybrid',
            description: 'We will guide you to good things.',
            skills: ['Artworking', 'Computer Graphics Design', 'Online Graphics', 'Graphic Design Software', 'Adobe Premiere Pro', 'Image Design', 'Adobe Photoshop', 'Video Editing', 'Graphic Design', 'Logo Design', 'Adobe Illustrator'],
            link: {
                text: 'Home | Teminas',
                url: 'https://teminas.com'
            },
            order: 1
        },
        {
            _type: 'experience',
            title: 'Stock Photographer',
            company: 'Wirestock',
            type: 'Part-time',
            period: 'Jul 2023 - Mar 2025 · 1 yr 9 mos',
            location: 'United States · Remote',
            description: 'Traversing the vast expanse of the digital canvas, I passionately dive into the intricate world of algorithms, one line at a time. My heart beats with the rhythm of an AI artist, weaving the magic of art through the tapestry of code.',
            skills: ['Stock Photography'],
            link: {
                text: 'isuma Portfolio on Wirestock',
                url: 'https://wirestock.io/isuma'
            },
            order: 2
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
                url: 'https://isum.online'
            },
            order: 3
        }
    ],

    education: [
        {
            _type: 'education',
            institution: 'Robert Gordon University',
            degree: 'BSc (Hons), Artificial Intelligence And Data Science',
            period: 'Jan 2025 - Jan 2029',
            link: {
                text: 'Informatics Institute of Technology | IIT Campus',
                url: 'https://iit.ac.lk'
            },
            order: 1
        },
        {
            _type: 'education',
            institution: 'Ananda College',
            degree: 'Grade: 12 to 13',
            period: 'Jan 2022',
            skills: ['Team Leadership', 'Teamwork'],
            link: {
                text: 'Ananada College - Colombo',
                url: 'https://anandacollege.lk'
            },
            order: 2
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
                url: 'https://centralcollegepiliyandala.lk'
            },
            order: 3
        }
    ],

    skillCategories: [
        {
            _type: 'skillCategory',
            title: "Languages",
            skills: ["Python", "Java", "JavaScript", "TypeScript", "LaTeX", "C++"],
            order: 1
        },
        {
            _type: 'skillCategory',
            title: "AI & ML Frameworks",
            skills: ["TensorFlow", "Keras", "scikit-learn", "Pandas", "NumPy", "XGBoost"],
            order: 2
        },
        {
            _type: 'skillCategory',
            title: "Web Technologies",
            skills: ["React", "Tailwind CSS", "Node.js", "Firebase", "REST APIs"],
            order: 3
        },
        {
            _type: 'skillCategory',
            title: "Tools & Platforms",
            skills: ["Git", "Docker", "Google Colab", "n8n", "Discord API", "VS Code"],
            order: 4
        }
    ],

    sectionTitles: {
        _type: 'sectionTitles',
        projectsTitle: 'Projects',
        projectsSubtitle: 'A selection of my work in AI, Machine Learning, and Web Development.',
        experienceTitle: 'Experience',
        experienceSubtitle: 'My professional journey and academic path, marked by continuous learning and building.',
        educationTitle: 'Education',
        educationSubtitle: '',
        skillsTitle: 'Skills & Technologies',
        skillsSubtitle: ''
    }
};

console.log('📋 Migration Data Summary:');
console.log(`   - ${MIGRATION_DATA.projects.length} Projects`);
console.log(`   - ${MIGRATION_DATA.experiences.length} Experiences`);
console.log(`   - ${MIGRATION_DATA.education.length} Education entries`);
console.log(`   - ${MIGRATION_DATA.skillCategories.length} Skill Categories`);
console.log(`   - Section Titles configuration`);
console.log('\n📝 Copy this data to add via Sanity Studio:\n');
console.log(JSON.stringify(MIGRATION_DATA, null, 2));
console.log('\n✅ Data export complete! Use Sanity Studio to import this data.');
