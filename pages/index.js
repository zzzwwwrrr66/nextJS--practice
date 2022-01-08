import Link from 'next/link'; 
import { useRouter } from 'next/router';

import Head from 'next/head';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Seo from '../componentes/Seo';


//  https://api.themoviedb.org/3/movie/popular?api_key=API_KEY&language=en-US&page=1

export default function Home({results,test}){
  const [movieData, setMovieData] = useState(null);
  const [counter, setCounter] = useState(0);

  const router = useRouter();

  useEffect(()=>{
    console.log(results,test);
    // (async ()=> {
    //   try{
    //     const res = await axios.get(`api/movies?page=1`);
    //     const data = res.data.results;
    //     setMovieData(data);
    //   } catch(err){
    //     console.log('catch', err)
    //   }
    // })();
  },[])

  const plusOnClick = () => {
    setCounter(prev=> ++prev);
  }

  const moveMoviesPage = (id, title) => {
    router.push({
      pathname: `/movies/${title}/${id}`,
    },`/movies/${title}/${id}`);
  }
  return (
    <>
      <Seo title='Home' keywordContent='nextJS, homepage'></Seo>
      <h1>HOME</h1>
      <button onClick={plusOnClick}>plus</button>
      <span>{counter}</span>
      <ul style={{display:'flex', width:'100%', flexWrap:'wrap'}}>
      {
        results?.map(item=>{
          return((
            <li key={item.id} style={{listStyle:'none', flex: '1'}}>
              {/* <Link href={{
                pathname: `/movies/${item.id}`,
                query: {
                  title: item.original_title,
                }
              }}
              as={`/movies/${item.id}`}
              >
              </Link> */}
              <a href='#' onClick={()=>moveMoviesPage(item.id, item.original_title)}>
                  <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} width='150' />
              </a>
              <p>{item.original_title}</p>
            </li>
          ))
        })
      }
      </ul>
    </>
  )
}

// SSR 서버에서 먼저 랜더링 (ex: api를 서버쪽에서 먼저 가져오고싶을때)
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/movies?page=1`);
  const { results } = await res.json();

  if (!results) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      results,
      test: 'wooram'
    }
  };
}