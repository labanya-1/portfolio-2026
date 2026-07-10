'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { AnimatedBlobs } from '@/components/animated-blobs'
import { profile } from '@/lib/resume-data'

const easing = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easing } },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <AnimatedBlobs />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-google-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-google-green" />
            </span>
            Open to software engineering roles
          </motion.div>

          <motion.h1
            variants={item}
            className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {profile.name}.
            <span className="mt-2 block text-google-blue">{profile.title}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-6 flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-google-red" />
            <span className="text-sm font-medium">{profile.location}</span>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-google-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <Download className="h-4 w-4" />
              Download Résumé
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: easing, delay: 0.2 }}
          className="mx-auto lg:mx-0"
        >
          <div className="relative">
            <motion.div
              aria-hidden
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-google-blue/20 via-google-green/10 to-google-yellow/20 blur-2xl"
              animate={{ rotate: [0, 4, 0, -4, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              aria-hidden
              className="absolute -inset-2 rounded-[2.25rem] bg-[conic-gradient(from_0deg,var(--google-blue),var(--google-red),var(--google-yellow),var(--google-green),var(--google-blue))] opacity-90"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />
            <div className="relative h-80 w-64 overflow-hidden rounded-[2rem] border-4 border-card bg-card shadow-xl sm:h-96 sm:w-72">
              <Image
                src="/images/labanya.png"
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(max-width: 640px) 16rem, 18rem"
                className="object-cover object-center"
                priority
              />
            </div>
            <span className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-google-red shadow-sm" />
            <span className="absolute -bottom-3 -left-3 h-6 w-6 rounded-full bg-google-yellow shadow-sm" />
            <span className="absolute -bottom-3 right-8 h-4 w-4 rounded-full bg-google-green shadow-sm" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
