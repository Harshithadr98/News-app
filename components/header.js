import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

export const Header = () => {
 const router = useRouter();

 return(
     <div className={styles.main}>
         <div onClick={()=> router.push('/')}>Home</div>
         <div onClick={()=> router.push('/topNews/1')}>Top News</div>
     </div>
 );

};

