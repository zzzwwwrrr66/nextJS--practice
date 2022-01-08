import Head from "next/head";

export default function Seo({title, keywordContent}) {
  return(
    <Head>
      <title>{title} | next.test</title>
      {
        keywordContent & 
        <meta name="keyword" content={keywordContent}></meta>
      }
      
    </Head>
  )
}