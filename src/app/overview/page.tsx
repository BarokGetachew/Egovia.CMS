/**
 * Overview Page - Services hub for Egovia CMS
 * 
 * PURPOSE: Display all available government services with filtering and search
 * CARBON COMPONENTS: Uses Breadcrumb, Search, Tag, Grid, Tile components
 * MOCK DATA: Dynamically renders services from mock data structure
 * 
 * DEVIATIONS from Carbon defaults:
 * - Custom icon mapping for service categories
 * - Dynamic service cards generated from mock data
 * - Government-specific service metadata display
 */

import MainLayout from '@/components/MainLayout'
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  Search,
  Tag,
  Grid,
  Column,
  Tile,
  ClickableTile
} from '@carbon/react'
import { 
  Lightning, 
  Bus, 
  Home, 
  Education,
  Hospital,
  Building,
  ArrowRight,
  Time,
  User
} from '@carbon/icons-react'
import { getAllPages } from '@/lib/mockData'

// DEVIATION: Custom icon mapping for service categories beyond Carbon defaults
const categoryIcons: Record<string, any> = {
  'Energy': Lightning,
  'Transportation': Bus,
  'Housing': Home,
  'Education': Education,
  'Health': Hospital,
  'Government': Building
}

export default function OverviewPage() {
  const services = getAllPages().map(page => ({
    title: page.title,
    description: page.description,
    category: page.category,
    icon: categoryIcons[page.category] || Building,
    lastUpdated: page.lastUpdated,
    author: page.author,
    href: `/detail/${page.slug}`
  }))
  return (
    <MainLayout>
      <div className="cds--grid cds--grid--full-width">
        <div className="cds--row">
          <div className="cds--col-lg-16">
            <div style={{ padding: '2rem 0 1rem 0' }}>
              <Breadcrumb>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/overview" isCurrentPage>
                  Services Overview
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
        </div>
        
        <div className="cds--row">
          <div className="cds--col-lg-12">
            <h1 style={{ 
              fontSize: '2.625rem', 
              fontWeight: 600, 
              marginBottom: '1rem' 
            }}>
              Government Services Overview
            </h1>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#525252', 
              marginBottom: '2rem',
              maxWidth: '600px'
            }}>
              Explore our comprehensive range of government services designed to serve our community. Find information, resources, and support for all your civic needs.
            </p>
          </div>
          <div className="cds--col-lg-4">
            <Search 
              placeholder="Search services..."
              labelText="Search services"
              size="lg"
              style={{ marginTop: '3rem' }}
            />
          </div>
        </div>
        
        <div className="cds--row" style={{ marginTop: '2rem' }}>
          <div className="cds--col-lg-16">
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Tag type="blue">All Services</Tag>
              <Tag type="gray">Energy</Tag>
              <Tag type="gray">Transportation</Tag>
              <Tag type="gray">Housing</Tag>
              <Tag type="gray">Education</Tag>
              <Tag type="gray">Health</Tag>
              <Tag type="gray">Government</Tag>
            </div>
          </div>
        </div>
        
        <div className="cds--row">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="cds--col-lg-8 cds--col-md-4" style={{ marginBottom: '2rem' }}>
                <ClickableTile 
                  href={service.href}
                  className="egovia-card"
                  style={{ 
                    height: '100%', 
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    justifyContent: 'space-between',
                    marginBottom: '1rem' 
                  }}>
                    <IconComponent size={32} style={{ color: '#0f62fe' }} />
                    <Tag type="blue" size="sm">{service.category}</Tag>
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 600, 
                    marginBottom: '0.75rem',
                    lineHeight: '1.4'
                  }}>
                    {service.title}
                  </h3>
                  
                  <p style={{ 
                    color: '#525252', 
                    flexGrow: 1,
                    marginBottom: '1.5rem',
                    lineHeight: '1.5'
                  }}>
                    {service.description}
                  </p>
                  
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: '0.5rem',
                    fontSize: '0.75rem',
                    color: '#6f6f6f',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Time size={14} />
                      Updated {service.lastUpdated}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <User size={14} />
                      {service.author}
                    </div>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    color: '#0f62fe',
                    fontSize: '0.875rem',
                    fontWeight: 600
                  }}>
                    View details <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                  </div>
                </ClickableTile>
              </div>
            )
          })}
        </div>
      </div>
    </MainLayout>
  )
}
