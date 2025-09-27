'use client'

import { 
  Form,
  TextInput,
  PasswordInput,
  Button,
  Checkbox,
  Link,
  Tile,
  Grid,
  Column
} from '@carbon/react'
import { Login, ArrowRight } from '@carbon/icons-react'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Replace with Strapi authentication in October
    console.log('Login attempt:', { email, rememberMe })
    alert('Login functionality will be connected to Strapi in October 2025')
  }

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f62fe 0%, #393939 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div className="cds--grid" style={{ maxWidth: '1200px', width: '100%' }}>
        <div className="cds--row">
          <div className="cds--col-lg-8 cds--col-md-4">
            <div style={{ color: 'white', marginBottom: '2rem' }}>
              <h1 style={{ 
                fontSize: '3rem', 
                fontWeight: 600, 
                marginBottom: '1rem'
              }}>
                Egovia CMS
              </h1>
              <p style={{ 
                fontSize: '1.25rem', 
                opacity: 0.9,
                marginBottom: '2rem'
              }}>
                Digital Government Content Management System
              </p>
              <div style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '2px dashed rgba(255, 255, 255, 0.3)'
              }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
                  Coming in October 2025
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>✓ Strapi CMS Integration</li>
                  <li style={{ marginBottom: '0.5rem' }}>✓ Role-based Authentication</li>
                  <li style={{ marginBottom: '0.5rem' }}>✓ Content Editor Interface</li>
                  <li style={{ marginBottom: '0.5rem' }}>✓ Multi-user Workflows</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="cds--col-lg-8 cds--col-md-4">
            <Tile style={{ 
              padding: '2.5rem',
              height: 'fit-content'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#0f62fe',
                  borderRadius: '50%',
                  marginBottom: '1rem'
                }}>
                  <Login size={32} style={{ color: 'white' }} />
                </div>
                <h2 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}>
                  Content Manager Login
                </h2>
                <p style={{ color: '#6f6f6f' }}>
                  Access the Egovia CMS dashboard
                </p>
              </div>

              <Form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <TextInput
                    id="email"
                    labelText="Email Address"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <PasswordInput
                    id="password"
                    labelText="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '2rem'
                }}>
                  <Checkbox
                    id="remember-me"
                    labelText="Remember me"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                  />
                  <Link href="/forgot-password">
                    Forgot password?
                  </Link>
                </div>
                
                <Button 
                  type="submit"
                  kind="primary" 
                  size="lg"
                  style={{ width: '100%', marginBottom: '1rem' }}
                  renderIcon={ArrowRight}
                >
                  Sign In
                </Button>
                
                <div style={{ 
                  textAlign: 'center',
                  padding: '1rem',
                  backgroundColor: '#f4f4f4',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  color: '#6f6f6f'
                }}>
                  <strong>Demo Mode:</strong> This is a frontend prototype. 
                  Authentication will be integrated with Strapi CMS in October 2025.
                </div>
              </Form>
              
              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <Link href="/">
                  ← Back to Public Site
                </Link>
              </div>
            </Tile>
          </div>
        </div>
      </div>
    </div>
  )
}
