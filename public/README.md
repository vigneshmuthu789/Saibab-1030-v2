# Public Folder

This folder contains static assets that will be served directly by Next.js.

## Usage

Place images, icons, and other static files here. They can be referenced in your code using the `/` path prefix.

### Example:

```tsx
// In your component
<Image src="/images/sai-baba.jpg" alt="Sai Baba" width={500} height={300} />
```

## Folder Structure

```
public/
├── images/          # Image files (recommended)
├── icons/           # Icon files
└── fonts/           # Custom font files (if needed)
```

## Notes

- Files in this folder are served from the root URL (`/`)
- Do not put sensitive files here as they are publicly accessible
- Optimize images before adding them to improve performance


