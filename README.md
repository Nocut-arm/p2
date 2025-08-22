# Premium Auto Showroom Website

A modern, responsive car showroom website designed for GitHub Pages hosting. Features a clean design with vehicle collections, about information, and interactive galleries.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Two Main Endpoints**: About page and Collections page as requested
- **Vehicle Categories**: Hatchbacks, SUVs, Sedans, and Luxury vehicles
- **Interactive Gallery**: Click thumbnails to view high-quality images and videos
- **Modern UI/UX**: Smooth animations, hover effects, and intuitive navigation
- **GitHub Pages Ready**: Static HTML/CSS/JS files perfect for GitHub Pages hosting

## 🚗 Vehicle Collections

The website showcases vehicles in four main categories:

1. **Hatchbacks** - Compact and efficient city cars
2. **SUVs** - Spacious and versatile family vehicles  
3. **Sedans** - Elegant and comfortable luxury cars
4. **Luxury** - Premium and exclusive vehicles

Each category includes:
- High-quality vehicle images
- Video content where available
- Detailed descriptions
- Interactive thumbnails that open in modal view

## 📱 Responsive Design

- **Desktop**: Full-featured layout with side-by-side content
- **Tablet**: Optimized for medium screens
- **Mobile**: Mobile-first design with hamburger navigation
- **Touch Support**: Swipe gestures for mobile users

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Interactive functionality and smooth user experience
- **Font Awesome**: Icon library for visual elements
- **Google Fonts**: Inter font family for modern typography

## 📁 File Structure

```
p2/
├── index.html          # Home page
├── about.html          # About page with services and contact info
├── collections.html    # Vehicle collections with categories
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Create a new repository** on GitHub
2. **Upload all files** to the repository
3. **Go to Settings** → **Pages**
4. **Select source**: Choose "Deploy from a branch"
5. **Select branch**: Choose `main` or `master`
6. **Select folder**: Choose `/ (root)`
7. **Click Save** - Your site will be available at `https://username.github.io/repository-name`

### Option 2: Manual Deployment

1. **Clone the repository** to your local machine
2. **Make any customizations** you want
3. **Push changes** to GitHub
4. **Enable GitHub Pages** in repository settings

### Option 3: Using GitHub CLI

```bash
# Clone the repository
git clone https://github.com/username/repository-name.git
cd repository-name

# Add your files
git add .
git commit -m "Initial commit"
git push origin main

# Enable GitHub Pages
gh repo edit --enable-pages
```

## 🎨 Customization

### Changing Colors
Edit `styles.css` and modify the CSS custom properties:
```css
:root {
    --primary-color: #1e3c72;
    --secondary-color: #667eea;
    --accent-color: #ffd700;
}
```

### Adding New Vehicles
1. **Add vehicle data** to `collections.html`
2. **Update images/videos** with your own content
3. **Modify descriptions** to match your inventory

### Updating Contact Information
Edit the contact details in `about.html`:
- Phone numbers
- Email addresses
- Physical address
- Business hours

## 📸 Image Requirements

- **Thumbnail images**: 300x200px (3:2 ratio)
- **Full-size images**: 800x600px or higher
- **Video thumbnails**: Use a representative frame from the video
- **Format**: JPG/PNG for images, MP4 for videos
- **Optimization**: Compress images for web use

## 🔧 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile browsers**: iOS Safari, Chrome Mobile

## 📱 Mobile Features

- **Touch gestures**: Swipe between vehicle categories
- **Responsive navigation**: Hamburger menu for mobile
- **Optimized images**: Lazy loading for performance
- **Touch-friendly**: Large touch targets and smooth interactions

## 🚀 Performance Features

- **Lazy loading**: Images load as they come into view
- **Optimized animations**: Smooth 60fps animations
- **Efficient CSS**: Minimal repaints and reflows
- **Compressed assets**: Optimized for fast loading

## 🔒 Security Features

- **No external dependencies**: All resources are self-contained or from trusted CDNs
- **HTTPS ready**: Works perfectly with GitHub Pages HTTPS
- **XSS protection**: Proper HTML escaping and sanitization

## 📞 Support

For questions or issues:
1. Check the [GitHub Issues](https://github.com/username/repository-name/issues) page
2. Review the code comments for implementation details
3. Ensure all files are properly uploaded to GitHub

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

Potential improvements for future versions:
- **Search functionality** for vehicles
- **Contact forms** for customer inquiries
- **Vehicle comparison** tools
- **Online booking** system
- **Multi-language support**
- **Dark mode** toggle
- **Advanced filtering** options

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ for the automotive industry**

*Perfect for car dealerships, showrooms, and automotive businesses looking for a professional online presence.*
