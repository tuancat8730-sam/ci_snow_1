import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import HowItWorks from '../components/sections/HowItWorks'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Pricing from '../components/sections/Pricing'
import ServiceArea from '../components/sections/ServiceArea'
import ContactForm from '../components/sections/ContactForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Pricing />
      <ServiceArea />
      <ContactForm />
    </main>
  )
}
