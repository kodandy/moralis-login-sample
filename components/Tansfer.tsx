import React from 'react'
import { useMoralis, useWeb3Transfer } from 'react-moralis'
import styles from '../styles/Home.module.css'

export const Transfer = () => {
  const { Moralis } = useMoralis()

  const { fetch, error, isFetching } = useWeb3Transfer({
    amount: Moralis.Units.Token(0.01, 18),
    receiver: process.env.NEXT_PUBLIC_RECEIVER_ADDRESS,
    type: 'erc20',
    contractAddress: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0', // polygon
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
