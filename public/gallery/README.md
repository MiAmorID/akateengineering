# Gallery Images

This folder contains all gallery images for the AKATE Engineering portfolio gallery.

## File Naming Convention

Name your images according to their category:

- `projects-*.jpg` (or .webp) - for "Projects" category
- `installations-*.jpg` - for "Installations" category  
- `equipment-*.jpg` - for "Equipment" category
- `team-*.jpg` - for "Team" category
- `workspace-*.jpg` - for "Workspace" category
- `other-*.jpg` - for "Other" category

Example:
```
projects-1.jpg
projects-2.jpg
installations-1.jpg
installations-2.jpg
equipment-1.jpg
team-1.jpg
workspace-1.jpg
```

## Image Specifications

- **Format**: JPG or WebP (WebP preferred for smaller file size)
- **Aspect ratio**: Square (1:1) recommended for best gallery appearance
- **Dimensions**: 800x800px or larger
- **File size**: Keep under 300KB per image for faster loading
- **Compression**: Use tools like TinyPNG or ImageOptim to compress images

## Auto-Detection

The gallery automatically detects images based on their filename prefix:
- Images are sorted by category based on the prefix (word before the dash)
- Each category becomes a filter button
- Simply add images to this folder and they'll appear in the gallery

## Placeholder Images

Initially, the gallery uses placeholder images. Once you add real images with the correct naming convention, they will automatically replace the placeholders.

## Steps to Add Images

1. Take or prepare your images
2. Name them according to the convention above
3. Compress/optimize the images
4. Upload them to this folder (`public/gallery/`)
5. Restart the dev server or refresh the page
6. Images will automatically appear in the gallery with the correct categories
