import Link from 'next/link'
import { Prefetch } from '@layer0/react'
import styles from '../styles/Home.module.css'


export default function CoinInfo (props) {
    var coin = props.coin
    var path = `api/ticker/${coin}`
    console.log()
    return(
        <div className={styles.coin}>
            <Link             
              href={{
              pathname: '/coins/[coinNo]',
              query: { coinNo: coin },
              
              
            }}>

                <Prefetch url={path}>
                    <button>{coin}</button>
                </Prefetch>

                    
            </Link>
        </div>
    )
}