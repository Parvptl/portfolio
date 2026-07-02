'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = ['projects', 'experience', 'contact']
    
    // Configured observer with rootMargin to trigger when section occupies focal viewport area
    const observerOptions = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }

    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id)
        }
      }, observerOptions)

      observer.observe(el)
      return { el, observer }
    })

    // Reset scroll active state if scrolled near the top of page
    const handleTopScrollReset = () => {
      if (window.scrollY < 100) {
        setActiveSection('')
      }
    }
    window.addEventListener('scroll', handleTopScrollReset, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleTopScrollReset)
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el)
          obs.observer.disconnect()
        }
      })
    }
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-border/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between"
      >
        <a
          href="#"
          className="font-semibold text-lg tracking-tight group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-2 py-1"
          aria-label="Parv Patel Portfolio - Go to top"
        >
          <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/60 transition-all duration-300">
            parv.
          </span>
        </a>
        <div className="flex items-center gap-2 sm:gap-4">
          {[
            { href: '#projects', id: 'projects', label: 'Projects' },
            { href: '#experience', id: 'experience', label: 'Experience' },
            { href: '#contact', id: 'contact', label: 'Contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-3 py-2 ${
                activeSection === item.id
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-1 left-3 right-3 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                  activeSection === item.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                }`}
                aria-hidden="true"
              />
            </a>
          ))}
          <a
            href="https://github.com/Parvptl/portfolio/Parv_Patel.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-200 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-3 py-2 font-medium"
            aria-label="Download Resume PDF"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
