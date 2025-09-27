'use client'

import { Tile, ClickableTile, Grid, Column } from '@carbon/react'
import { 
  Energy, 
  Transportation, 
  Home, 
  Education,
  Healthcare,
  Government,
  ArrowRight
} from '@carbon/icons-react'

const services = [
  {
    title: 'Energy Management',
    description: 'Municipal energy supply, renewable initiatives, and sustainability programs.',
    icon: Energy,
    href: '/detail/municipal-energy'
  },
  {
    title: 'Transportation',
    description: 'Public transit, infrastructure planning, and mobility solutions.',
    icon: Transportation,
    href: '/detail/transportation'
  },
  {
    title: 'Housing Services',
    description: 'Public housing, zoning information, and residential permits.',
    icon: Home,
    href: '/detail/housing'
  },
  {
    title: 'Education',
    description: 'School districts, educational programs, and community learning.',
    icon: Education,
    href: '/detail/education'
  },
  {
    title: 'Public Health',
    description: 'Health services, emergency preparedness, and wellness programs.',
    icon: Healthcare,
    href: '/detail/health'
  },
  {
    title: 'Government Services',
    description: 'Permits, licenses, voting information, and civic engagement.',
    icon: Government,
    href: '/detail/government'
  }
]

export default function ServiceCards() {
  return (
    <section style={{ padding: '2rem 0' }}>
      <div className="cds--grid">
        <div className="cds--row">
          <div className="cds--col-lg-16">
            <h2 style={{ 
              fontSize: '2.25rem', 
              fontWeight: 600, 
              marginBottom: '1rem',
              textAlign: 'center' 
            }}>
              Government Services
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              textAlign: 'center', 
              marginBottom: '3rem',
              color: '#525252'
            }}>
              Comprehensive digital solutions for modern government operations
            </p>
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
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ marginBottom: '1rem' }}>
                    <IconComponent size={32} style={{ color: '#0f62fe' }} />
                  </div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 600, 
                    marginBottom: '0.75rem' 
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ 
                    color: '#525252', 
                    flexGrow: 1,
                    marginBottom: '1rem'
                  }}>
                    {service.description}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    color: '#0f62fe',
                    fontSize: '0.875rem',
                    fontWeight: 600
                  }}>
                    Learn more <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                  </div>
                </ClickableTile>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
