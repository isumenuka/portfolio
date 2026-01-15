# Portfolio CMS - Setup Guide

## 🎉 Your Admin Panel is Ready!

You now have a professional CMS (Content Management System) to manage your portfolio content without touching code!

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Sanity Account

1. Go to [sanity.io](https://www.sanity.io/)
2. Click **"Get started for free"**
3. Sign in with GitHub/Google
4. Create a new project:
   - Name: **"Portfolio CMS"**
   - Dataset: **"production"**

### Step 2: Get Your Project ID

1. After creating the project, you'll see your **Project ID** (looks like: `abc123de`)
2. Copy this ID

### Step 3: Update Configuration Files

**Update these two files with your Project ID:**

1. **`sanity/sanity.config.ts`**
   ```typescript
   projectId: 'YOUR_PROJECT_ID', // ← Replace with your actual ID
   ```

2. **`lib/sanity.ts`**
   ```typescript
   projectId: 'YOUR_PROJECT_ID', // ← Replace with your actual ID
   ```

### Step 4: Install Sanity Studio Dependencies

```bash
cd sanity
npm install
```

### Step 5: Start the Admin Panel

```bash
npm run dev
```

Your admin panel will open at: **http://localhost:3333**

---

## 📝 How to Use Your Admin Panel

### Adding Content

1. **Personal Info**
   - Click "Personal Info" in the sidebar
   - Add your name, tagline, about text
   - Upload profile image

2. **Projects**
   - Click "+ Create" → "Projects"
   - Fill in title, description, tags
   - Add project link
   - Upload project screenshot
   - Set display order (1, 2, 3...)

3. **Experience**
   - Click "+ Create" → "Experience"
   - Add job details
   - List skills
   - Set company link

4. **Education**
   - Click "+ Create" → "Education"
   - Add school/degree info
   - List relevant skills

5. **Skills**
   - Click "+ Create" → "Skill Categories"
   - Create category (e.g., "Languages")
   - Add skills to that category

6. **Contact**
   - Click "Contact Information"
   - Add email, GitHub, LinkedIn URLs

---

## 🔗 Deploy Admin Panel (Optional)

To access your admin panel from anywhere:

```bash
cd sanity
npm run deploy
```

You'll get a URL like: `https://your-portfolio.sanity.studio`

---

## 🎨 Updating Your Portfolio Website

### Option A: Auto-Fetch (Recommended)

Update your components to fetch from Sanity:

```typescript
import {getProjects} from './lib/sanity'

const Projects = async () => {
  const projects = await getProjects()
  
  return (
    <div>
      {projects.map(project => (
        <div key={project._id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}
```

### Option B: Generate Static JSON

Run this command to export Sanity data to JSON:

```bash
cd sanity
npx sanity dataset export production ./export.json
```

Then use the JSON file in your React app.

---

## 📸 Admin Panel Preview

Your admin panel includes:
- ✅ Rich text editor
- ✅ Drag-and-drop image uploads
- ✅ Tag management
- ✅ Real-time preview
- ✅ Mobile-friendly interface
- ✅ Automatic image optimization

---

## 🆘 Need Help?

### Common Issues

**Q: Can't access admin panel?**
A: Make sure you ran `npm install` inside the `sanity` folder

**Q: Images not showing?**
A: Check that your Project ID is correct in both config files

**Q: Changes not appearing on website?**
A: Your frontend needs to fetch from Sanity (see "Updating Your Portfolio Website" above)

---

## 🎯 Next Steps

1. ✅ Setup Sanity account
2. ✅ Add your Project ID to config files
3. ✅ Run `npm install` in sanity folder
4. ✅ Start admin panel with `npm run dev`
5. ✅ Add your content!
6. ⬜ Update frontend to fetch from Sanity

**Let me know when you're ready to connect the frontend to Sanity!** 🚀
