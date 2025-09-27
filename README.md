# Egovia CMS - Digital Government Solutions

A modern eGovernment content management system built with Next.js, TypeScript, and IBM Carbon Design System.

## 🎯 Project Overview

Egovia CMS is designed to provide government organizations with a professional, accessible, and user-friendly platform for managing digital content and services. This frontend foundation will be integrated with Strapi CMS in October 2025.

## ✨ Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, IBM Carbon Design System
- **Government-Ready**: Accessibility compliant, professional design, responsive layout
- **Content Management Ready**: Structured for easy Strapi CMS integration
- **Reusable Components**: Modular content blocks for flexible page building
- **Authentication Ready**: Login flow prepared for Strapi Auth integration

## 🚀 Getting Started

### Prerequisites

- Node.js 20 LTS or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd egovia-cms
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   # Update the values in .env.local as needed
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── detail/[slug]/     # Dynamic detail pages
│   ├── overview/          # Services overview page
│   ├── login/             # Authentication page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── MainLayout.tsx     # Main site layout
│   ├── HeroSection.tsx    # Hero component
│   ├── ServiceCards.tsx   # Service grid component
│   └── ContentBlocks.tsx  # Dynamic content blocks
└── lib/
    └── mockData.ts        # Mock data (will be replaced with Strapi)
```

## 🎨 Design System

This project uses **IBM Carbon Design System** for:
- Consistent, accessible UI components
- Government-appropriate styling
- Responsive grid system
- Professional color palette and typography

### Custom Styling

- SCSS with Carbon design tokens
- Custom CSS variables for Egovia branding
- Government-specific component variants

## 📱 Pages & Routes

- **`/`** - Home page with hero section and service overview
- **`/overview`** - Services overview with filtering and search
- **`/detail/[slug]`** - Dynamic detail pages with reusable content blocks
- **`/login`** - Authentication page (Strapi-ready)

## 🧩 Content Management

### Mock Data Structure

The project uses TypeScript interfaces to define content structure:

```typescript
interface Page {
  slug: string
  title: string
  description: string
  category: string
  sections: ContentSection[]
  // ... additional metadata
}

interface ContentSection {
  type: 'hero' | 'text' | 'cards' | 'cta' | 'list' | 'contact' | 'stats'
  title?: string
  content?: string
  items?: Array<{...}>
}
```

### Content Blocks

Reusable content blocks include:
- **Hero**: Banner sections with call-to-action
- **Text**: Rich text content areas
- **Cards**: Grid layouts for services/features
- **CTA**: Call-to-action sections
- **List**: Structured information lists
- **Contact**: Contact information blocks
- **Stats**: Statistical data displays

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- **ESLint**: Code linting with Next.js configuration
- **TypeScript**: Strict type checking
- **Prettier**: Code formatting (recommended)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push to main branch

### Environment Variables for Production

```bash
NEXT_PUBLIC_API_URL=https://your-strapi-instance.com
STRAPI_API_TOKEN=your-production-token
```

## 🛣️ October 2025 Roadmap

### Strapi CMS Integration

- Replace mock data with Strapi API calls
- Implement authentication with Strapi Auth
- Add content editing capabilities
- User role management
- Content workflow management

### Planned Features

- [ ] Strapi API integration
- [ ] JWT authentication
- [ ] Content editor interface
- [ ] Multi-user workflows
- [ ] Media management
- [ ] SEO optimization
- [ ] Advanced search functionality
- [ ] Analytics integration

## 🎯 Government Use Cases

This CMS is designed for:
- Municipal websites
- Government department portals
- Public service information
- Citizen engagement platforms
- Policy and regulation publishing
- Emergency information systems

## 🔒 Security & Accessibility

- **Accessibility**: WCAG 2.1 AA compliance through Carbon components
- **Security**: Prepared for secure authentication and authorization
- **Performance**: Optimized for government network requirements
- **SEO**: Government-friendly meta data and structured content

## 📞 Support & Documentation

### Key Implementation Notes

1. **Carbon Deviations**: Any customizations beyond Carbon defaults are documented in component comments
2. **Mock Data**: All content is currently mock data - see `src/lib/mockData.ts`
3. **Authentication**: Login flow is placeholder - will integrate with Strapi Auth
4. **Environment**: Configure `.env.local` for local development

### Future Strapi Integration Points

- **API Endpoints**: Ready for REST/GraphQL integration
- **Authentication**: Login component prepared for JWT tokens
- **Content Types**: TypeScript interfaces match planned Strapi schemas
- **Media**: Image placeholders ready for Strapi media library

## 📊 Performance

- Lighthouse score targets: 90+ across all metrics
- Core Web Vitals optimized
- Responsive design for all device sizes
- Optimized for government network requirements

---

**Built by Barok Assefa** | September 2025  
*Preparing for Strapi CMS integration in October 2025*
