# 🚀 Isum Enuka's Portfolio

<div align="center">

A modern, interactive portfolio website showcasing creative projects, technical skills, and the creative universes of a tech creator and developer.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Sanity](https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)](https://www.sanity.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## ✨ Features

- 🎨 **Modern UI/UX** - Stunning dark-themed design with glassmorphism and smooth animations
- 🎭 **Creative Universes** - Showcase multiple creative identities and projects
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🎬 **Rich Animations** - GSAP-powered transitions and interactive effects
- 🔧 **Sanity CMS Integration** - Easy content management through Sanity Studio
- ⚡ **Blazing Fast** - Built with Vite for optimal performance
- 🎯 **Type-Safe** - Full TypeScript support
- 🎨 **React Bits Components** - Premium UI components and text animations

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + Custom CSS
- **Animations:** GSAP, Framer Motion
- **UI Components:** React Bits, Custom Components

### Backend & CMS
- **Headless CMS:** Sanity.io
- **Content Delivery:** Sanity Client

### Deployment
- **Frontend Hosting:** Vercel
- **Studio Hosting:** Vercel (Self-hosted)

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Sanity Account** (Free tier works)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=zgo49znz
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
ezsumm-portfolio/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── sections/       # Page sections
│   └── animations/     # Animation components
├── lib/                # Utilities and helpers
│   ├── sanity.ts       # Sanity client configuration
│   └── utils.ts        # Helper functions
├── sanity/             # Sanity Studio configuration
│   ├── schemaTypes/    # Sanity schemas
│   └── sanity.config.ts
├── public/             # Static assets
├── src/                # Source files
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
└── DEPLOYMENT.md       # Deployment guide
```

---

## 🎨 Customization

### Updating Content via Sanity Studio

1. **Run Sanity Studio locally:**
   ```bash
   cd sanity
   npm run dev
   ```

2. **Access the Studio:**
   
   Open [http://localhost:3333](http://localhost:3333)

3. **Edit Content:**
   - Update About section
   - Add/Edit Projects
   - Manage Skills
   - Update Creative Universes

---

## 🌐 Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Quick Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

---

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🎯 Key Features Breakdown

### Creative Universes
Dynamic showcase of different creative identities with smooth transitions and animations.

### Interactive Projects
Project cards with hover effects, detailed descriptions, and technology tags.

### Skills Section
Visual representation of technical skills with animated progress indicators.

### Responsive Design
Mobile-first approach ensuring perfect display on all devices.

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Isum Enuka**

- Portfolio: [Your Live Portfolio URL]
- GitHub: [@your-github-username](https://github.com/your-github-username)

---

## 🙏 Acknowledgments

- [React Bits](https://reactbits.dev) - Premium UI components
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Sanity.io](https://www.sanity.io/) - Headless CMS
- [Vercel](https://vercel.com/) - Deployment platform

---

<div align="center">

Made with ❤️ by Isum Enuka

⭐ Star this repo if you like it!

</div>
