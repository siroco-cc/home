# 🎨 Siroco Website Customization Guide

This guide will help you customize the text, logo, colors, and other visual elements of your Siroco consulting website.

## 🏢 Company Branding

### Company Name & Logo
The current "logo" is simply the text "Siroco" in the header. To customize it:

**Location:** `src/routes/index.tsx`
```jsx
// Current logo (line ~20)
<h1 className="text-2xl font-bold text-gray-900">Siroco</h1>
<span className="ml-3 text-sm text-gray-600">Strategy Consulting</span>

// Also in footer (line ~200)
<h3 className="text-2xl font-bold mb-2">Siroco</h3>
<p className="text-gray-400 mb-4">Strategic Excellence Delivered</p>
```

**To customize:**
1. Replace "Siroco" with your company name
2. Replace "Strategy Consulting" with your business type
3. Replace "Strategic Excellence Delivered" with your tagline
4. To add an actual logo image, replace the `<h1>` element with an `<img>` tag

### Taglines & Headlines
**Main Hero Section:**
```jsx
// Hero headline (line ~35)
<h2 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
  Strategic Excellence
  <span className="block text-blue-600">Delivered</span>
</h2>

// Hero description (line ~40)
<p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
  Transform your business with expert strategy consulting...
</p>
```

## 🎨 Color Customization

### Method 1: Custom Brand Colors (Recommended)
I've already set up custom brand colors in `tailwind.config.mjs`. You can now use these throughout your site:

```javascript
colors: {
  brand: {
    primary: '#1e40af',      // Main brand color
    secondary: '#2563eb',    // Secondary brand color  
    accent: '#3b82f6',       // Accent color
    light: '#dbeafe',        // Light brand color
    lightest: '#eff6ff',     // Lightest brand color
  }
}
```

**To change your brand colors:**
1. Update the hex values in `tailwind.config.mjs`
2. Replace existing color classes in components:
   - `bg-blue-600` → `bg-brand-secondary`
   - `text-blue-600` → `text-brand-secondary`
   - `hover:bg-blue-700` → `hover:bg-brand-primary`

### Method 2: Quick Color Swap
Simply find and replace color classes throughout the codebase:
- `blue-600` → `green-600` (or any Tailwind color)
- `blue-700` → `green-700`
- `blue-500` → `green-500`
- `blue-100` → `green-100`
- `blue-50` → `green-50`

### Key Color Locations
**Main Landing Page (`src/routes/index.tsx`):**
- Hero background: `bg-gradient-to-br from-blue-50 to-indigo-100`
- CTA buttons: `bg-blue-600 hover:bg-blue-700`
- Icons: `text-blue-600`
- Service card icons: `bg-blue-100` and `text-blue-600`

**Contact Form (`src/components/ContactForm.tsx`):**
- Focus rings: `focus:ring-blue-500`
- Submit button: `bg-blue-600 hover:bg-blue-700`

**Login Modal (`src/components/LoginModal.tsx`):**
- Focus rings: `focus:ring-blue-500`
- Submit button: `bg-blue-600 hover:bg-blue-700`

## 📝 Text Customization

### Contact Information
**Location:** `src/routes/index.tsx` (lines ~165-175)
```jsx
<div className="flex items-center">
  <Mail className="w-6 h-6 text-blue-600 mr-4" />
  <span className="text-gray-600">hello@siroco.consulting</span>
</div>
<div className="flex items-center">
  <Phone className="w-6 h-6 text-blue-600 mr-4" />
  <span className="text-gray-600">+1 (555) 123-4567</span>
</div>
<div className="flex items-center">
  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
  <span className="text-gray-600">San Francisco, CA</span>
</div>
```

### About Section
**Location:** `src/routes/index.tsx` (lines ~60-95)
- Company description paragraphs
- Statistics (50+ Projects, 15+ Industries)
- Core expertise list

### Services Section
**Location:** `src/routes/index.tsx` (lines ~100-160)
- Service titles and descriptions
- Each service card can be customized individually

### Form Labels
**Contact Form:** `src/components/ContactForm.tsx`
- Field labels: "Name", "Email", "Message"
- Placeholders: "Your full name", "your.email@example.com", etc.
- Button text: "Send Message", "Sending..."

**Login Modal:** `src/components/LoginModal.tsx`
- Field labels: "Username", "Password"
- Modal title: "Client Login"
- Button text: "Sign In", "Signing in...", "Cancel"

## 🖼️ Adding a Real Logo

To replace the text logo with an image:

1. Add your logo image to the `public` folder (e.g., `public/logo.png`)
2. Replace the header logo in `src/routes/index.tsx`:

```jsx
// Replace this:
<h1 className="text-2xl font-bold text-gray-900">Siroco</h1>

// With this:
<img src="/logo.png" alt="Your Company Name" className="h-8 w-auto" />
```

## 🎯 Quick Customization Checklist

### Essential Changes:
- [ ] Update company name in header and footer
- [ ] Change tagline "Strategic Excellence Delivered"
- [ ] Update contact information (email, phone, location)
- [ ] Customize hero headline and description
- [ ] Update about section content
- [ ] Modify service offerings
- [ ] Change brand colors in `tailwind.config.mjs`

### Optional Enhancements:
- [ ] Add real logo image
- [ ] Customize statistics (50+ Projects, 15+ Industries)
- [ ] Update form placeholders and labels
- [ ] Add social media links
- [ ] Customize footer content

## 🚀 Advanced Customizations

### Adding New Sections
You can add new sections to the landing page by inserting them between existing sections in `src/routes/index.tsx`.

### Custom Fonts
Add custom fonts by updating `src/styles.css` or importing them in `index.html`.

### Additional Color Schemes
You can create multiple color schemes by adding more color sets to `tailwind.config.mjs`:

```javascript
colors: {
  brand: { /* primary colors */ },
  accent: { /* accent colors */ },
  neutral: { /* neutral colors */ }
}
```

---

**Need help?** All the main customization points are in:
- `src/routes/index.tsx` - Main landing page content
- `src/components/ContactForm.tsx` - Contact form
- `src/components/LoginModal.tsx` - Login modal
- `tailwind.config.mjs` - Brand colors
