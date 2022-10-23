import type { NextPage } from 'next'
import Head from 'next/head'
import {
    Nav,
    NavMenu,
    Header,
    Work,
    Contact,
    Footer,
    About
} from "../modules"
import { NavContext } from '../helpers/NavContext'
import { useState } from 'react'

const Home: NextPage = () => {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <div>
      <div id='head' />
      <Head>
        <title>Olubukunmi Olufemi</title>
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
