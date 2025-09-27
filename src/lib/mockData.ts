/**
 * Mock data structures for Egovia CMS
 * 
 * PURPOSE: Simulate Strapi CMS API responses for September 2025 frontend development
 * REPLACEMENT: This will be replaced with Strapi API calls in October 2025
 * 
 * STRUCTURE: Designed to match future Strapi content types and API responses
 * 
 * CARBON INTEGRATION: All components use this data structure for dynamic rendering
 */

export interface MenuItem {
  title: string
  href: string
  children?: MenuItem[]
}

export interface PageMeta {
  title: string
  description: string
  keywords: string[]
  lastUpdated: string
  author: string
  department: string
}

export interface ContentSection {
  type: 'hero' | 'text' | 'cards' | 'cta' | 'list' | 'contact' | 'stats'
  title?: string
  content?: string
  items?: Array<{
    title: string
    description: string
    href?: string
    icon?: string
  }>
  data?: any
}

export interface Page {
  slug: string
  title: string
  description: string
  category: string
  lastUpdated: string
  author: string
  department: string
  sections: ContentSection[]
  relatedPages?: Array<{
    title: string
    slug: string
  }>
}

// Mock page data
const mockPages: Page[] = [
  {
    slug: 'municipal-energy',
    title: 'Municipal Energy Supply',
    description: 'Comprehensive information about our city\'s renewable energy initiatives, power grid management, and sustainability programs.',
    category: 'Energy',
    lastUpdated: '2025-09-15',
    author: 'Sarah Johnson',
    department: 'Department of Energy & Environment',
    sections: [
      {
        type: 'hero',
        title: 'Powering Our Community Sustainably',
        content: 'Our municipal energy program is committed to providing clean, reliable, and affordable energy to all residents while reducing our carbon footprint.'
      },
      {
        type: 'text',
        title: 'Our Energy Vision',
        content: 'We are transitioning to 100% renewable energy by 2030. Our comprehensive energy strategy includes solar installations, wind power partnerships, and energy efficiency programs for residents and businesses.\n\nThis initiative represents our commitment to environmental stewardship and economic sustainability for future generations.'
      },
      {
        type: 'stats',
        title: 'Energy by the Numbers',
        items: [
          { title: '45%', description: 'Renewable Energy' },
          { title: '12,000', description: 'Homes Powered' },
          { title: '25%', description: 'Cost Reduction' },
          { title: '2030', description: 'Carbon Neutral Goal' }
        ]
      },
      {
        type: 'cards',
        title: 'Energy Programs',
        items: [
          {
            title: 'Solar Incentives',
            description: 'Get rebates and tax credits for residential solar installations.',
            href: '/programs/solar'
          },
          {
            title: 'Energy Efficiency',
            description: 'Free home energy audits and weatherization assistance.',
            href: '/programs/efficiency'
          },
          {
            title: 'Community Solar',
            description: 'Subscribe to community solar gardens if you can\'t install panels.',
            href: '/programs/community-solar'
          }
        ]
      },
      {
        type: 'contact',
        title: 'Get Energy Support',
        items: [
          {
            title: 'Energy Hotline',
            description: '(555) 123-POWER',
            icon: 'phone',
            href: 'tel:5551237693'
          },
          {
            title: 'Energy Services',
            description: 'energy@cityname.gov',
            icon: 'email',
            href: 'mailto:energy@cityname.gov'
          }
        ]
      }
    ],
    relatedPages: [
      { title: 'Transportation', slug: 'transportation' },
      { title: 'Environmental Programs', slug: 'environment' }
    ]
  },
  {
    slug: 'transportation',
    title: 'Public Transportation Network',
    description: 'Information about bus routes, schedules, accessibility features, and future transit expansion plans for our community.',
    category: 'Transportation',
    lastUpdated: '2025-09-18',
    author: 'Michael Chen',
    department: 'Transit Authority',
    sections: [
      {
        type: 'hero',
        title: 'Connecting Our Community',
        content: 'Our public transit system provides safe, reliable, and accessible transportation options for residents, workers, and visitors throughout the metro area.'
      },
      {
        type: 'text',
        title: 'Transit Network Overview',
        content: 'Our comprehensive transit network includes 15 bus routes serving over 200 stops across the city. We operate from 5:30 AM to 11:30 PM on weekdays, with extended weekend service.\n\nAll buses are wheelchair accessible and equipped with bike racks. We offer real-time tracking through our mobile app and digital displays at major stops.'
      },
      {
        type: 'cards',
        title: 'Transit Services',
        items: [
          {
            title: 'Route Planning',
            description: 'Plan your trip with real-time schedules and route maps.',
            href: '/transit/routes'
          },
          {
            title: 'Mobile Ticketing',
            description: 'Buy and use tickets directly from your smartphone.',
            href: '/transit/mobile'
          },
          {
            title: 'Accessibility',
            description: 'Information about accessible transit options and services.',
            href: '/transit/accessibility'
          }
        ]
      },
      {
        type: 'cta',
        title: 'Start Using Public Transit Today',
        content: 'Download our transit app for real-time schedules, route planning, and mobile ticketing.',
        items: [
          { title: 'Download App', href: '/transit/app' },
          { title: 'View Routes', href: '/transit/routes' }
        ]
      }
    ],
    relatedPages: [
      { title: 'Municipal Energy', slug: 'municipal-energy' },
      { title: 'Parking Services', slug: 'parking' }
    ]
  },
  {
    slug: 'housing',
    title: 'Affordable Housing Programs',
    description: 'Housing assistance programs, zoning information, building permits, and community development initiatives for residents.',
    category: 'Housing',
    lastUpdated: '2025-09-20',
    author: 'Jennifer Martinez',
    department: 'Housing & Community Development',
    sections: [
      {
        type: 'hero',
        title: 'Housing for Everyone',
        content: 'We are committed to ensuring that all residents have access to safe, affordable, and quality housing options in our community.'
      },
      {
        type: 'text',
        title: 'Housing Programs',
        content: 'Our housing programs include first-time homebuyer assistance, rental assistance, affordable housing development, and housing rehabilitation loans.\n\nWe work with local developers, non-profits, and community organizations to create and preserve affordable housing throughout the city.'
      },
      {
        type: 'list',
        title: 'Available Programs',
        items: [
          {
            title: 'First-Time Homebuyer',
            description: 'Down payment assistance and favorable loan terms for qualifying first-time buyers'
          },
          {
            title: 'Rental Assistance',
            description: 'Emergency rental assistance and housing vouchers for low-income families'
          },
          {
            title: 'Home Rehabilitation',
            description: 'Low-interest loans for essential home repairs and accessibility improvements'
          },
          {
            title: 'Senior Housing',
            description: 'Specialized housing programs and services for residents 55 and older'
          }
        ]
      },
      {
        type: 'contact',
        title: 'Housing Assistance',
        items: [
          {
            title: 'Housing Services',
            description: '(555) 123-HOME',
            icon: 'phone',
            href: 'tel:5551234663'
          },
          {
            title: 'Housing Department',
            description: 'housing@cityname.gov',
            icon: 'email',
            href: 'mailto:housing@cityname.gov'
          }
        ]
      }
    ],
    relatedPages: [
      { title: 'Building Permits', slug: 'permits' },
      { title: 'Zoning Information', slug: 'zoning' }
    ]
  }
]

// Mock navigation menu
export const mainNavigation: MenuItem[] = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Services',
    href: '/overview',
    children: [
      { title: 'Energy', href: '/detail/municipal-energy' },
      { title: 'Transportation', href: '/detail/transportation' },
      { title: 'Housing', href: '/detail/housing' }
    ]
  },
  {
    title: 'Government',
    href: '/government',
    children: [
      { title: 'City Council', href: '/government/council' },
      { title: 'Departments', href: '/government/departments' },
      { title: 'Public Records', href: '/government/records' }
    ]
  },
  {
    title: 'Residents',
    href: '/residents',
    children: [
      { title: 'Pay Bills', href: '/residents/bills' },
      { title: 'Report Issues', href: '/residents/report' },
      { title: 'Events', href: '/residents/events' }
    ]
  }
]

// Helper functions to simulate API calls
export function getPageData(slug: string): Page | undefined {
  return mockPages.find(page => page.slug === slug)
}

export function getAllPages(): Page[] {
  return mockPages
}

export function getPagesByCategory(category: string): Page[] {
  return mockPages.filter(page => page.category.toLowerCase() === category.toLowerCase())
}

export function getNavigation(): MenuItem[] {
  return mainNavigation
}

// Environment configuration for future Strapi integration
export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337',
  apiToken: process.env.STRAPI_API_TOKEN || '',
  isDevelopment: process.env.NODE_ENV === 'development'
}
