import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from '../styles/Nav.module.css';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className='nav'>
      <Link href='/' >
        <a>home</a>
      </Link>
      <Link href='/about'>
        <a>about</a>
      </Link>
      <style jsx>{`
        .nav {
          display: flex;
          justify-content: space-evenly;
          max-width: 800px;
          width: 100%;
          margin: 0 auto;
          background-color: tomato;
        }
        a {
          color: yellow;
        }
      `}
      </style>
    </nav>
  )
}