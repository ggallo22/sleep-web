import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import record from '../data/sleep.json'
import Navbar from '@/comps/navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Survey() {
    console.log(record);
    return (
        <>
            <Head>
                <title>The  Sleep Review - Data</title>
                <meta name="author" content="GG" />
                <meta property="og:title" content="Home Page" />
                <meta property="og:description" content="Sleep Efficiency" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className={styles.survey}>
                <Navbar />
                <img className="sleeppic" src="sleep_image.jpeg"></img>
                {
                    record.map((rec, index) => {
                        return (
                            <div key={index}>
                                <div>{rec.ID}</div>
                                <div>{rec.Gender}</div>
                                <div>{rec.Age}</div>
                                <div>{rec.Bedtime}</div>

                            </div>
                        )
                    })
                }

            </main>
        </>
    )
}
