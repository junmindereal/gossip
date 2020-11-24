import Head from 'next/head'
import { db } from '@/lib/firebase'

export default function Home () {
  console.log(db.collection('chats'))
  return (
    <div>
      <Head>
        <title>Gossip</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h2 className='text-xl text-blue-500 mx-auto'>NextJS + Tailwind</h2>
      </main>

    </div>
  )
}
