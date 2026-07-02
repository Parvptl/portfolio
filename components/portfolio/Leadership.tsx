import { leadership } from '@/lib/data'

export default function Leadership() {
  return (
    <section className="py-16 border-t border-border/50" aria-label="Leadership Achievements">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <h2 className="title-lg">Leadership</h2>
        <div className="space-y-6">
          {leadership.map((role, idx) => (
            <div
              key={idx}
              className="group relative pl-8 pb-6 border-l border-primary/40 hover:border-primary transition-all duration-300"
            >
              {/* Timeline marker */}
              <div className="absolute -left-3 top-1 w-5 h-5 bg-primary/20 border border-primary rounded-full group-hover:bg-primary/40 group-hover:scale-110 transition-all duration-300" />
              
              <h3 className="title-md group-hover:text-primary transition-colors duration-300 mb-2">
                {role.title}
              </h3>
              <p className="body-text text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
