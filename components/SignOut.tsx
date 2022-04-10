// @ts-nocheck
import { useMoralis } from 'react-moralis'
import signOutStyle from '../styles/SignOut.module.css'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { Transfer } from './Tansfer'

export const SignOut = () => {
  const { logout, Moralis, user } = useMoralis()
  const [balance, setBalance] = useState(0)
  const fetchBalance = async () => {
    const options = {
      chain: 'mumbai',
    }
    const balance = await Moralis.Web3API.account.getNativeBalance(options)
    console.log(balance)
    setBalance(balance.balance / 10 ** 18)
  }
  useEffect(() => {
    fetchBalance()
  }, [])

  return (
    <div className={signOutStyle.signOutCard}>
      <h4>Welcome To Moralis x Magic!</h4>
      <button className={`${signOutStyle.refresh}`} onClick={fetchBalance}>
        Refresh
      </button>
      <p className={signOutStyle.subHeader}>Details:</p>

      <div className={signOutStyle.detailsDiv}>
        <div>
          <h5>Account:</h5>
          <p>{user.attributes.accounts}</p>
        </div>
        <div>
          <h5>Balance (Matic)</h5>
          <p>{balance} </p>
        </div>
      </div>

      <div className={signOutStyle.fotter}>
        <Transfer />
        <button className={styles.loginButton} onClick={logout}>
          Sign Out
        </button>
      </div>
    </div>
  )
}
