import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Media from '@/components/Media'
import MultiMedia from '@/components/MultiMedia'
import LinkScroll from '@/components/LinkScroll'

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />

      <section>
        <h3>About</h3>
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
          bring radical participation to web3 by building word-class NFT tools
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

      <section>
        <h2>Notable Projects</h2>
        <MultiMedia isCentered={false}>
          <Media caption="Kairos">
            <LinkScroll href="#kairos">
              <Image
                src="/images/kairos-logo.png"
                width="100"
                height="100"
                alt="Kairos"
                priority
              />
            </LinkScroll>
          </Media>

          <Media caption="Fregg">
            <LinkScroll href="#fregg">
              <Image
                src="/images/fregg-logo.png"
                width="100"
                height="100"
                alt="Fregg"
                priority
              />
            </LinkScroll>
          </Media>

          <Media caption="VÖL">
            <LinkScroll href="#vol">
              <Image
                src="/images/vol-logo.png"
                width="100"
                height="100"
                alt="VÖL"
                priority
              />
            </LinkScroll>
          </Media>

          <Media caption="Shomego">
            <LinkScroll href="#shomego">
              <Image
                src="/images/shomego-logo.png"
                width="100"
                height="100"
                alt="Shomego"
                priority
              />
            </LinkScroll>
          </Media>
        </MultiMedia>
      </section>

      <hr />

      <section id="kairos">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIcon}>
            <Media noMargin>
              <Image
                src="/images/kairos-logo.png"
                width="50"
                height="50"
                alt="Kairos"
              />
            </Media>
          </div>

          <h3>
            Company: Kairos
            <br />
            Project: Campaign Builder
          </h3>
        </div>

        <p>
          One of the issues we heard from NFT creators was that it&rsquo;s hard
          to stay connected with their collectors, and existing tools were too
          cumbersome, or difficult, to setup. Kairos aimed to solve this by
          providing creators with tools to request email addresses from their
          collectors, compose emails and send them out &mdash; without leaving
          the Kairos platform!
        </p>

        <p>
          The first step in this process is to verify <em>current</em> NFT
          holders of a collection, and then provide an optional email address
          input so they could stay connected with the creator. On the creator
          side, new UIs were added for displaying all current holders, when they
          were last verified, along with any emails collected.
        </p>

        <MultiMedia>
          <Media caption="Verify connected wallets on the blockchain">
            <Image
              src="/images/kairos-verify.png"
              alt="Kairos verification"
              width={380}
              height={380}
            />
          </Media>
          <Media caption="See all collector information, with option to export">
            <Image
              src="/images/kairos-collectors-list.png"
              alt="Kairos collectors list"
              width={380}
              height={380}
            />
          </Media>
        </MultiMedia>

        <p>
          The email builder tool allowed for quite a bit of customization, and
          came with sensible defaults tied to the collection color pallete and
          logos. Users can adjust settings like adding images, CTA buttons,
          email meta information and can type directly within the editor to
          adjust copy and font styles, which can all be seen updating and saving
          in real-time.
        </p>

        <Media caption="Built with React, Node.js, GraphQL, PostgreSQL, using Slate, SendGrid">
          <video loop autoPlay playsInline muted width={768}>
            <source
              src="/videos/kairos-campaign-color-editing.mp4"
              type="video/mp4"
            />
          </video>
        </Media>

        <p>
          Creators can see a preview of their email before sending it out, and
          even request a test send to themselves, just to double check! Since
          emails are sent out using a queue of server jobs, the creator will
          also see the current status of the campaigns they have sent.
        </p>

        <Media caption="See what your collectors will see in their inbox">
          <Image
            src="/images/kairos-campaign-send.png"
            alt="Kairos camapign send"
            width={768}
            height={768}
          />
        </Media>

        <p>
          Creators were excited to have access to even more ways to connect with
          their holders, without having to setup anything else outside of
          Kairos, understand Etherscan or have any coding knowledge.
        </p>
      </section>

      <hr />

      <section id="fregg">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIcon}>
            <Media noMargin>
              <Image
                src="/images/fregg-logo.png"
                width="50"
                height="50"
                alt="Fregg"
              />
            </Media>
          </div>

          <h3>
            Company: Kairos
            <br />
            Project: Fregg
          </h3>
        </div>

        <p>
          One of my favorite recent projects that I led the development for at
          Kairos is{' '}
          <a href="https://fregg.kairos.art" target="_blank">
            Fregg
          </a>
          . It&rsquo;s a web3 game that allows you to create dynamic NFT virtual
          pets that evolve with your daily care!
        </p>

        <Media caption="Built with Next.js, GraphQL, PostgreSQL, using Spline, SendGrid and the Kairos Dapp API">
          <video loop autoPlay playsInline muted>
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
              width={380}
              height={380}
            />
          </Media>
          <Media caption="Real-time competition leaderboards">
            <Image
              src="/images/fregg-leaderboard.png"
              alt="Fregg"
              width={380}
              height={380}
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
            width={768}
            height={768}
          />
        </Media>

        <p>
          It was great to see the positive community reaction to the project
          (including winning multiple design awards), and the way users continue
          to care for their Fregg long after the competition ended.
        </p>
      </section>

      <hr />

      <section id="vol">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIcon}>
            <Media noMargin>
              <Image
                src="/images/vol-logo.png"
                width="50"
                height="50"
                alt="VÖL"
              />
            </Media>
          </div>

          <h3>
            Company: VÖL
            <br />
            Project: Mobile App
          </h3>
        </div>

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

        <MultiMedia caption="Built with React Native + Expo, Node.js and PostgreSQL">
          <Media>
            <video loop autoPlay playsInline muted width={380}>
              <source src="/videos/vol-explore.mp4" type="video/mp4" />
            </video>
          </Media>
          <Media>
            <video loop autoPlay playsInline muted width={380}>
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
              src="/images/vol-activity.jpg"
              alt="VÖL activity feed"
              width={256}
              height={256}
            />
          </Media>
          <Media>
            <Image
              src="/images/vol-lists.jpg"
              alt="VÖL followed lists"
              width={256}
              height={256}
            />
          </Media>
          <Media>
            <Image
              src="/images/vol-profile.jpg"
              alt="VÖL profile"
              width={256}
              height={256}
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

      <section id="shomego">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIcon}>
            <Media noMargin>
              <Image
                src="/images/shomego-logo.png"
                width="50"
                height="50"
                alt="Shomego"
              />
            </Media>
          </div>

          <h3>
            Company: Shomego
            <br />
            Project: Live Streaming Webapp
          </h3>
        </div>

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
            src="/images/shomego-home.jpg"
            alt="Shomego"
            width={768}
            height={768}
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
            width={768}
            height={768}
          />
        </Media>
      </section>

      <Footer />
    </main>
  )
}
