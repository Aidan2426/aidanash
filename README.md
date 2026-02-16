# aidanash
# Aidan Ash - Personal Portfolio Website

🌐 **Live Site:** [https://aidan2426.github.io/aidanash/](https://aidan2426.github.io/aidanash/)

---

A professional portfolio website built with HTML, CSS, and JavaScript, featuring a modern white/black/dark blue aesthetic. Optimized for GitHub Pages deployment.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with full desktop support
- **Modern Aesthetics**: Clean white/black/dark blue color scheme with technical minimalism
- **Interactive Navigation**: Smooth scrolling, mobile menu, and active page indicators
- **Card-Based Layout**: Consistent design system across all pages
- **Animation Effects**: Fade-in animations and smooth transitions
- **Contact Form**: Client-side validation for user inquiries
- **SEO Optimized**: Meta tags and semantic HTML structure

## 📄 Pages

- **Home** - Hero section, featured projects, and quick stats
- **About** - Bio, education at Illinois Institute of Technology, technical skills, and interests
- **Work** - Professional experience including Arconic, Norwin School District, and Carwens
- **Projects** - Technical projects: Ashburn watch, Real Estate App, Wordle, and P33 Savings App
- **Contact** - Contact information, form, and availability

## 📁 Project Structure

```
aidanash/
├── index.html           # Home page with hero and featured projects
├── about.html           # About page with bio, education, and skills
├── work.html            # Work experience showcase
├── projects.html        # Technical projects portfolio
├── contact.html         # Contact information and form
├── css/
│   └── style.css        # Main stylesheet with design system
├── js/
│   └── main.js          # JavaScript for interactivity
├── images/              # Project screenshots and photos
└── assets/
    └── Aidan_Ash_Resume.pdf  # Downloadable resume
```

## 🎨 Design System

### Color Palette
- **Dark Blue**: `#0a1628` (Primary headings, icons)
- **Navy**: `#1e3a5f` (Accent elements)
- **Blue**: `#2563eb` (Interactive elements, links)
- **White**: `#ffffff` (Card backgrounds)
- **Off-White**: `#f8fafc` (Page background)
- **Black**: `#0f172a` (Body text)
- **Gray**: `#64748b` (Secondary text)

### Typography
- **Display Font**: Space Mono (Headings, technical elements)
- **Body Font**: Inter (Paragraphs, content)

## 🛠️ Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aidan2426/aidanash.git
   cd aidanash
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have it installed)
   npx http-server
   ```

3. **View the site**
   - Navigate to `http://localhost:8000` in your browser

## 📝 Making Changes

### Update Content
1. Edit the HTML files directly
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```
3. GitHub Pages will automatically rebuild (takes 2-5 minutes)

### Adding Your Resume
1. Export your resume as PDF
2. Rename it to `Aidan_Ash_Resume.pdf`
3. Place it in the `assets/` folder
4. Commit and push

### Adding Project Images
1. Add images to the `images/` folder
2. Update the `<img>` tags in `projects.html`:
   ```html
   <img src="images/your-project.png" alt="Project Name" class="card-image">
   ```
3. Commit and push

### Modifying Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
  --color-dark-blue: #0a1628;
  --color-blue: #2563eb;
  /* Update any color here */
}
```

## 🔧 Advanced Features

### Contact Form Integration

The current form uses client-side validation. To make it functional:

**Option 1: Formspree (Easiest)**
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form in `contact.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: EmailJS**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add their SDK to your HTML
3. Update the form submission in `js/main.js`

**Option 3: Netlify Forms** (if deploying to Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
```

### Adding Google Analytics

Add before closing `</head>` tag in all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Site not updating after push
- Wait 5-10 minutes for GitHub Pages to rebuild
- Check the Actions tab: https://github.com/Aidan2426/aidanash/actions
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito/private browsing mode

### Images not loading
- Check file paths are correct (case-sensitive!)
- Ensure images are in the `images/` folder
- Verify file extensions match

### Styles not applying
- Clear browser cache
- Check CSS file path in HTML
- Open browser DevTools (F12) to check for errors

### 404 errors
- Make sure all HTML files are in the root directory
- Check that filenames match the links (case-sensitive)
- Verify GitHub Pages is enabled in Settings → Pages

## 📄 License

This project is open source and available for personal use.

## 🤝 Contact

**Aidan Ash**
- 🌐 Website: [https://aidan2426.github.io/aidanash/](https://aidan2426.github.io/aidanash/)
- 📧 Email: aash3@hawk.illinoistech.edu
- 💼 LinkedIn: [linkedin.com/in/aidan-ash-806641283](https://www.linkedin.com/in/aidan-ash-806641283/)
- 💻 GitHub: [github.com/Aidan2426](https://github.com/Aidan2426)

---

**Built with using HTML, CSS, and JavaScript**

*Illinois Institute of Technology | Computer Science & Data Science | Class of 2027*