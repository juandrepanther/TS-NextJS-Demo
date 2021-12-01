import type { NextPage } from 'next'
import Head from 'next/head'
import { IData } from '../interfaces/IData'
import indexStyles from '../styles/Index.module.scss'
import { capitalize } from '../utils/capitalize'

const Home: NextPage = ({ articles }: any) => {
 const renderData = () => {
  return (
   <ol>
    {articles.map((article: any) => {
     return (
      <div key={article.id} className={indexStyles.item}>
       <li>
        {article.id}. {capitalize(article.title)}
       </li>
       <p>{article.body}</p>
      </div>
     )
    })}
   </ol>
  )
 }

 return (
  <div className={indexStyles.container}>
   <Head>
    <title>TS-NextJS-Sass</title>
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
   </Head>
   <h1>Welcome to my Next.JS Demo page created from scratch! Yo!</h1>
   <h3>
    Fetched Data from jsonPlaceholder with Typescript (generics), async/await
    and Promises
   </h3>
   {renderData()}
  </div>
 )
}

export default Home

//Remark Learning comment: getStaticProps naming (below) is reserved!
//Task was to make types for fetched data using Promise

export const getStaticProps = async () => {
 const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
 const articles: Promise<IData[]> = await res
  .json()
  .catch((err) => console.log(err))

 return {
  props: { articles },
 }
}
