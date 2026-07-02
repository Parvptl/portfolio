import Navbar from '@/components/portfolio/Navbar'
import Hero from '@/components/portfolio/Hero'
import About from '@/components/portfolio/About'
import Experience from '@/components/portfolio/Experience'
import Leadership from '@/components/portfolio/Leadership'
import Projects from '@/components/portfolio/Projects'
import Skills from '@/components/portfolio/Skills'
import Achievements from '@/components/portfolio/Achievements'
import Contact from '@/components/portfolio/Contact'
import Footer from '@/components/portfolio/Footer'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Skip to main content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only fixed top-4 left-4 z-[100] px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-md shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="focus-visible:outline-none">
        <Hero />
        <About />
        <Experience />
        <Leadership />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
