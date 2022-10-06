import styledEngine from '@mui/styled-engine';
import styles from '../styles/components/Header.module.css';

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <img src='/images/logo.png'/>
      </div>      
    </>
  )
}

export default Header;
