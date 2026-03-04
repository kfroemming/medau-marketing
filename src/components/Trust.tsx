import {
  Shield,
  Stethoscope,
  Plug,
  Activity,
  Lock,
  Headphones,
} from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'

const badges = [
  {
    icon: Shield,
    label: 'HIPAA Compliant',
    desc: 'End-to-end encryption and access controls that meet the highest healthcare standards.',
  },
  {
    icon: Stethoscope,
    label: 'Built by Physicians',
    desc: 'Designed alongside clinicians who understand real facility workflows.',
  },
  {
    icon: Plug,
    label: 'EMR Integration',
    desc: 'Seamless connections to your existing systems — no rip-and-replace.',
  },
  {
    icon: Activity,
    label: 'Real-time Analytics',
    desc: 'Live dashboards and instant alerting so nothing slips through the cracks.',
  },
  {
    icon: Lock,
    label: 'SOC 2 Compliant',
    desc: 'Enterprise-grade security audited and verified by independent assessors.',
  },
  {
    icon: Headphones,
    label: '24/7 Support',
    desc: 'Dedicated onboarding and round-the-clock support from our clinical team.',
  },
]

// stats removed — no fabricated metrics

export function Trust() {
  return (
    <section id="trust" className="relative py-24 lg:py-32 bg-navy overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-coral/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-4 py-1.5 text-sm text-coral font-medium mb-6">
            <Shield className="w-4 h-4" />
            Healthcare-Grade Security
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Built for healthcare.{' '}
            <span className="text-coral">Secured</span> by design.
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            Security and compliance aren't afterthoughts — they're the foundation everything else is built on.
          </p>
        </AnimatedSection>

        <div className="my-16" />

        {/* Badge grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {badges.map((badge, i) => (
            <AnimatedSection key={badge.label} delay={i * 0.05}>
              <div className="group relative flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-coral/10 flex items-center justify-center group-hover:bg-coral/20 transition-colors">
                  <badge.icon className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">
                    {badge.label}
                  </h3>
                  <p className="mt-1 text-sm text-white/40 leading-relaxed">
                    {badge.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
