'use client'

// MainLayout component - Universal layout for Egovia CMS
// Uses IBM Carbon Design System components with government-specific customizations

import { 
  Header, 
  HeaderName, 
  HeaderNavigation, 
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  Content
} from '@carbon/react'
import { Search, Notification, UserAvatar } from '@carbon/icons-react'
import Link from 'next/link'
import { getNavigation } from '@/lib/mockData'

interface MainLayoutProps {
  children: React.ReactNode
}

/**
 * MainLayout - Universal site layout component
 * 
 * DEVIATIONS from Carbon defaults:
 * - Custom "egovia-header" class adds government branding border
 * - Dynamic navigation from mock data instead of hardcoded menu
 * - Government-appropriate footer structure
 * 
 * Features:
 * - Responsive Carbon grid system
 * - Accessibility compliance (ARIA labels, skip links)
 * - Mock data integration ready for Strapi
 */
export default function MainLayout({ children }: MainLayoutProps) {
  // DEVIATION: Using mock data for navigation instead of hardcoded menu items
  const navigation = getNavigation()
  
  return (
    <>
      <Header aria-label="Egovia CMS" className="egovia-header">
        <SkipToContent />
        <HeaderName href="/" prefix="Egovia">
          CMS
        </HeaderName>
        
        <HeaderNavigation aria-label="Main Navigation">
          {navigation.map((item) => (
            <HeaderMenuItem key={item.href} href={item.href}>
              {item.title}
            </HeaderMenuItem>
          ))}
          <HeaderMenuItem href="/login">Login</HeaderMenuItem>
        </HeaderNavigation>
        
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Search" tooltipAlignment="end">
            <Search size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Notifications" tooltipAlignment="end">
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="User Profile" tooltipAlignment="end">
            <UserAvatar size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
      
      <Content>
        {children}
      </Content>
      
      <footer className="cds--grid cds--grid--full-width">
        <div className="cds--grid">
          <div className="cds--row">
            <div className="cds--col-lg-4">
              <h4>Egovia CMS</h4>
              <p>Digital government solutions built for the modern web.</p>
            </div>
            <div className="cds--col-lg-4">
              <h5>Quick Links</h5>
              <ul>
                <li><Link href="/overview">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/accessibility">Accessibility</Link></li>
              </ul>
            </div>
            <div className="cds--col-lg-4">
              <h5>Government</h5>
              <ul>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/foia">FOIA</Link></li>
              </ul>
            </div>
            <div className="cds--col-lg-4">
              <h5>Support</h5>
              <ul>
                <li><Link href="/help">Help Center</Link></li>
                <li><Link href="/documentation">Documentation</Link></li>
                <li><Link href="/feedback">Feedback</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
