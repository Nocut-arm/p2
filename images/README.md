# Images Folder

This folder contains all the images used by your car showroom website.

## 📁 **Folder Structure:**
```
images/
├── about/           # Images for the About page
│   ├── showroom.jpg # Main showroom image (replaces building icon)
│   └── logo.png     # Your business logo (optional)
├── collections/     # Images for the Collections page
│   ├── hatchbacks/  # Hatchback car images
│   ├── suvs/        # SUV car images
│   ├── sedans/      # Sedan car images
│   └── luxury/      # Luxury car images
└── icons/           # Icon images (if not using Font Awesome)
```

## 🖼️ **Image Requirements:**

### **About Page:**
- **logo.jpg**: Your business logo (recommended: 40x40px or larger, JPG format)
- **showroom-main.jpg**: Main showroom image (recommended: 500x500px, JPG format)

### **Collections Page:**
- **Car Images**: High-quality photos of your vehicles
- **Format**: JPG or PNG
- **Size**: Recommended 800x600px or larger
- **Naming**: Use descriptive names like `honda-city-sedan.jpg`, `toyota-innova-suv.jpg`

## 📝 **How to Add Images:**

1. **Copy your images** into the appropriate subfolder
2. **Use descriptive filenames** (no spaces, use hyphens)
3. **Optimize images** for web (compress if they're very large)
4. **Update HTML files** to reference local images instead of internet URLs

## 🔧 **Current Internet Images to Replace:**

### **About Page:**
- `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop&crop=center` → `images/about/showroom-main.jpg`

### **Collections Page:**
- All Unsplash URLs → Your local car images

## 💡 **Tips:**
- Keep image file sizes under 2MB for fast loading
- Use consistent aspect ratios for better layout
- Test your website after adding images to ensure they display correctly
