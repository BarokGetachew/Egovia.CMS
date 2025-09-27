import MainLayout from '@/components/MainLayout'
import ContentBlocks from '@/components/ContentBlocks'
import { 
  Breadcrumb, 
  BreadcrumbItem,
  Tag,
  Button
} from '@carbon/react'
import { 
  Share, 
  Download, 
  Email,
  Time,
  User,
  Location
} from '@carbon/icons-react'
import { getPageData } from '@/lib/mockData'

interface DetailPageProps {
  params: {
    slug: string
  }
}

export default function DetailPage({ params }: DetailPageProps) {
  const pageData = getPageData(params.slug)
  
  if (!pageData) {
    return (
      <MainLayout>
        <div className="cds--grid">
          <div className="cds--row">
            <div className="cds--col-lg-16">
              <h1>Page Not Found</h1>
              <p>The requested page could not be found.</p>
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="cds--grid cds--grid--full-width">
        <div className="cds--row">
          <div className="cds--col-lg-16">
            <div style={{ padding: '2rem 0 1rem 0' }}>
              <Breadcrumb>
                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                <BreadcrumbItem href="/overview">Services</BreadcrumbItem>
                <BreadcrumbItem href={`/detail/${params.slug}`} isCurrentPage>
                  {pageData.title}
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
        </div>
        
        {/* Page Header */}
        <div className="cds--row">
          <div className="cds--col-lg-12">
            <div style={{ marginBottom: '1rem' }}>
              <Tag type="blue">{pageData.category}</Tag>
            </div>
            
            <h1 style={{ 
              fontSize: '2.625rem', 
              fontWeight: 600, 
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}>
              {pageData.title}
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#525252', 
              marginBottom: '2rem',
              lineHeight: '1.5'
            }}>
              {pageData.description}
            </p>
            
            {/* Page Meta */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              gap: '1.5rem',
              fontSize: '0.875rem',
              color: '#6f6f6f',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Time size={16} />
                Last updated: {pageData.lastUpdated}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <User size={16} />
                {pageData.author}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Location size={16} />
                {pageData.department}
              </div>
            </div>
          </div>
          
          <div className="cds--col-lg-4">
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '1rem',
              marginTop: '4rem'
            }}>
              <Button kind="primary" renderIcon={Email}>
                Contact Department
              </Button>
              <Button kind="secondary" renderIcon={Download}>
                Download PDF
              </Button>
              <Button kind="ghost" renderIcon={Share}>
                Share Page
              </Button>
            </div>
          </div>
        </div>
        
        {/* Content Blocks */}
        <div className="cds--row" style={{ marginTop: '3rem' }}>
          <div className="cds--col-lg-16">
            <ContentBlocks sections={pageData.sections} />
          </div>
        </div>
        
        {/* Related Content */}
        <div className="cds--row" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #e0e0e0' }}>
          <div className="cds--col-lg-16">
            <h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '1.5rem' }}>
              Related Services
            </h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {pageData.relatedPages?.map((related, index) => (
                <Button key={index} kind="tertiary" href={`/detail/${related.slug}`}>
                  {related.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
