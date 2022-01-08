import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Seo from '../../componentes/Seo/';

export default function Movies({params: {params}}) {
  const router = useRouter();
  const [movie, setMovie] = useState(null);
  const [title, id] = params;

  useEffect(()=>{
    console.log(title, id);
  }, [])
  
  return(
    <>
    <Seo title={title} ></Seo>
    <div>Movies detail</div>
    </>
  )
}

export async function getServerSideProps({params}) {
  return {
    props: {
      params,
    }
  };
}
