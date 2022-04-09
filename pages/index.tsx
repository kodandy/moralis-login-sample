import type { NextPage } from 'next'
import { SignIn } from '../components/SignIn'
import { SignOut } from '../components/SignOut'
import styles from '../styles/Home.module.css'
import { useMoralis } from 'react-moralis'

const Home: NextPage = () => {
  const { isAuthenticated } = useMoralis()

  return (
    <div className={styles.container}>
      <div className={styles.backgroundParent}>
        {isAuthenticated ? <SignOut /> : <SignIn />}
      </div>
    </div>
  )
}

export default Home
