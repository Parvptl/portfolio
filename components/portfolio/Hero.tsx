import { ArrowUpRight, Mail, FileText } from 'lucide-react'

// Custom GitHub icon component (since brand icons were removed in Lucide v1.x)
function Github(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

// Custom LinkedIn icon component (since brand icons were removed in Lucide v1.x)
function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            I build the parts of ML systems
            <br />
            <span className="text-primary">
              that don&apos;t show up
            </span>
            <br />
            in the accuracy number.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Production ML requires infrastructure, data pipelines, model monitoring, and delivery—concerns that sit outside accuracy metrics. I obsess over these layers.
          </p>
        </div>

        <div className="pt-4">
          <p className="subtitle text-muted-foreground mb-8">
            Final-year Data Science undergraduate passionate about AI/ML, MLOps, and scalable software systems. Open to full-time opportunities in 2027.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#projects"
            className="group relative px-7 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="relative z-10">See the work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 relative z-10" aria-hidden="true" />
            <span className="absolute inset-0 bg-primary/80 -z-10 group-hover:scale-105 transition-transform duration-300" />
          </a>
          <a
            href="/Parv_Patel.pdf"
            download="Parv_Patel.pdf"
            className="group px-7 py-3 border border-primary/20 rounded-lg font-semibold hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background flex items-center gap-2"
            aria-label="Download Parv's Resume PDF"
          >
            <FileText className="w-4 h-4 text-primary" aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <div className="pt-8">
          <div className="flex gap-4">
            <a
              href="https://github.com/Parvptl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md p-1"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/parvptl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md p-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:parv4careers@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md p-1"
              aria-label="Email Parv"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
