import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-border/50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <h2 className="title-lg">Experience</h2>

        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="group relative pl-8 border-l border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Timeline marker */}
              <div className="absolute -left-3.5 top-0 w-6 h-6 bg-card border-2 border-border group-hover:border-primary group-hover:bg-primary/20 rounded-full transition-all duration-300" />
              
              <div className="mb-3">
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                  {exp.company}
                </h3>
                <p className="text-primary/80 font-medium text-sm">{exp.role}</p>
              </div>
              <p className="text-xs text-muted-foreground tracking-wide uppercase mb-3 font-semibold">
                {exp.period}
              </p>
              <p className="body-text text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
