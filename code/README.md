# NexPay - Smart Device Financing Solutions

A modern, responsive website for NexPay, a device financing platform that empowers businesses with innovative financing solutions. Built with React, Vite, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional design with gradient themes (indigo, purple, cyan, blue)
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Multiple Pages**: 
  - Home - Hero section, features, stats, how it works
  - About - Company story, mission, vision, values
  - Services - Device categories, financing plans, core services
  - FAQ - Comprehensive Q&A with collapsible sections
  - Privacy Policy - Detailed privacy information
  - Terms & Conditions - Legal terms and conditions
  - Apply - Interactive application form with validation
- **Smooth Navigation**: Sticky navbar with active link highlighting
- **Interactive Components**: 
  - Collapsible FAQ sections
  - Form validation and submission
  - Hover effects and animations
- **Professional Footer**: Multi-column layout with links and contact info

## 🎨 Design Theme

- **Primary Colors**: Indigo (#4F46E5), Purple (#9333EA), Cyan (#06B6D4), Blue (#3B82F6)
- **Background**: Dark theme with gradients (Gray-900 to Gray-950)
- **Accents**: Cyan-400 and Blue-500 for highlights
- **Typography**: Clean, modern fonts with proper hierarchy

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd nex-pay
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📦 Built With

- **React 18.2.0** - UI library
- **Vite 5.0.0** - Build tool and dev server
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library

## 📁 Project Structure

```
nex-pay/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar component
│   │   └── Footer.jsx       # Footer component
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── About.jsx        # About page
│   │   ├── Services.jsx     # Services page
│   │   ├── FAQ.jsx          # FAQ page
│   │   ├── Privacy.jsx      # Privacy Policy page
│   │   ├── Terms.jsx        # Terms & Conditions page
│   │   └── Apply.jsx        # Application form page
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── README.md               # This file
```

## 🎯 Key Pages

### Home
- Hero section with call-to-action buttons
- Feature cards showcasing platform benefits
- Statistics section
- How it works (3-step process)
- Final CTA section

### About
- Company story and background
- Mission, vision, and values
- Why partner with us section
- Team information

### Services
- Device categories (smartphones, laptops, tablets, etc.)
- Core services (device protection, payment management, analytics)
- Flexible financing plans (Basic, Standard, Premium)
- Additional services

### FAQ
- Categorized questions (General, For Retailers, For Customers, Technical, Support)
- Interactive collapsible answers
- Contact support section

### Apply
- Comprehensive application form
- Form validation
- Success confirmation page
- Next steps information

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme.

### Content
All page content is in the respective component files under `src/pages/`.

### Styling
Global styles are in `src/index.css`. Component-specific styles use Tailwind utility classes.

## 📄 License

This project is created for NexPay.

## 👥 Contact

For questions or support, please contact:
- Email: info@nexpay.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using React and Tailwind CSS
