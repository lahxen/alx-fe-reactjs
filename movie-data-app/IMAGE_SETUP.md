# 🖼️ How to Add Your Movie Images

## Quick Setup

1. **Copy your images** to the `public/images/` folder
2. **Update the image mapping** in `src/services/imageService.ts`

## Step 1: Add Your Images

Copy your movie images (JPG, PNG, SVG) to:
```
public/images/
├── your-movie-1.jpg
├── your-movie-2.png
├── A (1).jpg  (your existing images)
├── A (2).jpg
└── ...
```

## Step 2: Update Image Mapping

Edit `src/services/imageService.ts` and add your movies:

```typescript
export const movieImageMap: ImageMapping = {
  // Add your custom mappings here
  'batman': '/images/A (1).jpg',           // Replace with your Batman image
  'star wars': '/images/A (2).jpg',        // Replace with your Star Wars image
  'avengers': '/images/A (3).jpg',         // Replace with your Marvel image
  'the matrix': '/images/A (4).jpg',       // Add more movies
  'inception': '/images/A (5).jpg',
  'interstellar': '/images/A (6).jpg',
  'the godfather': '/images/A (7).jpg',
  // Add as many as you want...
};
```

## Step 3: Hero Section Images

Update the featured movies in `src/pages/HomePage.tsx`:

```tsx
<div className="featured-movies">
  <div className="featured-movie">
    <img src="/images/A (1).jpg" alt="Your Movie 1" />
  </div>
  <div className="featured-movie">
    <img src="/images/A (2).jpg" alt="Your Movie 2" />
  </div>
  <div className="featured-movie">
    <img src="/images/A (3).jpg" alt="Your Movie 3" />
  </div>
</div>
```

## Image Requirements

- **Formats**: JPG, PNG, SVG, WebP
- **Size**: Any size (will be automatically resized)
- **Ratio**: Movie posters work best (2:3 aspect ratio)
- **Names**: Use simple names without special characters

## Tips

1. **High quality images** look better
2. **Movie posters** work better than screenshots
3. **Consistent naming** makes mapping easier
4. **Optimize file sizes** for faster loading

Your movie database will automatically use your custom images when the movie titles match!