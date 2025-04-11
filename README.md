# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Multiple sections:
  - Hero section with call-to-action
  - About section with skills/experience
  - Projects showcase
  - Contact form
- Smooth scrolling navigation
- Dark/light mode support
- Animated UI components

## Technologies Used

- [React](https://react.dev/) - Frontend library
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - UI component library
- [Lucide Icons](https://lucide.dev/) - Beautiful icons

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn or bun

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/portfolio.git
   ```
2. Navigate to project directory
   ```bash
   cd portfolio
   ```
3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
portfolio/
├── public/              # Static files
│   ├── lovable-uploads/ # Project images
│   └── ...              # Other assets
├── src/
│   ├── components/      # React components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ...
│   ├── pages/           # Page components
│   ├── lib/             # Utility functions
│   ├── hooks/           # Custom hooks
│   └── ...
├── tailwind.config.ts   # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── ...
```

## Customization

1. **Update Personal Info**:
   - Edit the relevant section components in `src/components/`
   - Update images in `public/lovable-uploads/`

2. **Styling**:
   - Modify colors in `tailwind.config.ts`
   - Update global styles in `src/index.css`

3. **Add New Projects**:
   - Edit `ProjectsSection.tsx` to add new project cards
   - Add project images to `public/lovable-uploads/`

## Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/portfolio)

1. Push your code to GitHub
2. Create new project on Vercel
3. Connect your GitHub repository
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Create new site on Netlify
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Deploy!

## License

MIT
