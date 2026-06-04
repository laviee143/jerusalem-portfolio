# Jerusalem Girma — Portfolio

A single-page portfolio site for a software engineering student, built with **React**, **TypeScript**, and **Vite**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Netlify, Vercel, GitHub Pages, or any static host.

## Customize content

Edit **`src/data/content.ts`** to update:

- Name, headline, email, GitHub URL
- About paragraphs
- Skills list
- Project descriptions, tech stacks, and repository links

## Add your profile photo

1. Save your image as `public/images/profile.jpg`
2. In `src/components/AvatarPlaceholder.tsx`, replace the SVG block with:

```tsx
<img
  src="/images/profile.jpg"
  alt={about.avatarAlt}
  className="avatar__photo"
/>
```

Add to `index.css`:

```css
.avatar__photo {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 3px solid var(--color-surface);
  object-fit: cover;
  aspect-ratio: 4 / 5;
}
```

## Project screenshots

Replace placeholder thumbnails by adding images under `public/images/projects/` and updating `ProjectThumbnail.tsx` to use `<img>` tags per project id.

## Links

- GitHub profile: [laviee143](https://github.com/laviee143)
- Email: laviee1434@gmail.com
