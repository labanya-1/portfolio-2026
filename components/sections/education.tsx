import Image from 'next/image'
import { GraduationCap, Trophy } from 'lucide-react'
import { Reveal, Stagger } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { publicPath } from '@/lib/public-path'
import { achievements, certifications, education } from '@/lib/resume-data'

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Education & Credentials"
        title="Where I've learned"
        description="My academic background, certifications, and standout achievements."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Education card */}
        <Reveal
          as="article"
          className="rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-google-blue/10">
            <GraduationCap className="h-5 w-5 text-google-blue" />
          </span>
          <h3 className="mt-5 font-heading text-lg font-semibold">{education.degree}</h3>
          <p className="mt-1 text-sm font-medium text-muted-foreground">{education.college}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-secondary px-3.5 py-1.5 text-sm font-medium text-secondary-foreground">
              {education.year}
            </span>
            <span className="rounded-full bg-google-green/10 px-3.5 py-1.5 text-sm font-semibold text-google-green">
              CGPA {education.cgpa}
            </span>
          </div>

          <p className="mt-6 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Coursework
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span
                key={course}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium"
              >
                {course}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Achievements card */}
        <Reveal
          as="article"
          className="rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-google-yellow/10">
            <Trophy className="h-5 w-5 text-google-yellow" />
          </span>
          <h3 className="mt-5 font-heading text-lg font-semibold">Leadership & Achievements</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {achievements.map((a, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-google-red" />
                <span className="text-pretty">{a}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Certifications */}
      <div className="mt-12">
        <h3 className="font-heading text-xl font-semibold">Certifications</h3>
        <Stagger className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {certifications.map((cert) => (
            <Reveal
              key={cert.title}
              as="article"
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <Image
                  src={publicPath(cert.image)}
                  alt={`${cert.title} certificate`}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h4 className="text-sm font-semibold leading-snug text-balance">{cert.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{cert.organization}</p>
                <span className="mt-3 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {cert.year}
                </span>
              </div>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
