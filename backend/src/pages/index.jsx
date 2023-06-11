import Head from 'next/head'


import { Header } from '../components/Header'


import  LandingPage  from '../components/LandingPage'


export default function Home() {
  return (
    <>
      <Head>
        <title>Network Nation - Stake For Freedom.</title>
        <meta
          name="description"
          content="Network Nation - Stake for Freedom"
        />
      </Head>
      <main>
      <LandingPage/>

      </main>
    
    </>
  )
}
