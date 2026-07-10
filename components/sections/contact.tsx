import { Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal, Stagger } from '@/components/reveal'
import { profile } from '@/lib/resume-data'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: 'text-google-red',
    bg: 'bg-google-red/10',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: profile.linkedin,
    color: 'text-google-blue',
    bg: 'bg-google-blue/10',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'See my code',
    href: profile.github,
    color: 'text-foreground',
    bg: 'bg-secondary',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: undefined,
    color: 'text-google-green',
    bg: 'bg-google-green/10',
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-secondary/40 py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <span className="text-sm font-semibold tracking-wide text-google-blue uppercase">
            Contact
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            I&apos;m always open to discussing backend engineering, AI projects, or new
            opportunities. Reach out and let&apos;s talk.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-google-blue px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <Mail className="h-4 w-4" />
            Say hello
          </a>
        </Reveal>

        <Stagger className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
          {contacts.map((c) => {
            const inner = (
              <>
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${c.bg}`}>
                  <c.icon className={`h-5 w-5 ${c.color}`} />
                </span>
                <div className="text-left">
                  <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {c.label}
                  </p>
                  <p className="text-sm font-medium">{c.value}</p>
                </div>
              </>
            )
            return (
              <Reveal key={c.label}>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 text-left shadow-sm">
                    {inner}
                  </div>
                )}
              </Reveal>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
