import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal, Stagger } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { projects } from '@/lib/resume-data'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="A selection of projects spanning secure APIs and AI-powered research tooling."
      />

      <Stagger className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Reveal
            key={project.title}
            as="article"
            className="group flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-heading text-xl font-semibold text-balance">{project.title}</h3>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-google-blue/10 text-google-blue transition-transform duration-300 group-hover:rotate-12">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <GithubIcon className="h-4 w-4" />
                  Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-google-blue px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  Live Demo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </Stagger>
    </section>
  )
}
