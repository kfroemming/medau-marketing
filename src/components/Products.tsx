import { Check } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'

const products = [
  {
    title: 'In-Patient Safety Monitoring',
    description:
      'Replace paper safety rounds with digital observation that actually keeps up with your unit. Smart automation, custom alerting, and workflows that fit how your staff already works.',
    bullets: [
      'Configurable observation levels and intervals',
      'Overdue alerts and escalation tracking',
      'Works on phones at the bedside — no laptop required',
    ],
    image: '/screenshots/safety-check.png',
    imageAlt: 'In-Patient Safety Monitoring — digital observation and alerting',
  },
  {
    title: 'Patient Point System & Token Economy',
    description:
      'Ditch the spreadsheets. A rewards-based system that drives patient engagement and gives your team real-time visibility into participation.',
    bullets: [
      'Automated point tracking and redemption',
      'Customizable reward tiers per facility',
      'Real-time engagement analytics',
    ],
    image: '/screenshots/points.png',
    imageAlt: 'Patient Point System — rewards-based engagement tracking',
  },
  {
    title: 'Center Point Mood Map',
    description:
      'Visualize emotional and behavioral patterns over time. Track mood, energy, and focus — then turn check-ins into clinical insights with automated summaries.',
    bullets: [
      'Interactive mood trend visualization',
      'Automated summaries tied to diagnostic data',
      'Real-time alerting for significant changes',
    ],
    image: '/screenshots/assessments.png',
    imageAlt: 'Center Point Mood Map — mood trend visualization and clinical summaries',
  },
]

export function Products() {
  return (
    <section id="products" className="py-24 lg:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            Purpose-built tools for inpatient behavioral health
          </h2>
        </AnimatedSection>

        <div className="space-y-28">
          {products.map((product, i) => {
            const reversed = i % 2 === 1
            return (
              <div
                key={product.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  reversed ? 'lg:direction-rtl' : ''
                }`}
                style={reversed ? { direction: 'rtl' } : undefined}
              >
                {/* Image */}
                <AnimatedSection delay={0.1}>
                  <div
                    className="relative rounded-xl overflow-hidden shadow-[0_20px_60px_-12px_rgba(15,23,42,0.15)] border border-navy/[0.06]"
                    style={{ direction: 'ltr' }}
                  >
                    <div className="bg-navy/[0.03] border-b border-navy/[0.06] px-4 py-2.5 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-navy/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-navy/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-navy/10" />
                      </div>
                    </div>
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="w-full block"
                    />
                  </div>
                </AnimatedSection>

                {/* Content */}
                <AnimatedSection delay={0.2}>
                  <div style={{ direction: 'ltr' }}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
                      {product.title}
                    </h3>
                    <p className="text-navy/60 leading-relaxed mb-6 text-lg">
                      {product.description}
                    </p>
                    <ul className="space-y-3">
                      {product.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-teal" strokeWidth={3} />
                          </div>
                          <span className="text-navy/70">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
