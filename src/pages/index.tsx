import { sliderUnstyledClasses } from '@mui/base'
import type { NextPage } from 'next'
import List from '../components/List'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <List/>
      </div>
    </>
  )
}

export default Home
