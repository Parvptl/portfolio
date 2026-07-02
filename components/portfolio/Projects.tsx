import { projects } from '@/lib/data'
import { ExternalLink } from 'lucide-react'
import AnimateInView from './AnimateInView'

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-border/50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <h2 className="title-lg">Featured Projects</h2>

        <div className="grid gap-6">
          {projects.map((project, idx) => (
            <AnimateInView
              key={idx}
              delay={idx * 75}
              activeClassName="opacity-100 translate-y-0"
              inactiveClassName="opacity-0 translate-y-8"
              className="transition-all duration-300"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Featured project: ${project.title} - ${project.subtitle}. Metrics: ${project.metrics}. Opens in a new tab.`}
                className="block group relative bg-card border border-border/50 rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300 cursor-pointer hover:shadow-elevated hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {/* Gradient accent bar */}
                <div
                  className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-primary/40 group-hover:w-full group-focus-visible:w-full transition-all duration-500"
                  aria-hidden="true"
                />

                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="title-md mb-1 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-primary mb-2">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="body-text text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-3">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border/30 group-hover:border-primary/20 transition-colors duration-300">
                    <span className="text-xs md:text-sm text-primary font-semibold tracking-wide uppercase group-hover:text-primary/90 transition-colors duration-300">
                      {project.metrics}
                    </span>
                    <ExternalLink
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-125 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
