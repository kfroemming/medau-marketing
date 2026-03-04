import { Bird, Globe, Briefcase, Code } from 'lucide-react'

const linkGroups = [
  {
    title: 'Product',
    links: [
      { label: 'Center Point Mood Map', href: '#products' },
      { label: 'Safety Monitoring', href: '#products' },
      { label: 'Point System', href: '#products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#trust' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
]

const socials = [
  { icon: Globe, href: '#', label: 'Website' },
  { icon: Briefcase, href: '#', label: 'LinkedIn' },
  { icon: Code, href: '#', label: 'GitHub' },
]

export function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-coral flex items-center justify-center">
                <Bird className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Medau
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Advanced Behavioral Health Analytics
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.1] transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 text-sm hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © 2026 Medau Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
