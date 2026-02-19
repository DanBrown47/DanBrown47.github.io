'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    title: 'Senior Security Consultant',
    company: '',
    period: 'Jan 2025 - Present',
    description: 'Specializing in Security Consulting and Cloud security in a hybrid work environment.',
  },
  {
    title: 'SDE III',
    company: 'Quadance Technologies',
    period: 'Dec 2023 - Jan 2025',
    description: 'Focused on Software Infrastructure and Engineering, utilizing OCR, Big Data, Flask, and Deep Learning.',
  },
  {
    title: 'Full Stack Engineer (DevOps)',
    company: 'Tacten Services LLP',
    period: 'Mar 2023 - Nov 2023',
    description: 'Part-time remote role managing DevOps with Docker, and REST API development using Python and Frappe Framework.',
  },
  {
    title: 'DevSecOps Engineer',
    company: 'Wattlecorp Cybersecurity Labs',
    period: 'May 2022 - Nov 2023',
    description: 'Lead VAPT engagments, Integrated security into DevOps pipelines, focused on Vulnerability Assessments and developed cyber ranges.',
  },
  {
    title: 'Associate Security Analyst',
    company: 'Deloitte',
    period: 'Aug 2021 - May 2022',
    description: 'Handled Robotic Process Automation (RPA) bot security, Application Security, and Information Security development.',
  },
  {
    title: 'AI Predictive Cybersecurity Researcher',
    company: 'Wattlecorp Cybersecurity Labs LLP',
    period: 'Aug 2020 - Aug 2021',
    description: 'Conducted research in Natural Language Processing (NLP) and built RESTful WebServices for security applications.',
  }
]

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-sm uppercase tracking-wider text-foreground/60 mb-16">
          Experience
        </h2>

        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <motion.h3
                    className="text-3xl md:text-4xl font-semibold mb-2 group-hover:text-accent transition-colors"
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {exp.title}
                  </motion.h3>
                  <p className="text-xl text-foreground/60">{exp.company}</p>
                </div>
                <span className="text-sm text-foreground/40 md:text-right whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-lg text-foreground/70 max-w-2xl">
                {exp.description}
              </p>

              <motion.div
                className="absolute left-0 bottom-0 h-px bg-foreground/10 w-0 group-hover:w-full transition-all duration-500"
                initial={{ width: '0%' }}
                whileHover={{ width: '100%' }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
