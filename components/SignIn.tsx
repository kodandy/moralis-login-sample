import { useMoralis } from 'react-moralis'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export const SignIn = () => {
  const {
    authenticate,
    isAuthenticated,
    authError,
    isAuthenticating,
    Moralis,
  } = useMoralis()

  const [email, setEmail] = useState('')

  const handleMagicLinkLogin = async () => {
    return await magic.auth.loginWithMagicLink({
      email: email,
      redirectURI: 'https://moralis-login-sample.vercel.app/#',
      network: 'mumbai',
    })
  }
  const handleMetamaskLogin = async () => {
    // @ts-ignore
    if (!window.ethereum || !window.ethereum.isMetaMask) return
    return await authenticate()
  }
  return (
    <div className={styles.card}>
      {isAuthenticating && <p className={styles.green}>Authenticating</p>}
      {authError && (
        <p className={styles.error}>{JSON.stringify(authError.message)}</p>
      )}
      {!isAuthenticating && (
        <div className={styles.buttonCard}>
          <input
            type={'email'}
            className={styles.input}
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <button className={styles.loginButton} onClick={handleMetamaskLogin}>
            Login with Metamask
          </button>
          <button className={styles.loginMagic} onClick={handleMagicLinkLogin}>
            Login with Magic Link
          </button>
        </div>
      )}
    </div>
  )
}
