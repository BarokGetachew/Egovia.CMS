'use client'

import { 
  Tile,
  ClickableTile, 
  Button,
  UnorderedList,
  ListItem,
  Link
} from '@carbon/react'
import { ArrowRight, Launch, Phone, Email } from '@carbon/icons-react'

interface ContentSection {
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

interface ContentBlocksProps {
  sections: ContentSection[]
}

function HeroBlock({ section }: { section: ContentSection }) {
  return (
    <section className="egovia-hero" style={{ 
      padding: '3rem 0', 
      marginBottom: '2rem',
      borderRadius: '8px'
    }}>
      <div className="cds--grid">
        <div className="cds--row">
          <div className="cds--col-lg-16">
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 600, 
              color: 'white',
              marginBottom: '1rem'
            }}>
              {section.title}
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '600px'
            }}>
              {section.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TextBlock({ section }: { section: ContentSection }) {
  return (
    <section style={{ marginBottom: '3rem' }}>
      {section.title && (
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 600, 
          marginBottom: '1.5rem' 
        }}>
          {section.title}
        </h2>
      )}
      <div style={{ 
        fontSize: '1rem', 
        lineHeight: '1.6',
        color: '#393939'
      }}>
        {section.content?.split('\n').map((paragraph, index) => (
          <p key={index} style={{ marginBottom: '1rem' }}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

function CardsBlock({ section }: { section: ContentSection }) {
  return (
    <section style={{ marginBottom: '3rem' }}>
      {section.title && (
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 600, 
          marginBottom: '2rem' 
        }}>
          {section.title}
        </h2>
      )}
      <div className="cds--row">
        {section.items?.map((item, index) => (
          <div key={index} className="cds--col-lg-8 cds--col-md-4" style={{ marginBottom: '1.5rem' }}>
            {item.href ? (
              <ClickableTile 
                href={item.href}
                className="egovia-card"
                style={{ height: '100%', padding: '1.5rem' }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#525252', marginBottom: '1rem' }}>
                  {item.description}
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
            ) : (
              <Tile style={{ height: '100%', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#525252' }}>
                  {item.description}
                </p>
              </Tile>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function CTABlock({ section }: { section: ContentSection }) {
  return (
    <section style={{ 
      backgroundColor: '#f4f4f4', 
      padding: '3rem 2rem',
      borderRadius: '8px',
      marginBottom: '3rem',
      textAlign: 'center'
    }}>
      <h2 style={{ 
        fontSize: '1.75rem', 
        fontWeight: 600, 
        marginBottom: '1rem' 
      }}>
        {section.title}
      </h2>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#525252',
        marginBottom: '2rem',
        maxWidth: '600px',
        margin: '0 auto 2rem auto'
      }}>
        {section.content}
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {section.items?.map((item, index) => (
          <Button 
            key={index}
            kind={index === 0 ? 'primary' : 'secondary'}
            size="lg"
            href={item.href}
            renderIcon={index === 0 ? ArrowRight : Launch}
          >
            {item.title}
          </Button>
        ))}
      </div>
    </section>
  )
}

function ListBlock({ section }: { section: ContentSection }) {
  return (
    <section style={{ marginBottom: '3rem' }}>
      {section.title && (
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 600, 
          marginBottom: '1.5rem' 
        }}>
          {section.title}
        </h2>
      )}
      <UnorderedList>
        {section.items?.map((item, index) => (
          <ListItem key={index}>
            <strong>{item.title}:</strong> {item.description}
          </ListItem>
        ))}
      </UnorderedList>
    </section>
  )
}

function ContactBlock({ section }: { section: ContentSection }) {
  return (
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{ 
        fontSize: '1.75rem', 
        fontWeight: 600, 
        marginBottom: '2rem' 
      }}>
        {section.title || 'Contact Information'}
      </h2>
      <div className="cds--row">
        {section.items?.map((item, index) => (
          <div key={index} className="cds--col-lg-8 cds--col-md-4">
            <Tile style={{ padding: '1.5rem', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                {item.icon === 'phone' && <Phone size={24} style={{ color: '#0f62fe', marginRight: '0.75rem' }} />}
                {item.icon === 'email' && <Email size={24} style={{ color: '#0f62fe', marginRight: '0.75rem' }} />}
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {item.title}
                </h3>
              </div>
              <p style={{ color: '#525252' }}>
                {item.description}
              </p>
              {item.href && (
                <Link href={item.href} style={{ marginTop: '0.75rem', display: 'inline-block' }}>
                  Contact now
                </Link>
              )}
            </Tile>
          </div>
        ))}
      </div>
    </section>
  )
}

function StatsBlock({ section }: { section: ContentSection }) {
  return (
    <section style={{ 
      backgroundColor: '#0f62fe', 
      color: 'white',
      padding: '3rem 2rem',
      borderRadius: '8px',
      marginBottom: '3rem'
    }}>
      <h2 style={{ 
        fontSize: '1.75rem', 
        fontWeight: 600, 
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        {section.title}
      </h2>
      <div className="cds--row">
        {section.items?.map((item, index) => (
          <div key={index} className="cds--col-lg-4 cds--col-md-2" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              {item.title}
            </div>
            <div style={{ fontSize: '1rem', opacity: 0.9 }}>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function ContentBlocks({ sections }: ContentBlocksProps) {
  return (
    <div>
      {sections.map((section, index) => {
        switch (section.type) {
          case 'hero':
            return <HeroBlock key={index} section={section} />
          case 'text':
            return <TextBlock key={index} section={section} />
          case 'cards':
            return <CardsBlock key={index} section={section} />
          case 'cta':
            return <CTABlock key={index} section={section} />
          case 'list':
            return <ListBlock key={index} section={section} />
          case 'contact':
            return <ContactBlock key={index} section={section} />
          case 'stats':
            return <StatsBlock key={index} section={section} />
          default:
            return null
        }
      })}
    </div>
  )
}
