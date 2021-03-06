import Head from 'next/head';

import Feed from '../components/feed';
import Sidebar from '../components/sidebar';
import Story from '../components/story';
import SuportBar from '../components/suportbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>

      <main id="containerApplication">
        <Sidebar />
        <section id="main-fixed">
          <SuportBar />
          <Story />
          <Feed />
        </section>
      </main>
    </div>
  )
}
