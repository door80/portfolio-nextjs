import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Michael Mercer</title>
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <div className="hero">
          <div className="hero-image">
            <img src="michael-mercer.jpg" />
          </div>
          <div className="hero-content">
            <h1>
              Heyo 👋, I'm Michael Mercer
            </h1>

            <p className="description">
              I help turn ideas into reality by offering product direction, engineering leadership and execution.
            </p>

            <h2>Connect</h2>
            <p>
              <a href="https://twitter.com/michaelmercer" className="link-arrow">
                Twitter
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.97976 5.6869C8.7845 5.49163 8.7845 5.17505 8.97976 4.97979C9.17502 4.78453 9.4916 4.78453 9.68687 4.97979L12.3535 7.64646C12.5488 7.84172 12.5488 8.1583 12.3535 8.35356L9.68687 11.0202C9.4916 11.2155 9.17502 11.2155 8.97976 11.0202C8.7845 10.825 8.7845 10.5084 8.97976 10.3131L10.7929 8.50001H4.33331C4.05717 8.50001 3.83331 8.27615 3.83331 8.00001C3.83331 7.72387 4.05717 7.50001 4.33331 7.50001H10.7929L8.97976 5.6869Z" fill="#413976"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mikemercer/" className="link-arrow">
                LinkedIn
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.97976 5.6869C8.7845 5.49163 8.7845 5.17505 8.97976 4.97979C9.17502 4.78453 9.4916 4.78453 9.68687 4.97979L12.3535 7.64646C12.5488 7.84172 12.5488 8.1583 12.3535 8.35356L9.68687 11.0202C9.4916 11.2155 9.17502 11.2155 8.97976 11.0202C8.7845 10.825 8.7845 10.5084 8.97976 10.3131L10.7929 8.50001H4.33331C4.05717 8.50001 3.83331 8.27615 3.83331 8.00001C3.83331 7.72387 4.05717 7.50001 4.33331 7.50001H10.7929L8.97976 5.6869Z" fill="#413976"/>
                </svg>
              </a>
              <a href="https://github.com/door80" className="link-arrow">
                Github
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.97976 5.6869C8.7845 5.49163 8.7845 5.17505 8.97976 4.97979C9.17502 4.78453 9.4916 4.78453 9.68687 4.97979L12.3535 7.64646C12.5488 7.84172 12.5488 8.1583 12.3535 8.35356L9.68687 11.0202C9.4916 11.2155 9.17502 11.2155 8.97976 11.0202C8.7845 10.825 8.7845 10.5084 8.97976 10.3131L10.7929 8.50001H4.33331C4.05717 8.50001 3.83331 8.27615 3.83331 8.00001C3.83331 7.72387 4.05717 7.50001 4.33331 7.50001H10.7929L8.97976 5.6869Z" fill="#413976"/>
                </svg>
              </a>
            </p>
          </div>
        </div>

        <h2>About</h2>
        <p>
          I'm a senior frontend software engineer with more than 10 years of experience in architecting and developing applications and websites. I'm the Director of Web Technology at <a href="https://thestarrconspiracy.com">The Starr Conspiracy</a>, where I help lead our development team and guide our company and clients on new technology initiatives.
        </p>

        <p>
          I'm also the co-founder and CTO of <a href="https://shomego.com">Shomego</a> and <a href="https://vol.life">VÖL</a>.
        </p>

        <p>
          <mark>Generally speaking, I'm a techno-optimist, and I love thinking about the future and ways I can help build it. I'm a tinkerer at heart!</mark>
        </p>


      </main>

      <footer>
        <p>
          michaelmercer.eth
        </p>
        <p>
          Dallas, TX
        </p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          width: 100%;
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        footer {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4em 0;
        }

        a {
          color: #413976;
          text-decoration: none;
          border-bottom: 2px solid #413976;
        }

        a:hover,
        a:active {
          color: #806FE8;
          border-color: #806FE8;
        }

        .link-arrow {
          display: inline-block;
          margin-right: 1rem;
          border: 0;
        }

        .link-arrow svg {
          transform: translateX(2px);
          transition: transform 200ms ease-in-out;
        }

        .link-arrow:hover svg {
          transform: translateX(4px);
        }

        .link-arrow:hover svg path {
          fill: #806FE8;
        }

        p {
          margin: 0 0 1rem 0;
        }

        h1 {
          margin-bottom: 1rem;
          line-height: 1.15;
          font-size: 1.6rem;
          font-weight: 500;
        }

        h2 {
          font-size: 1rem;
          font-weight: 400;
          color: #B9B9B9;
          margin-bottom: 0.5rem;
          font-weight: 400;
        }

        .description {
          line-height: 1.3;
          font-size: 1.2rem;
        }

        img {
          display: block;
          max-width: 100%;
          height: auto;
        }

        .hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .hero-content {
          width: 60%;
        }

        .hero-image {
          position: relative;
          width: 34%;
        }

        .hero-image img {
          width: 100%;
          border-radius: 10px;
        }

        .hero-image::after {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          background: #E3C2E9;
          top: 10px;
          left: 10px;
          z-index: -1;
          border-radius: 10px;
        }

        mark {
          background: rgba(227, 194, 233, 0.2);
          font-style: italic;
        }

        @media (max-width: 750px) {
          .hero {
            flex-direction: column;
            text-align: center;
          }

          .hero-image {
            margin-bottom: 2rem;
            width: 50%;
          }

          .hero-content {
            width: 100%;
          }

          footer {
            padding: 0;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 20px;
          line-height: 1.4;
          font-family: "IBM Plex Sans", sans-serif;
          font-weight: 400;
          color: #48444E;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
