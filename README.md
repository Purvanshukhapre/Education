# Patil Institute - Modern EdTech Platform

A fully responsive EdTech website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional UI with Tailwind CSS
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Course Management**: Filterable course listings with detailed cards
- **Interactive Components**: Reusable UI components with consistent styling
- **Performance Optimized**: Fast loading with Vite bundler

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Vite 7** - Lightning fast build tool
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **React Router DOM** - Declarative routing
- **Lucide React** - Beautiful SVG icons

## 📁 Project Structure

```
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Container.jsx
│   │   └── ScrollToTop.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── Input.jsx
│   │   └── LoadingSkeleton.jsx
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── FeaturedCourses.jsx
│   │   └── CTA.jsx
│   ├── courses/
│   │   ├── CourseCard.jsx
│   │   ├── FilterSidebar.jsx
│   │   └── CourseGrid.jsx
│   └── about/
│       ├── Mission.jsx
│       ├── Story.jsx
│       ├── Team.jsx
│       └── Stats.jsx
├── pages/
│   ├── Home.jsx
│   ├── Courses.jsx
│   ├── About.jsx
│   └── NotFound.jsx
├── data/
│   └── courses.js
├── App.jsx
└── main.jsx
```

## 🎨 Design System

### Colors
- **Primary**: #14B8A6 (Teal)
- **Primary Dark**: #0F766E
- **Primary Light**: #5EEAD4
- **Secondary Dark**: #0F172A
- **Accent**: #22C55E (Green)
- **Warning**: #F59E0B (Amber)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: font-bold
- **Body**: font-normal

### Spacing & Layout
- **Container**: max-w-7xl with responsive padding
- **Rounded**: rounded-2xl for cards
- **Shadows**: shadow-md with hover:shadow-xl

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📱 Responsive Breakpoints

- **Mobile**: sm (640px)
- **Tablet**: md (768px)
- **Desktop**: lg (1024px)
- **Large Desktop**: xl (1280px)

## 🎯 Key Components

### Layout Components
- **Navbar**: Sticky navigation with mobile menu
- **Footer**: Comprehensive footer with links and contact info
- **Container**: Responsive container wrapper
- **ScrollToTop**: Smooth scroll-to-top button

### UI Components
- **Button**: Multiple variants with hover effects
- **Card**: Hover-lift cards with shadow transitions
- **Badge**: Status and category badges
- **SectionTitle**: Consistent section headings
- **Input**: Styled form inputs with icons

### Page Components
- **Home**: Hero, features, featured courses, CTA
- **Courses**: Filterable course grid with sidebar
- **About**: Mission, stats, story, team

## 🎨 Animations

- **Page transitions**: Smooth fade-in effects
- **Hover states**: Scale and lift animations
- **Stagger effects**: Sequential element animations
- **Scroll triggers**: Viewport-based animations
- **Interactive feedback**: Button and card hover effects

## 📈 Performance

- **Code Splitting**: Route-based lazy loading
- **Image Optimization**: Responsive images with proper sizing
- **CSS Optimization**: Purged unused styles in production
- **Bundle Analysis**: Vite's built-in optimization

## 🚀 Deployment

The site is ready for deployment to any static hosting service:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

---

Built with ❤️ using modern web technologies
