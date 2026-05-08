# 🎨 Portfolio Website - Hoàng Văn Vinh

A modern, professional portfolio website built with pure **HTML + CSS + JavaScript** (no frameworks). Inspired by contemporary CV/resume layouts with a warm, creative orange and yellow color scheme.

---

## ✨ Features

### 🎯 Design System
- **Clean & Minimalist** - Professional student designer aesthetic
- **Warm Color Palette** - Orange (#ff7a00), Soft Orange (#ffa94d), Golden Yellow (#ffd43b)
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern Typography** - Clear hierarchy and excellent readability

### 🌙 Dark Mode
- **Smooth Theme Toggle** - Beautiful transition between light and dark modes
- **Persistent Storage** - Theme preference saved in localStorage
- **Premium Feel** - Carefully designed dark theme with warm orange accents
- **Accessible** - Easy toggle button in the top-right corner

### ✨ Special Visual Effects
- **Sparkle Animations** - Subtle glowing effects on avatars and accents
- **Glow Effects** - Warm glowing highlights on buttons and cards
- **Shimmer Effects** - Light shimmer animation on interactive elements
- **Gradient Accents** - Beautiful orange-yellow gradients throughout
- **Smooth Transitions** - All interactions use 0.3s-0.5s transitions
- **Floating Animations** - Elements gently float and bounce

### 📱 Responsive Sections
1. **Hero Section** - Avatar, name, tagline, and "Hire Me" CTA
2. **About Me** - Personal introduction and background
3. **Skills** - Grid of design tools (Figma, Photoshop, Illustrator)
4. **Portfolio Gallery** - Image grid with hover overlays and modal preview
5. **Hobbies** - Playful cards showcasing interests
6. **Contact** - Call-to-action section with contact information
7. **Navigation** - Sticky header with smooth scrolling

---

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Semantic markup structure
- **CSS3** - Advanced animations, variables, and gradients
- **JavaScript (Vanilla)** - No frameworks or dependencies
- **LocalStorage** - Theme persistence

### Key Features
✅ Pure HTML + CSS + JS (no frameworks)  
✅ Mobile responsive (320px - 4K)  
✅ CSS Variables for theming  
✅ Smooth scrolling navigation  
✅ Modal gallery for portfolio items  
✅ Dark mode toggle  
✅ Semantic HTML structure  
✅ Organized CSS with clear sections  
✅ Smooth hover animations  
✅ Intersection Observer for lazy animations  
✅ Print-friendly styles  

---

## 📁 File Structure

```
CV_portfolio/
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # Interactivity and functionality
└── README.md          # This file
```

---

## 🚀 How to Use

### Option 1: Open Locally
1. Clone or download the repository
2. Open `index.html` in your browser
3. Done! The website will work immediately

### Option 2: Using Python Server (Optional)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser.

---

## 🎨 Customization Guide

### Change Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-orange: #ff7a00;      /* Main color */
    --soft-orange: #ffa94d;         /* Secondary color */
    --golden-yellow: #ffd43b;       /* Accent color */
    /* ... other colors */
}
```

### Update Personal Information
Edit the following in `index.html`:
- Name: `<h1 class="hero-title">Your Name</h1>`
- About text: `<p class="about-text">Your bio here</p>`
- Contact email: `<a href="mailto:your@email.com">`

### Add Portfolio Items
Add new grid items in the Portfolio Gallery section:
```html
<div class="portfolio-item">
    <div class="portfolio-image-wrapper">
        <img src="your-image.jpg" alt="Project Name">
        <div class="portfolio-overlay">
            <h3>Your Project</h3>
            <p>Description</p>
            <button class="btn-small btn-overlay">Xem Chi Tiết</button>
        </div>
        <div class="glow-accent"></div>
    </div>
</div>
```

### Modify Skills
Update the skills grid:
```html
<div class="skill-card">
    <div class="skill-icon">🎯</div>
    <h3 class="skill-name">Your Skill</h3>
    <p class="skill-desc">Skill description</p>
    <div class="card-shine"></div>
</div>
```

---

## 🎯 Browser Compatibility

✅ Chrome/Edge - Latest versions  
✅ Firefox - Latest versions  
✅ Safari - Latest versions  
✅ Mobile browsers - iOS Safari, Chrome Mobile  
✅ IE11 - Limited support (no CSS variables)  

---

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1200px (optimized grid)
- **Mobile**: 480px - 768px (single column)
- **Small Mobile**: Below 480px (ultra-compact)

---

## ⚡ Performance

- **No external dependencies** - Lightweight and fast
- **Optimized CSS** - Efficient selectors and animations
- **Lazy loading** - Images load as they appear
- **Smooth animations** - GPU-accelerated transforms
- **Small file size** - ~15KB total (HTML + CSS + JS)

---

## 🎯 Color System

### Light Theme
- **Primary Orange**: `#ff7a00` - Main accent color
- **Soft Orange**: `#ffa94d` - Secondary accent
- **Golden Yellow**: `#ffd43b` - Highlight color
- **Pure White**: `#ffffff` - Background
- **Light Orange**: `#fff4e6` - Soft background sections

### Dark Theme
- **Dark Background**: `#1a1a1a` - Main background
- **Dark Card**: `#2a2a2a` - Cards and sections
- **Dark Orange**: `#e67e00` - Primary accent
- **Light Text**: `#f0f0f0` - Text color

---

## 🎬 Animation Effects

The portfolio includes several premium animation effects:

1. **Sparkle** - Twinkling effects on avatar
2. **Float** - Gentle floating motion
3. **Blob** - Animated gradient blobs in hero
4. **Shine** - Shimmer effect on buttons and cards
5. **Bounce** - Playful bouncing motion
6. **Glow** - Warm glowing effects on hover
7. **Spin** - 3D rotation on hover
8. **Heartbeat** - Pulsing animation on footer heart

---

## 👤 Personal Information

**Name**: Hoàng Văn Vinh  
**School**: GDU (Giao Dục Đại Học)  
**Major**: CNNT - Đồ Họa Kỹ Thuật Số (IT - Digital Graphics)  
**Email**: hoangvanvinh8464@gmail.com  

---

## 📝 License

This portfolio website is created for personal use. Feel free to customize and use it as your own portfolio.

---

## 💡 Tips & Tricks

- **Keyboard Navigation**: Use arrow keys to scroll smoothly
- **Dark Mode**: Click the moon/sun icon in the top-right
- **Portfolio Modal**: Click "Xem Chi Tiết" on portfolio items
- **Smooth Scrolling**: Click navigation links for smooth scroll
- **Mobile Friendly**: Works great on all device sizes

---

## 🔧 Future Enhancements

Potential improvements:
- Add contact form backend
- Add more portfolio projects
- Add animation preferences toggle
- Add language switcher (Vietnamese/English)
- Add social media links
- Add blog section
- Add testimonials section
- Add SEO optimization

---

## 📞 Support

For any questions or suggestions, please reach out to **hoangvanvinh8464@gmail.com**

---

**Made with ♥ and creativity** ✨  
Designed as a professional UI/UX student portfolio