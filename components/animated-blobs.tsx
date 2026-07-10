'use client'

import { motion } from 'framer-motion'

export function AnimatedBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-google-blue/20 blur-3xl sm:h-96 sm:w-96"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-10 right-0 h-64 w-64 rounded-full bg-google-red/15 blur-3xl sm:h-80 sm:w-80"
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-google-yellow/15 blur-3xl sm:h-80 sm:w-80"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-10 -bottom-16 h-64 w-64 rounded-full bg-google-green/15 blur-3xl sm:h-80 sm:w-80"
        animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
