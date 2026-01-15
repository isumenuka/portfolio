# Migrate Existing Content to Sanity

This script will copy all your existing website content into Sanity admin panel!

## Quick Run (2 steps)

### Step 1: Get your Sanity token

1. Go to https://sanity.io/manage
2. Click on your project "Portfolio CMS"
3. Go to **API** tab
4. Click **"Add API token"**
5. Name: `Migration Token`
6. Permissions: **Editor**
7. Copy the token

### Step 2: Run the migration

```bash
# Set the token (replace YOUR_TOKEN with the actual token)
$env:SANITY_TOKEN="YOUR_TOKEN"

# Run migration
npx tsx migrate-to-sanity.ts
```

## What it does

Imports all your existing content:
- ✅ Personal info (name, tagline)
- ✅ 5 Projects
- ✅ 3 Work experiences
- ✅ 3 Education entries
- ✅ 4 Skill categories
- ✅ Contact information

## After migration

1. Go to http://localhost:3333
2. See all your content!
3. Edit anything you want
4. Changes appear on your website instantly!
