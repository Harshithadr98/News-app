import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/header';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (

    < div className='pageContainer'>
      <Header />
      < div className={styles.container}>
        < div className={styles.main}>
          <h1>News all over the world</h1>
          <h3>Read the latest news on time all over the world.</h3>
        </div>

      </div>
    </div>);

}
