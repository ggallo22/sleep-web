import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import record from '../data/sleep.json'
import Navbar from '@/comps/navbar'
import HeaderCont from '@/comps/header'
import RevealCont from '@/comps/revealcont'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  console.log(record);
  return (
    <>
      <Head>
        <title>The  Sleep Review</title>
        <meta name="author" content="GG" />
        <meta property="og:title" content="Home Page" />
        <meta property="og:description" content="Sleep Efficiency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>

        <Navbar />

        <RevealCont />



        <p>According to the National Sleep Foundation, high school students ages 14-17 need about eight to 10 hours of sleep each night.
          How do you know how much sleep you need within this range? </p>




        <h2>Consequences of sleep deprivation</h2>
        <ul>
          <li>Daytime sleepiness and fatigue</li>
          <li>Irritability and short temper</li>
          <li>Mood changes</li>
          <li>Trouble coping with stress</li>
          <li>Difficulty focusing, concentrating, and remembering</li>
          <li>Brain fog</li>
        </ul>



      </main>
    </>
  )
}
