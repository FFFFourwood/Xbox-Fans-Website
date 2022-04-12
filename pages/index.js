import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from './components/banner'
import Introduce from './components/introduce'
import FAQ from './components/FAQ'
import Mint from './components/mint'
import About from './components/about'
import Footer from './components/footer'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Web3Provider } from '@ethersproject/providers';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Web3ReactProvider, useWeb3React, } from '@web3-react/core'

export default function Home() {
  const getLibrary = (provider) => {
    const library = new Web3Provider(provider, 'any');
    library.pollingInterval = 15000;
    return library;
  };
  return (

    <div className={styles.container}>
      <Head>
        <title>Xbox Fans DAO</title>
        <meta name="description" content="Welcome to Xbox Fans DAO website！" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/* google tag manager 换成自己的api key */}
        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-**********`}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-**********', {
              page_path: window.location.pathname,
            });
          `,
          }} /> */}
      </Head>
      <Parallax pages={5} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          className="center"
          style={{ backgroundColor: '#fff' }}>
          <Banner />
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={3} speed={2} style={{ backgroundColor: '#17F160' }}>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} className="center">
          <Introduce />
        </ParallaxLayer>
        <ParallaxLayer offset={2} factor={2} speed={2} style={{ backgroundColor: '#F94FE8' }}>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} className="center">
          <FAQ />
        </ParallaxLayer>
        <ParallaxLayer offset={3} factor={3} speed={2} style={{ backgroundColor: '#17F160' }}>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5} className="center">
          <Web3ReactProvider getLibrary={getLibrary}>
            <Mint />
          </Web3ReactProvider>
        </ParallaxLayer>
        <ParallaxLayer offset={4} factor={2} speed={2} style={{ backgroundColor: '#F94FE8' }}>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.5} className="about-wrap" >
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={4.93} factor={0.07} speed={0.01} className="center" style={{ backgroundColor: '#fff' }}>
          <Footer />
        </ParallaxLayer>
      </Parallax>

    </div>
  )
}
