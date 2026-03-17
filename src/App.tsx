import { useEffect, useState } from 'react'
import styles from './App.module.css'
import BrewInstall from './components/BrewInstall'

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

        <h1 className={styles.heading}>
          The CLI tool that&nbsp;[I'll replace this]
        </h1>

        <p className={styles.subheading}>
          Fast, simple, and powerful. Built for developers who live in the terminal.
        </p>

        <BrewInstall />

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
