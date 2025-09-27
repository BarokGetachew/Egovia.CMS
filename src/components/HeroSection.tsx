'use client'

import { Button, Grid, Column } from '@carbon/react'
import { ArrowRight, Launch } from '@carbon/icons-react'

export default function HeroSection() {
  return (
    <section className="egovia-hero" style={{ padding: '4rem 0', marginBottom: '3rem' }}>
      <div className="cds--grid">
        <div className="cds--row">
          <div className="cds--col-lg-8 cds--col-md-6">
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 600, 
              marginBottom: '1rem',
              color: 'white'
            }}>
              Digital Government Made Simple
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              marginBottom: '2rem',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Empowering government organizations with modern, accessible, and user-friendly content management solutions built on IBM Carbon Design System.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button 
                kind="secondary" 
                size="lg"
                renderIcon={ArrowRight}
              >
                Explore Services
              </Button>
              <Button 
                kind="tertiary" 
                size="lg"
                renderIcon={Launch}
              >
                View Demo
              </Button>
            </div>
          </div>
          <div className="cds--col-lg-8 cds--col-md-2">
            {/* Placeholder for hero image/illustration */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px dashed rgba(255, 255, 255, 0.3)'
            }}>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem' }}>
                Hero Image Placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
