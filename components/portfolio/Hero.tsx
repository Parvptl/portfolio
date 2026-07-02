import { ArrowUpRight, ArrowRight, Mail, FileText } from 'lucide-react'

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
            href="/resume.pdf"
            download
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
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/parvptl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md p-1"
              aria-label="LinkedIn Profile"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
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
