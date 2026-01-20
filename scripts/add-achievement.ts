import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

// Initialize Sanity client
const client = createClient({
    projectId: 'zgo49znz',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_TOKEN,
});

const achievementData = {
    _type: 'achievement',
    title: 'The Classroom of Tomorrow',
    organization: 'OpenAI x Wirestock Sora Challenge',
    date: '2025-02-01',
    description: 'Awarded 2nd place with a prize of $500. Recognized for exploring the future of education through AI-generated video.',
    order: 1,
};

// Path to the uploaded image - Update this if the location changes
const imagePath = String.raw`C:\Users\Isum Enuka\.gemini\antigravity\brain\0a5ccabb-8045-4552-942c-3f0ab57f9317\uploaded_image_1768904524869.png`;

async function addAchievement() {
    if (!process.env.SANITY_TOKEN) {
        console.error('❌ Error: SANITY_TOKEN environment variable is required.');
        console.log('Usage: set SANITY_TOKEN=your_token && npx tsx scripts/add-achievement.ts');
        process.exit(1);
    }

    console.log('🚀 Starting add achievement script...');

    try {
        // 1. Upload Image
        if (fs.existsSync(imagePath)) {
            console.log(`📸 Uploading image from ${imagePath}...`);
            const imageBuffer = fs.readFileSync(imagePath);
            const imageAsset = await client.assets.upload('image', imageBuffer, {
                filename: 'openai-wirestock-award.png'
            });
            console.log('✅ Image uploaded:', imageAsset._id);

            // Add image reference to achievement data
            // @ts-ignore
            achievementData.image = {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: imageAsset._id
                }
            };
        } else {
            console.warn(`⚠️ Image file not found at ${imagePath}. Creating achievement without image.`);
        }

        // 2. Create Document
        console.log('📝 Creating Achievement document...');
        const result = await client.create(achievementData);
        console.log(`✅ Achievement created: "${result.title}" (ID: ${result._id})`);

        console.log('\n🎉 DONE! The achievement has been added to your Sanity content.');

    } catch (error) {
        console.error('❌ Failed to add achievement:', error);
        process.exit(1);
    }
}

addAchievement();
