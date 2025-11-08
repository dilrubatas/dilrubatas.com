import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Research from '../components/Research'
import Teaching from '../components/Teaching'
import CV from '../components/CV'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="research" className="section-padding bg-white">
        <Research />
      </section>
      
      <section id="teaching" className="section-padding bg-gray-50">
        <Teaching />
      </section>
      
      <section id="cv" className="section-padding bg-white">
        <CV />
      </section>
      
      <section id="contact" className="section-padding bg-gray-50">
        <Contact />
      </section>
      
      <Footer />
    </main>
  )
} 