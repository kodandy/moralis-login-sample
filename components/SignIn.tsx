import { useMoralis } from 'react-moralis'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export const SignIn = () => {
  const { authenticate, isAuthenticated, authError, isAuthenticating } =
    useMoralis()

  const [email, setEmail] = useState('')

  const handleCustomLogin = async () => {
    // @ts-ignore
    if (window.ethereum && window.ethereum.isMetaMask) {
      return await authenticate()
    }
    return await authenticate({
      provider: 'magicLink',
      email: email,
      apiKey: process.env.NEXT_PUBLIC_MAGIC_API_KEY,
      network: 'mumbai',
    })
  }

  return (
    <div className={styles.card}>
      {isAuthenticating && <p className={styles.green}>Authenticating</p>}
      {authError && (
        <p className={styles.error}>{JSON.stringify(authError.message)}</p>
      )}
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

        <button className={styles.loginButton} onClick={handleCustomLogin}>
          Login with Magic Link
        </button>
      </div>
    </div>
  )
}
