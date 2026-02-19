'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">About Me</h1>

            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I'm Danwand NS, a Security Researcher, Developer, and Engineer passionate about
               everything related to security, machine learning, and software development.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Currently working as an Senior AI Security Engineer, I perform enterprise-grade security assessments, 
                advanced vulnerability analysis, and threat modeling across complex environments. 
                My work centers on identifying real-world attack paths, quantifying risk, and 
                engineering pragmatic remediation strategies.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
               I am also an active contributor to the security community,
                sharing insights through blog posts, talks, and open-source projects.
                My goal is to bridge the gap between cutting-edge research and practical application,
                empowering organizations to build more secure and/or intelligent systems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="pt-8"
              >
                <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    'Vulnerability Research',
                    'Penetration Testing',
                    'Threat Modeling',
                    'Red Teaming',
                    'Python',
                    'Machine Learning',
                    'Reinforcement Learning',
                    'Cloud Security (AWS, GCP)',
                    'DevSecOps',
                    'Automation',
                    'Computer Vision',
                    'Deep Learning',
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                      className="border border-foreground/20 rounded-lg p-4 text-center hover:border-accent hover:text-accent transition-colors"
                    >
                      {skill}
                    </motion.div>
                  ))}
                  
                </div>
              </motion.div>
              {/* Ignorance is bliss */}
                  <br></br> 
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
