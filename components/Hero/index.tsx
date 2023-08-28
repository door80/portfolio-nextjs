import Image from 'next/image'
import styles from './styles.module.css'
import LinkArrow from '../LinkArrow'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImage}>
        <Image
          src="/images/michael-mercer.jpg"
          alt="Michael Mercer"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.heroContent}>
        <h1>Heyo 👋, I&rsquo;m Michael Mercer</h1>

        <p className={styles.description}>
          I help turn ideas into reality by offering product direction,
          engineering leadership and execution.
        </p>

        <h2>Connect</h2>
        <LinkArrow href="https://twitter.com/michaelmercer" isExternal>
          Twitter
        </LinkArrow>
        <LinkArrow href="https://www.linkedin.com/in/mikemercer/" isExternal>
          LinkedIn
        </LinkArrow>
        <LinkArrow href="https://github.com/door80" isExternal>
          Github
        </LinkArrow>
      </div>
    </div>
  )
}
