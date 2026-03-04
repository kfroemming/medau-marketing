import { ClipboardCheck, BarChart3, Users } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'

const cards = [
  {
    icon: ClipboardCheck,
    title: 'Reduce Documentation Burden',
    description:
      'Smart automation cuts paperwork while improving accuracy. Your staff spends time on care, not clipboards.',
  },
  {
    icon: BarChart3,
    title: 'See the Full Picture',
    description:
      'Unified analytics across mood, safety, and behavior. Spot trends before they become crises.',
  },
  {
    icon: Users,
    title: 'Personalized Patient Care',
    description:
      'No two patients are alike. Our tools adapt to individual patterns and needs.',
  },
]

export function ProblemSolution() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            Why facilities choose Medau
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-[0_1px_3px_rgba(15,23,42,0.04),0_8px_32px_rgba(15,23,42,0.04)] hover:shadow-[0_1px_3px_rgba(15,23,42,0.04),0_12px_48px_rgba(15,23,42,0.08)] transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-5">
                  <card.icon className="w-6 h-6 text-coral" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{card.title}</h3>
                <p className="text-navy/60 leading-relaxed">{card.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
