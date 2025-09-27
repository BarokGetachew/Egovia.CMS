import MainLayout from '@/components/MainLayout'
import HeroSection from '@/components/HeroSection'
import ServiceCards from '@/components/ServiceCards'

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      
      <div className="cds--grid cds--grid--full-width">
        <div className="cds--row">
          <div className="cds--col-lg-16">
            <ServiceCards />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
