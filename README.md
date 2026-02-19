# Dan Brown's Portfolio

An awwwards-level portfolio site built with Next.js 14, TypeScript, Framer Motion, and Tailwind CSS.

## Features

- **Next.js 14** with App Router and TypeScript
- **Advanced Animations** using Framer Motion and GSAP
- **Smooth Scrolling** with Lenis
- **Custom Cursor** with magnetic interactions
- **Interactive Typography** with text reveal animations
- **Scroll-Triggered Animations** throughout the site
- **Creative Page Transitions** between routes
- **Magnetic Buttons** with hover effects
- **Parallax Effects** in hero section
- **Responsive Design** optimized for all devices
- **Dark Mode** with system preference detection
- **Performance Optimized** with code splitting and lazy loading
- **Static Export** for GitHub Pages deployment

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Smooth Scroll**: Lenis (@studio-freight/lenis)
- **Text Animations**: split-type
- **Deployment**: GitHub Pages (Static Export)

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Visit `http://localhost:3000`

## Building for Production

Build the site for production:
```bash
npm run build
```

The static files will be exported to the `out/` directory.

## Deployment

This site automatically builds and deploys to GitHub Pages via GitHub Actions when you push to the `main` branch.

### Manual Deployment

To deploy manually:
1. Build the site: `npm run build`
2. The `out/` directory will contain the static export
3. GitHub Actions will automatically deploy this to GitHub Pages

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   └── blog/              # Blog pages
├── components/            # React components
│   ├── AnimatedText.tsx   # Text reveal animations
│   ├── CustomCursor.tsx   # Custom cursor component
│   ├── Hero.tsx           # Hero section with parallax
│   ├── Experience.tsx     # Experience section
│   ├── BlogPreview.tsx    # Blog preview cards
│   ├── MagneticButton.tsx # Magnetic button component
│   ├── Navigation.tsx     # Navigation bar
│   ├── PageTransition.tsx # Page transition wrapper
│   ├── SmoothScroll.tsx   # Smooth scroll provider
│   └── Footer.tsx         # Footer component
├── public/                # Static assets
├── .github/workflows/     # GitHub Actions
└── package.json           # Dependencies
```

## Customization

### Update Site Info
Edit metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Name',
  description: 'Your description',
  // ...
}
```

### Modify Colors
Edit `app/globals.css` to change color scheme:
```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --accent: #0066cc;
}
```

### Add New Pages
Create a new directory in `app/` with a `page.tsx` file.

## Performance

- First Load JS: ~87-141 kB per page
- All routes are statically generated
- Code splitting and lazy loading enabled
- Optimized animations with GPU acceleration
- Smooth 60fps animations

## License

MIT
