Place your hero slider images in this folder.

Naming convention (used by the slider by default):
- slide-1.jpg (or .webp)
- slide-2.jpg
- slide-3.jpg

Recommendations:
- Aspect ratio: 16:9 (e.g., 1600x900)
- Use compressed WebP or high-quality JPG to balance size and quality
- Keep file sizes under ~400 KB for faster load times

If you prefer different filenames, update the `images` array in `src/components/Hero.tsx` to match.

If a local image is missing, the slider will fall back to a remote image or a fallback SVG.