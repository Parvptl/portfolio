import { achievements } from '@/lib/data'
import AnimateInView from './AnimateInView'

export default function Achievements() {
  return (
    <section className="py-16 border-t border-border/50">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <h2 className="title-lg">Achievements</h2>

        <div className="space-y-8">
          {achievements.map((achievement, idx) => (
            <AnimateInView
              key={idx}
              delay={idx * 100}
              activeClassName="opacity-100 translate-y-0"
              inactiveClassName="opacity-0 translate-y-4"
              className="transition-all duration-500"
            >
              <div>
                <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                <p className="body-text text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
