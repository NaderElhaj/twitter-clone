import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
      </Head>
      <Sidebar />
      <Feed />
      <Widgets />   

      

    </div>
  )
}

export default Home
