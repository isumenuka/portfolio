// Script to seed initial project data to Sanity
import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'zgo49znz',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN || '', // You'll need to provide this
});

const projects = [
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
];

async function seedProjects() {
    console.log('Starting to seed projects...');

    for (const project of projects) {
        try {
            const result = await client.create(project);
            console.log(`✅ Created project: ${project.title}`);
        } catch (error) {
            console.error(`❌ Error creating project "${project.title}":`, error.message);
        }
    }

    console.log('\n✅ Done! All projects have been added to Sanity.');
    console.log('You can now edit them in the Sanity admin panel.');
}

seedProjects();
