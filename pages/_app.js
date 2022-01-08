import Link from 'next/link';
import Layout from '../componentes/Layout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

// export default MyApp
