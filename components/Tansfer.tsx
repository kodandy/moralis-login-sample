import React from 'react'
import { useMoralis, useWeb3Transfer } from 'react-moralis'
import styles from '../styles/Home.module.css'

export const Transfer = () => {
  const { Moralis } = useMoralis()

  const { fetch, error, isFetching } = useWeb3Transfer({
    amount: Moralis.Units.Token(0.01, 18),
    receiver: '',
    type: 'erc20',
  })

  return (
    // Use your custom error component to show errors
    <div>
      {error && <p>{error}</p>}
      {isFetching && <p>{isFetching}</p>}
      <button
        className={styles.loginButton}
        onClick={() => fetch()}
        disabled={isFetching}
      >
        Transfer
      </button>
    </div>
  )
}
