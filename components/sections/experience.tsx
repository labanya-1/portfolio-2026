import { Briefcase, MapPin } from 'lucide-react'
import { Reveal, Stagger } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { experiences } from '@/lib/resume-data'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Internships where I shipped production backends, AI systems, and data tooling."
        />

        <Stagger className="relative mt-12">
          {/* timeline line */}
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-4 w-px bg-border sm:left-5"
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp) => (
              <Reveal
                key={exp.company}
                as="article"
                className="relative pl-14 sm:pl-16"
              >
                <span className="absolute top-1 left-0 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card shadow-sm sm:h-11 sm:w-11">
                  <Briefcase className="h-4 w-4 text-google-blue sm:h-5 sm:w-5" />
                </span>

                <div className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-heading text-lg font-semibold">{exp.position}</h3>
                      <p className="text-sm font-medium text-google-blue">{exp.company}</p>
                    </div>
                    <div className="mt-1 flex flex-col gap-1 text-sm text-muted-foreground sm:mt-0 sm:items-end">
                      <span className="font-medium">{exp.duration}</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 flex flex-col gap-3">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-google-green" />
                        <span className="text-pretty">{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  )
}
