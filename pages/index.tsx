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
import Loading from '../components/Loading'
import { NavContext } from '../helpers/NavContext'
import { useEffect, useState } from 'react'
import { setTimeout } from 'timers'

const Home: NextPage = () => {
  const [menuActive, setMenuActive] = useState(false)
 /*  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  if (loading) {return (<Loading />)} */
  return ( 
    <div>
      <div id='head' />
      <Head>
        <title>Olubukunmi Olufemi</title>
        <meta name="description" content="Olubukunmi Olufemi's Portfolio" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>" />
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
