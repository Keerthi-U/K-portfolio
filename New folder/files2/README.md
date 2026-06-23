# Portfolio React App

A dark-themed portfolio website built with React + Vite, based on the Figma design.

## Sections
- Navbar (Home, About, Education, Contact + Hire Me button)
- Hero (intro with photo)
- Skills (progress bars + tech bubbles)
- Experience
- Education (timeline)
- Projects (card grid)
- My Users (testimonials)
- Contact (form)
- Footer (links + newsletter)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Customization

### Replace placeholder content:
1. **Your name & title** → `src/components/Hero.jsx`
2. **Your photo** → replace the `<img src="...">` in `Hero.jsx` with your actual image
3. **Skills %** → edit the `skills` array in `Skills.jsx`
4. **Education items** → edit `educationItems` in `Education.jsx`
5. **Projects** → edit the `projects` array in `Projects.jsx`
6. **Contact email** → update in `Footer.jsx`
7. **Social links** → update hrefs in `Footer.jsx`

## Colors
All colors are in `src/styles/global.css` under `:root` CSS variables:
- `--teal: #2dd4bf` — primary accent
- `--bg-primary: #0a0a0f` — main background
- `--bg-secondary: #0d1117` — section backgrounds
