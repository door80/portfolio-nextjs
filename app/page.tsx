import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.page}>
        <Hero />

        <section>
          <h2>About</h2>
          <p>
            I&rsquo;m a senior frontend software engineer with more than 10
            years of experience in architecting and developing applications and
            websites. I&rsquo;m helping{' '}
            <a href="https://kairos.art" target="_blank">
              Kairos
            </a>{' '}
            bring brands into the web3 space. Previously, I was the Director of
            Web Technology at{' '}
            <a href="https://thestarrconspiracy.com" target="_blank">
              The Starr Conspiracy
            </a>{' '}
            and co-founder of{' '}
            <a href="https://vol.life" target="_blank">
              VÖL
            </a>{' '}
            and{' '}
            <a href="https://shomego.com" target="_blank">
              Shomego
            </a>
            .
          </p>

          <p>
            <mark>
              Generally speaking, I&rsquo;m a techno-optimist, and I love
              thinking about the future and ways I can help build it. I&rsquo;m
              a tinkerer at heart!
            </mark>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
