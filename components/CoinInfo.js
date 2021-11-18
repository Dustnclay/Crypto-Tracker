import Link from 'next/link'

export default function CoinInfo (props) {
    return(
        <>
            <Link             
              href={{
              pathname: '/coins/[coinNo]',
              query: { coinNo: props.coin },
            }}>
                <a>{props.coin}</a>
            </Link>
        </>
    )
}