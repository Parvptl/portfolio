export default function Footer() {
  return (
    <footer className="py-12 border-t border-border" aria-label="Footer Navigation">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="group">
          <span className="group-hover:text-foreground transition-colors duration-300">
            © 2026 Parv Patel. All rights reserved.
          </span>
        </div>
        <div className="flex gap-8">
          {[
            { href: 'https://github.com/Parvptl', label: 'GitHub', aria: 'Visit GitHub profile' },
            { href: 'https://www.linkedin.com/in/parvptl/', label: 'LinkedIn', aria: 'Visit LinkedIn profile' },
            { href: 'mailto:parv4careers@gmail.com', label: 'Email', aria: 'Email Parv Patel' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative hover:text-foreground transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-1 py-0.5"
              aria-label={link.aria}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
