import { ArrowRight, Calendar, Mail } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'

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
            Ready to transform your facility's behavioral health program?
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            See how Medau can streamline your workflows, improve patient outcomes, and give your clinical team the insights they need.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@medau.io?subject=Demo Request"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-coral font-bold text-lg hover:bg-white/95 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:-translate-y-0.5"
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:hello@medau.io"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg hover:bg-white/20 transition-all"
            >
              <Mail className="w-5 h-5" />
              hello@medau.io
            </a>
          </div>

          <p className="mt-12 text-white/40 text-sm">
            No commitment required · HIPAA-compliant demo environment · Takes 2 minutes to set up
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
