import { Reveal, Stagger } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skillCategories } from '@/lib/resume-data'

const accents = [
  'text-google-blue',
  'text-google-red',
  'text-google-green',
  'text-google-yellow',
  'text-google-blue',
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="My toolkit"
          description="The languages, frameworks, and tools I reach for when building software."
        />

        <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <Reveal
              key={category.label}
              as="article"
              className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className={`font-heading text-base font-semibold ${accents[idx % accents.length]}`}>
                {category.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-google-blue/50 hover:bg-google-blue/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
