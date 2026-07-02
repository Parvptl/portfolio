'use client'

import { useState } from 'react'
import { Mail, Check } from 'lucide-react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Copy email to clipboard
    navigator.clipboard.writeText('parv4careers@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    // The native mailto trigger continues via the standard href behavior
  }

  return (
    <section id="contact" className="py-20 border-t border-border/50 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-3xl font-bold">Let&apos;s work together</h2>
        <p className="text-lg text-muted-foreground">
          I&apos;m looking for challenging problems where rigorous engineering and ML come together. Let&apos;s talk.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <div className="relative group/tooltip w-full sm:w-auto">
            <a
              href="mailto:parv4careers@gmail.com"
              onClick={handleEmailClick}
              className="group w-full sm:min-w-[140px] px-8 py-3 bg-primary text-primary-foreground rounded font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={copied ? "Email address copied!" : "Email Parv at parv4careers@gmail.com (copies to clipboard)"}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-primary-foreground animate-scale-in" aria-hidden="true" />
                  Copied!
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  Email
                </>
              )}
            </a>
            {/* Hover and keyboard-focus tooltip */}
            <span 
              className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 scale-90 opacity-0 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 group-focus-within/tooltip:opacity-100 group-focus-within/tooltip:scale-100 transition-all duration-200 bg-card border border-border px-3 py-1.5 rounded text-xs text-muted-foreground whitespace-nowrap shadow-md z-10"
              role="tooltip"
            >
              Copies to clipboard
            </span>
          </div>
          <a
            href="https://www.linkedin.com/in/parvptl/"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-8 py-3 border border-border rounded font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Visit Parv's LinkedIn profile"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
