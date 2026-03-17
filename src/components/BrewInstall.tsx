import { useState } from 'react'
import styles from './BrewInstall.module.css'

const CMD = 'brew install polvoo'

export default function BrewInstall() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(CMD).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className={styles.card}>
      <span className={styles.cmd}>
        <span className={styles.prompt}>$</span>
        {' '}
        <span className={styles.brew}>brew</span>
        {' '}
        <span className={styles.install}>install</span>
        {' '}
        <span className={styles.pkg}>polvoo</span>
      </span>

      <button
        className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
        onClick={handleCopy}
        aria-label="Copy install command"
      >
        {copied ? 'Copied ✓' : 'Copy'}
      </button>
    </div>
  )
}
