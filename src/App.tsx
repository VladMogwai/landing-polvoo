import { useEffect, useState } from 'react'
import styles from './App.module.css'
import BrewInstall from './components/BrewInstall'

const FEATURES = [
  { icon: '⚡', title: 'One-click scripts', desc: 'Run dev, build, start without opening a terminal' },
  { icon: '📋', title: 'Live logs', desc: 'Monitor all project output in real time' },
  { icon: '🌿', title: 'Git tracking', desc: 'See branch and latest commit at a glance' },
  { icon: '🔌', title: 'Port manager', desc: "See what's running on which port, kill with one click" },
  { icon: '🖥️', title: 'Built-in terminal', desc: 'Full terminal per project, always connected' },
  { icon: '🔑', title: '.env editor', desc: 'View and edit environment variables without leaving the app' },
  { icon: '🐳', title: 'Docker integration', desc: 'Manage containers alongside your projects' },
]

export default function App() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.blobRight} aria-hidden />
      <div className={styles.blobLeft} aria-hidden />

      <main className={`${styles.hero} ${visible ? styles.heroVisible : ''}`}>
        <p className={styles.appName}>polvoo</p>
        <p className={styles.tagline}>Like Docker Desktop, but for all your projects.</p>

        <h1 className={styles.heading}>
          Stop switching between<br />10 terminal tabs
        </h1>

        <p className={styles.subheading}>
          All your local projects in one place. Start processes, monitor logs,
          manage ports and terminals — without leaving one window.
        </p>

        <BrewInstall />

        <section className={styles.features}>
          {FEATURES.map(({ icon, title, desc }) => (
            <div key={title} className={styles.featureCard}>
              <span className={styles.featureIcon}>{icon}</span>
              <div>
                <p className={styles.featureTitle}>{title}</p>
                <p className={styles.featureDesc}>{desc}</p>
              </div>
            </div>
          ))}
        </section>

        <a
          className={styles.githubLink}
          href="https://github.com/VladMogwai/landing-polvoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </main>
    </div>
  )
}
