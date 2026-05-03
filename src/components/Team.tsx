import { AnimatedSection } from './AnimatedSection'


const leadership = [
  {
    name: 'Dr. Alex Au, MD',
    role: 'Founder / CEO',
    photo: '/team/alex-au.jpg',
    bio: 'Board-certified psychiatrist, University of Utah School of Medicine graduate, and former Chief Resident at University of Nevada Reno. A suicidologist and mental health innovator who developed a global suicide-prevention app and founded the Global Mental Health Initiative.',
  },
  {
    name: 'Jon Froemming',
    role: 'Managing Director / Co-Founder',
    photo: '/team/jon-froemming.jpg',
    bio: 'Experienced leader in sales, marketing, and strategic operations across diverse industries. Oversees company direction, team alignment, and delivery of innovative solutions integrating clinical insights with advanced technology. Former Forensic Specialist bringing real-world applications to the Medau platform.',
  },
]

const team = [
  {
    name: 'Dr. Noel C. Gardner, MD',
    role: 'Chief Medical Advisor',
    photo: '/team/noel-gardner.jpg',
    bio: 'Board-certified psychiatrist with 40+ years of clinical, forensic, and academic experience. Former Chief of Consultation-Liaison Psychiatry at University of Utah for 15 years. Recipient of the 2022 COPIC Utah Humanitarian Award.',
  },
  {
    name: 'Mark Munger',
    role: 'Chief Operations Officer',
    photo: '/team/mark-munger.jpg',
    bio: 'Multiple-time founder, former public company director, and technology executive. Decades of experience guiding companies through product design, secure development, regulatory compliance, and commercialization in highly regulated industries.',
  },
  {
    name: 'Nate Creer',
    role: 'Director of Operations',
    photo: '/team/nate-creer.jpg',
    bio: 'Healthcare professional focused on strategic integration of technology into clinical environments. Holds a Doctorate in Health Sciences Leadership and an MBA, with deep expertise in new technology adoption among clinical teams.',
  },
  {
    name: 'Saba Leistner, PA-C, MPAS',
    role: 'Technical Operator',
    photo: '/team/saba-leistner.png',
    bio: 'Board-certified Physician Associate with 15 years spanning emergency medicine, oncology, and family medicine. Former Medical Director at One Medical (pre-Amazon acquisition). Translates real-world clinical workflows into scalable digital health solutions.',
  },
]

function PersonCard({
  person,
  index = 0,
}: {
  person: (typeof leadership)[0]
  index?: number
}) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="group relative rounded-2xl border border-black/[0.04] bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-sm">
        {/* Photo */}
        <div className="relative overflow-hidden bg-warm aspect-square">
          <img
            src={person.photo}
            alt={person.name}
            className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
          />
          {/* Gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
          {/* Name overlay on photo */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-lg font-bold text-white">{person.name}</h3>
            <p className="text-sm text-white/80 font-medium">{person.role}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="p-5">
          <p className="text-sm text-navy/60 leading-relaxed">{person.bio}</p>
        </div>
      </div>
    </AnimatedSection>
  )
}

export function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-warm scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="inline-flex items-center gap-2 rounded-full bg-coral/[0.08] border border-coral/[0.12] px-4 py-1.5 text-sm text-coral font-medium mb-6">
            Our Team
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            The team behind <span className="text-coral">Medau</span>
          </h2>
          <p className="mt-4 text-lg text-navy/50 max-w-2xl mx-auto">
            Physicians, technologists, and healthcare operators working together to fix behavioral health tooling.
          </p>
        </AnimatedSection>

        {/* All team — uniform grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[...leadership, ...team].map((person, i) => (
            <PersonCard key={person.name} person={person} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
