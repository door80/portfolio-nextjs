import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.pageFooter}>
      <p className="centered">
        &copy;{new Date().getFullYear()} Michael Mercer.{' '}
        <a href="https://twitter.com/michaelmercer" target="_blank">
          Come say hey
        </a>{' '}
        sometime!
      </p>
    </footer>
  )
}
