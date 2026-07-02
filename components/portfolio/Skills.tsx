import { skills } from '@/lib/data'
import AnimateInView from './AnimateInView'

export default function Skills() {
  return (
    <section className="py-16 border-t border-border/50" aria-label="Technical Skills">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <h2 className="title-lg">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skillGroup, idx) => (
            <AnimateInView
              key={idx}
              delay={idx * 100}
              activeClassName="opacity-100"
              inactiveClassName="opacity-0"
              className="transition-opacity duration-500"
            >
              <div>
                <h3 className="font-bold text-sm uppercase tracking-widest text-primary mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="text-sm px-3 py-1.5 bg-card border border-border/50 rounded text-muted-foreground hover:bg-primary/10 hover:border-primary/40 hover:text-foreground transition-all duration-300 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
