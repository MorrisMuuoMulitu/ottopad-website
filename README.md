# Ottopad Technologies Website

![Ottopad Technologies](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Premium digital agency website showcasing Ottopad Technologies - Nairobi's premier development agency blending Silicon Savannah innovation with world-class engineering.

## ✨ Features

- 🎨 **Modern Design** - Clean, minimalist design with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **High Performance** - Built with Next.js for optimal speed and SEO
- ♿ **Accessibility** - WCAG compliant with ARIA labels and keyboard navigation
- 🔒 **Security** - Comprehensive security headers and CSRF protection
- 🌐 **SEO Optimized** - Meta tags, Open Graph, Twitter cards, and sitemap
- 📬 **Contact Form** - Functional form with validation and API integration
- 🎯 **TypeScript** - Fully typed for better developer experience
- 🔄 **Error Handling** - Error boundaries and graceful error states

## 🚀 Tech Stack

- **Framework:** Next.js 14.2
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Validation:** Zod
- **Deployment:** Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/MorrisMuuoMulitu/ottopad-website.git

# Navigate to directory
cd ottopad-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 📁 Project Structure

```
ottopad-website/
├── components/          # Reusable React components
│   ├── SEO.tsx         # SEO meta tags component
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   ├── Work.tsx        # Portfolio/case studies
│   ├── Approach.tsx    # Company approach
│   ├── Testimonials.tsx # Client testimonials
│   ├── ContactForm.tsx # Contact form with validation
│   ├── Footer.tsx      # Footer section
│   └── ErrorBoundary.tsx # Error handling
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   │   └── contact.ts # Contact form handler
│   ├── _app.tsx       # App wrapper
│   └── index.tsx      # Home page
├── styles/            # Global styles
│   └── globals.css    # Tailwind imports
├── public/            # Static assets
├── .env.example       # Environment variables template
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_CONTACT_EMAIL=hello@ottopad.co.ke
```

### Security Headers

The application includes comprehensive security headers configured in `next.config.js`:
- Strict-Transport-Security
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

## 📝 Contact Form

The contact form includes:
- Client-side validation
- Server-side validation with Zod
- Loading states
- Error handling
- Success feedback

API endpoint: `/api/contact`

## 🎨 Customization

### Colors

Update Tailwind theme in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      brand: {
        emerald: '#10b981',
        teal: '#14b8a6',
      }
    }
  }
}
```

### Content

Edit component files in the `/components` directory to update content, images, and styling.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MorrisMuuoMulitu/ottopad-website)

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 🎯 Core Web Vitals: All Green
- 📦 Bundle Size: Optimized with code splitting
- 🖼️ Images: Optimized with Next.js Image component

## ♿ Accessibility

- WCAG 2.1 Level AA compliant
- Semantic HTML
- ARIA labels and landmarks
- Keyboard navigation support
- Focus visible states
- Screen reader friendly

## 🔒 Security

- Security headers configured
- CSRF protection
- Input validation and sanitization
- No exposed secrets
- Dependencies regularly updated

## 🐛 Known Issues

None at this time. Report issues at [GitHub Issues](https://github.com/MorrisMuuoMulitu/ottopad-website/issues)

## 📄 License

Copyright © 2025 Ottopad Technologies. All rights reserved.

## 👥 Contributors

- Morris Muuo Mulitu - [@MorrisMuuoMulitu](https://github.com/MorrisMuuoMulitu)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/MorrisMuuoMulitu/ottopad-website/issues).

## 📧 Contact

- Website: [ottopad.co.ke](https://ottopad.co.ke)
- Email: hello@ottopad.co.ke
- Location: Westlands, Nairobi, Kenya

---

Made with ❤️ in Nairobi | Built with Next.js, TypeScript & Tailwind CSS
