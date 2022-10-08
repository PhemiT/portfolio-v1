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
    Footer,
    About
} from "../modules"
import { NavContext } from '../helpers/NavContext'
import { useState } from 'react'
import NavMenu from '../modules/NavMenu'

const favicon = <Icon icon={ICONS.codelogo} />

const Home: NextPage = () => {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <div className={styles.container}>
      <div id='head' />
      <Head>
        <title>Bukunmi Olufemi</title>
        <meta name="description" content="Olubukunmi Olufemi's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavContext.Provider value={{menuActive, setMenuActive}}>
        <Nav />
        <NavMenu />
        <Header />
        <About />
        <Work />
        <Contact />
        <Footer />
      </NavContext.Provider>
    </div>
  )
}

export default Home
