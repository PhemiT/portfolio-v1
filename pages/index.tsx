import type { NextPage } from 'next'
import Head from 'next/head'
import Icon from '../components/Icon'
import ICONS from '../constants/ICONS'
import styles from '../styles/Home.module.scss'
import {
    Nav,
    Header,
    Work,
    Contact,
    Footer
} from "../modules"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bukunmi Olufemi</title>
        <meta name="description" content="Olubukunmi Olufemi's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
