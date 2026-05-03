import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-surface" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 text-navy/70 text-xs font-semibold tracking-wide uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                Built by Physicians&ensp;•&ensp;HIPAA Compliant
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-navy mb-6"
            >
              Behavioral health analytics that clinicians{' '}
              <span className="text-coral">actually use</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-navy/60 leading-relaxed mb-8"
            >
              Real-time safety monitoring, mood tracking, and patient engagement
              tools — purpose-built for inpatient psych units that need
              clinical insight, not more paperwork.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 rounded-lg bg-coral text-white font-semibold hover:bg-coral-dark transition-all shadow-[0_4px_16px_rgba(232,97,77,0.35)] hover:shadow-[0_6px_24px_rgba(232,97,77,0.45)]"
              >
                Request a Demo
              </a>
              <a
                href="#products"
                className="inline-flex items-center px-7 py-3.5 rounded-lg border-2 border-navy/15 text-navy font-semibold hover:border-navy/30 hover:bg-navy/[0.03] transition-all"
              >
                See Products
              </a>
            </motion.div>
          </div>

          {/* Right — dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative lg:ml-8"
          >
            <div className="relative rounded-xl overflow-hidden shadow-[0_24px_80px_-12px_rgba(15,23,42,0.18)] border border-navy/[0.06]">
              {/* Browser frame bar */}
              <div className="bg-navy/[0.03] border-b border-navy/[0.06] px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-navy/10" />
                  <div className="w-3 h-3 rounded-full bg-navy/10" />
                  <div className="w-3 h-3 rounded-full bg-navy/10" />
                </div>
                <div className="flex-1 mx-12">
                  <div className="bg-navy/[0.04] rounded-md px-3 py-1 text-xs text-navy/30 text-center font-medium">
                    app.medau.io
                  </div>
                </div>
              </div>
              <img
                src="/screenshots/dashboard.png"
                alt="Medau dashboard showing real-time behavioral health analytics"
                className="w-full block"
              />
            </div>

            {/* Floating accent glow */}
            <div className="absolute -z-10 top-1/4 -right-12 w-64 h-64 rounded-full bg-coral/10 blur-[80px]" />
            <div className="absolute -z-10 bottom-1/4 -left-12 w-48 h-48 rounded-full bg-teal/10 blur-[60px]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
