import { ClipboardCheck, BarChart3, Users } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'

const cards = [
  {
    icon: ClipboardCheck,
    title: 'Less charting, more care',
    description:
      'Charge nurses stop wrestling with paper logs. Digital check-ins auto-populate — accurate, timestamped, done.',
  },
  {
    icon: BarChart3,
    title: 'Trends you can act on',
    description:
      'Mood, safety, and behavior data in one view. Spot escalation patterns before they become incidents.',
  },
  {
    icon: Users,
    title: 'Care that fits the patient',
    description:
      'Every patient scores differently. Medau adapts to individual patterns so treatment plans stay grounded in data, not guesswork.',
  },
]

export function ProblemSolution() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            What changes when your unit runs on Medau
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
