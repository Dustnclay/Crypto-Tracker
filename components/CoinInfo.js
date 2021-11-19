import Link from 'next/link'
import { Prefetch } from '@layer0/react'

export default function CoinInfo (props) {
    var coin = props.coin
    var path = `api/ticker/${coin}`
    return(
        <>
            <Link             
              href={{
              pathname: '/coins/[coinNo]',
              query: { coinNo: coin },
              
            }}>

                <Prefetch url={path}>
                    <button>{coin}</button>
                </Prefetch>

                    
            </Link>
        </>
    )
}