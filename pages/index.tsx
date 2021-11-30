import type { NextPage } from 'next'
import Head from 'next/head'
import { IData } from '../interfaces/IData'

const Home: NextPage = ({ articles }: any) => {
 //console.log(articles)
 return (
  <div>
   <Head>
    <title>TS-NextJS-Sass</title>
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
   </Head>
   Welcome to my Next.JS Demo page created from scratch!
  </div>
 )
}

export default Home

//Remark comment: getStaticProps naming (below) is reserved!

export const getStaticProps = async () => {
 const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
 const articles: Promise<IData[]> = await res
  .json()
  .catch((err) => console.log(err))

 return {
  props: { articles },
 }
}
