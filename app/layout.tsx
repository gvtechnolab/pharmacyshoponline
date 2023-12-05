/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";

/* Instruments */
import styles from "./styles/layout.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/globals.css";
import { assetsPrefix } from "@/src/utills/constants";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link
            rel="icon"
            href={`${assetsPrefix}/assets/images/pharmacyshoplogo96.png`}
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          {/* <section className={styles.container}>
            <Nav />

            <header className={styles.header}>
              <img src="/logo.svg" className={styles.logo} alt="logo" />
            </header> */}

          <main className={styles.main}>{props.children}</main>

          {/* <footer className={styles.footer}>
              <span>Learn </span>
              <a
                className={styles.link}
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              <span>, </span>
              <a
                className={styles.link}
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>
              <span>, </span>
              <a
                className={styles.link}
                href="https://redux-toolkit.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux Toolkit
              </a>
              ,<span> and </span>
              <a
                className={styles.link}
                href="https://react-redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Redux
              </a>
            </footer>
          </section>
             */}
        </body>
      </html>
    </Providers>
  );
}
