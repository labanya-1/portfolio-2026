import { Compass, Sparkles, Target, User } from 'lucide-react'
import { Reveal, Stagger } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { about } from '@/lib/resume-data'

const cards = [
  {
    icon: User,
    title: 'Who I am',
    body: about.who,
    color: 'text-google-blue',
    bg: 'bg-google-blue/10',
  },
  {
    icon: Sparkles,
    title: 'What I specialize in',
    body: about.specialize,
    color: 'text-google-red',
    bg: 'bg-google-red/10',
  },
  {
    icon: Compass,
    title: 'My interests',
    body: about.interests,
    color: 'text-google-green',
    bg: 'bg-google-green/10',
  },
  {
    icon: Target,
    title: 'My goals',
    body: about.goals,
    color: 'text-google-yellow',
    bg: 'bg-google-yellow/10',
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="About"
        title="A little about me"
        description="Backend and AI development is where I feel most at home — here is what drives my work."
      />

      <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {cards.map((card) => (
          <Reveal
            key={card.title}
            as="article"
            className="group rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <span
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${card.bg}`}
            >
              <card.icon className={`h-5 w-5 ${card.color}`} />
            </span>
            <h3 className="mt-5 font-heading text-lg font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
          </Reveal>
        ))}
      </Stagger>
    </section>
  )
}
