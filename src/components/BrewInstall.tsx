import { useState } from 'react'
import styles from './BrewInstall.module.css'

const CMD = 'brew tap VladMogwai/polvoo && brew install --cask polvoo'

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
      <div className={styles.lines}>
        <span className={styles.cmd}>
          <span className={styles.prompt}>$</span>
          {' '}
          <span className={styles.brew}>brew</span>
          {' '}
          <span className={styles.kw}>tap</span>
          {' '}
          <span className={styles.pkg}>VladMogwai/polvoo</span>
        </span>
        <span className={styles.cmd}>
          <span className={styles.prompt}>$</span>
          {' '}
          <span className={styles.brew}>brew</span>
          {' '}
          <span className={styles.kw}>install</span>
          {' '}
          <span className={styles.flag}>--cask</span>
          {' '}
          <span className={styles.pkg}>polvoo</span>
        </span>
      </div>

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
