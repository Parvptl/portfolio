export default function About() {
  return (
    <section className="py-20 border-t border-border/50" aria-label="About Me">
      <div className="max-w-4xl mx-auto px-6">
        <p className="body-text text-muted-foreground max-w-2xl">
          I obsess over the intersection of{' '}
          <span className="text-foreground font-semibold">rigor and pragmatism</span>
          . Production ML isn&apos;t just about model accuracy—it&apos;s about systems that
          survive edge cases, scale reliably, and stay maintainable. I think in terms
          of architecture, not just algorithms.
        </p>
      </div>
    </section>
  )
}
