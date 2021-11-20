import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CoinInfo from '../components/CoinInfo'

function Home({props}) {
  console.log('props in intial props',props)
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Crypto Tracker
        </h1>

       <h2>Heres a list of {props.data.queryCount} Cryptos to keep an eye on</h2>

       {props && (<div >
        {props.data.results && props.data.results.map((crypto,index) => {
          return(
            <div key={index}>
              <CoinInfo coin={crypto.T}/>
            </div>          
          )

        })}</div>)}

        </main>
    </div>
  )
}

Home.getInitialProps = async () => {
  var api_key = process.env.API_KEY || 'eyNjX12P8QKZfyccYamQTb1TCYOnQ49u'

  const res = await fetch(`https://api.polygon.io/v2/aggs/grouped/locale/global/market/crypto/2021-11-17?adjusted=true&apiKey=${api_key}`)
  const data = await res.json()

  return {
    props: { data }
  }
}

export default Home