import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Media from '@/components/Media'
import MultiMedia from '@/components/MultiMedia'

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />

      <section>
        <h2>About</h2>
        <p>
          I&rsquo;m a frontend software engineer with more than 10 years of
          experience in architecting and developing applications and websites.
          I&rsquo;ve led teams of engineers to build products for a variety of
          companies — from small startups (including my own) to large
          enterprises.
        </p>
        <p>
          I&rsquo;m currently helping{' '}
          <a href="https://kairos.art" target="_blank">
            Kairos
          </a>{' '}
          Bring radical participation to web3 by building word-class NFT tools
          for artists and businesses. Previously, I was the Director of Web
          Technology at{' '}
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
            Generally speaking, I&rsquo;m a techno-optimist, and I love thinking
            about the future and ways I can help build it. I&rsquo;m a tinkerer
            at heart!
          </mark>
        </p>
      </section>

      <hr />

      <section>
        <h2>Past Experience — Fregg</h2>
        <p>
          One of my favorite recent projects that I led the development for at
          Kairos is{' '}
          <a href="https://fregg.kairos.art" target="_blank">
            Fregg
          </a>
          . It&rsquo;s a web3 game that allows you to create dynamic NFT virtual
          pets that evolve with your daily care!
        </p>

        <Media caption="Built with NextJs, GraphQL, PostgreSQL, using Spline, SendGrid and the Kairos Dapp API">
          <video loop autoPlay muted>
            <source src="/videos/fregg-home.mp4" type="video/mp4" />
          </video>
        </Media>

        <p>
          We wanted to push the boundaries of what people expect from an NFT,
          and make an experience that is fun and simple to use, without any
          prior experience with blockchain technologies.
        </p>

        <p>
          <a href="https://kairos.art/blog/dynamic-nfts-and-fregg">
            See our blog post about the project
          </a>{' '}
          for more details on how we designed this game, and competition we ran.
        </p>

        <MultiMedia>
          <Media caption="Auth provided by Kairos NFT verification">
            <Image
              src="/images/fregg-verify.png"
              alt="Fregg"
              width={450}
              height={450}
            />
          </Media>
          <Media caption="Real-time competition leaderboards">
            <Image
              src="/images/fregg-leaderboard.png"
              alt="Fregg"
              width={450}
              height={450}
            />
          </Media>
        </MultiMedia>

        <p>
          This project was unique in a lot of ways. It was the first application
          to use the{' '}
          <a href="https://github.com/kairosnfts/dapp" target="_blank">
            Kairos Dapp Library
          </a>
          , one of the first implementations of a dynamic NFT that changes every
          day based on the user&rsquo;s actions, and was also part of a
          competition with a cash prize, where the entry fee was the NFT itself
          ($1 USD). You can{' '}
          <a
            href="https://kairos.art/blog/kairos-dynamic-nft-developer-tool"
            target="_blank"
          >
            read more about all that in a blog post I wrote
          </a>
          .
        </p>

        <Media>
          <Image
            src="/images/kairos-dapp-diagram.png"
            alt="Fregg"
            width={800}
            height={800}
          />
        </Media>

        <p>
          It was great to see the positive community reaction to the project
          (including winning multiple design awards), and the way users continue
          to care for their Fregg long after the competition ended.
        </p>
      </section>

      <hr />

      <section>
        <h2>Past Experience — VÖL</h2>
        <p>
          &ldquo;Where should we go for dinner?&rdquo; &ldquo;Do you have any
          recommendations for two days in Paris?&rdquo; We&rsquo;ve all been
          there. I set out to solve this problem with some amazing co-founders,
          and we created{' '}
          <a href="https://vol.life" target="_blank">
            VÖL
          </a>{' '}
          — a social recommendations app that helps you discover new places,
          both local and abroad.
        </p>

        <MultiMedia caption="Built with React Native + Expo, NodeJS and PostgreSQL">
          <Media>
            <video loop autoPlay muted width={375}>
              <source src="/videos/vol-explore.mp4" type="video/mp4" />
            </video>
          </Media>
          <Media>
            <video loop autoPlay muted width={375}>
              <source src="/videos/vol-search.mp4" type="video/mp4" />
            </video>
          </Media>
        </MultiMedia>

        <p>
          With an emphasis on the social aspect of recommendations, we wanted to
          make it easy to share your favorite places with friends and family.
          You can create lists of places, and share them with anyone. You can
          also follow other users to see what they&rsquo;re recommending.
        </p>

        <MultiMedia>
          <Media>
            <Image
              src="/images/vol-activity.png"
              alt="VÖL activity feed"
              width={280}
              height={280}
            />
          </Media>
          <Media>
            <Image
              src="/images/vol-lists.png"
              alt="VÖL followed lists"
              width={280}
              height={280}
            />
          </Media>
          <Media>
            <Image
              src="/images/vol-profile.png"
              alt="VÖL profile"
              width={280}
              height={280}
            />
          </Media>
        </MultiMedia>

        <p>
          As a lean operation with a small engineering team, we we were able to
          build a cross-platform mobile app that was available on both iOS and
          Android by using React Native with Expo. It has since become one of my
          favorite ecosystems to work with.
        </p>
      </section>

      <hr />

      <section>
        <h2>Past Experience — Shomego</h2>
        <p>
          Near the end of 2020, a couple of friends and I were looking for a way
          to help some of our local venues that were struggling due to in-person
          restrictions. We wanted to create a way for venues to stream events,
          sell tickets, and accept donations. That&rsquo;s why we created{' '}
          <a href="https://shomego.com" target="_blank">
            Shomego
          </a>
          . Not only did we build a web3 streaming platform that allowed the
          audience to tip the venue using crypto, but we also provided a
          cost-effective hardware solution for venues to rent.
        </p>

        <Media caption="Built as a custom React app, with web sockets and web3 payment systems">
          <Image
            src="/images/shomego-home.png"
            alt="Shomego"
            width={800}
            height={800}
          />
        </Media>

        <p>
          We were able to build a fully functional streaming platform in a
          matter of weeks, and we were able to get a few venues on board.
        </p>

        <Media caption="Live stream chat, with audio and video party functionality">
          <Image
            src="/images/shomego-show.png"
            alt="Shomego"
            width={800}
            height={800}
          />
        </Media>
      </section>

      <Footer />
    </main>
  )
}
