'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const easing = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: easing } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easing },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

type RevealProps = {
  children: ReactNode
  variants?: Variants
  className?: string
  delay?: number
  once?: boolean
  as?: 'div' | 'section' | 'li' | 'article' | 'span'
}

export function Reveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  once = true,
  as = 'div',
}: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  once?: boolean
  as?: 'div' | 'section' | 'ul' | 'article'
}

export function Stagger({ children, className, once = true, as = 'div' }: StaggerProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
    >
      {children}
    </MotionTag>
  )
}
