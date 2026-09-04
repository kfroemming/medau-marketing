import { ArrowRight, Calendar, Mail, MapPin } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'

// Contact section with booking and email links
export function CTA() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 scroll-mt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral via-[#F2845C] to-coral" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/[0.06] blur-[80px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-black/[0.06] blur-[80px]" />
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm text-white font-medium mb-8">
            <Calendar className="w-4 h-4" />
            Free 30-minute consultation
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            See how Medau fits your unit
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Book a 30-minute walkthrough tailored to your facility’s workflows, priorities, and care model.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:team@medau.io?subject=Demo Request"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-coral font-bold text-lg hover:bg-white/95 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:-translate-y-0.5"
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:team@medau.io"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg hover:bg-white/20 transition-all"
            >
              <Mail className="w-5 h-5" />
              team@medau.io
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-white/70">
            <MapPin className="w-4 h-4 shrink-0" />
            <p className="text-sm sm:text-base">
              304 S. Jones Blvd, Suite 3343, Las Vegas, NV 89107
            </p>
          </div>

          <p className="mt-12 text-white/40 text-sm">
            No commitment required · HIPAA-compliant demo environment · Live in under a week
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
