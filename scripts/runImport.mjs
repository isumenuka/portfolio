// Auto-import script for Sanity with embedded token
import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure Sanity client with token
const client = createClient({
    projectId: 'zgo49znz',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: 'skjNIcS24M11yzWwaapvcpsK8hkFBgMb8fodcN6m7AJhbFvB35VjxujBV4s6y4dpYfUsKyjFdPAOD0ddljkCduOYgGTGroHpyucRXTcdym6y5hxOSjC0ZxpN3JzcOUUkK64EroqQNIHW4FJPpIhPPOf1McZx5hLv54EizAynvOV1uEihpozX',
});

async function importData() {
    console.log('🚀 Starting Sanity Data Import...\n');

    // Read the seed data
    const seedDataPath = path.join(__dirname, '..', 'sanity', 'migrations', 'seedData.json');
    const seedData = JSON.parse(fs.readFileSync(seedDataPath, 'utf8'));

    let successCount = 0;
    let errorCount = 0;

    // Import Projects
    console.log('📦 Importing Projects...');
    for (const project of seedData.projects) {
        try {
            await client.create(project);
            console.log(`  ✅ ${project.title}`);
            successCount++;
        } catch (error) {
            console.error(`  ❌ ${project.title}: ${error.message}`);
            errorCount++;
        }
    }

    // Import Experiences
    console.log('\n💼 Importing Experiences...');
    for (const exp of seedData.experiences) {
        try {
            await client.create(exp);
            console.log(`  ✅ ${exp.title} at ${exp.company}`);
            successCount++;
        } catch (error) {
            console.error(`  ❌ ${exp.title}: ${error.message}`);
            errorCount++;
        }
    }

    // Import Education
    console.log('\n🎓 Importing Education...');
    for (const edu of seedData.education) {
        try {
            await client.create(edu);
            console.log(`  ✅ ${edu.institution}`);
            successCount++;
        } catch (error) {
            console.error(`  ❌ ${edu.institution}: ${error.message}`);
            errorCount++;
        }
    }

    // Import Skill Categories
    console.log('\n💻 Importing Skill Categories...');
    for (const skill of seedData.skillCategories) {
        try {
            await client.create(skill);
            console.log(`  ✅ ${skill.title}`);
            successCount++;
        } catch (error) {
            console.error(`  ❌ ${skill.title}: ${error.message}`);
            errorCount++;
        }
    }

    // Summary
    console.log('\n' + '='.repeat(50));
    console.log(`✅ Successfully imported: ${successCount} items`);
    console.log(`❌ Errors: ${errorCount} items`);
    console.log('='.repeat(50));
    console.log('\n🎉 Import Complete!');
    console.log('👉 Now you can edit all content in Sanity Studio');
    console.log('   Run: npm run sanity');
}

importData().catch(error => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
});
