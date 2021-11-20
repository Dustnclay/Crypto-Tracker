import { useRouter } from 'next/router'

function Home(props) {
    const router = useRouter()
    const {coinNo} = router.query

    // T: 'X:DOGEUSD', The exchange symbol that this item is traded under.
    // v: 287482677.35456765, The trading volume of the symbol in the given time period.
    // vw: 0.2281,The volume weighted average price.
    // o: 0.2218, The open price for the symbol in the given time period.
    // c: 0.2337, The close price for the symbol in the given time period.
    // h: 0.2377, The highest price for the symbol in the given time period.
    // l: 0.21652, The lowest price for the symbol in the given time period.
    // t: 1637366399999, The Unix Msec timestamp for the start of the aggregate window.
    // n: 105969

    console.log('results in [coinNo]',props)
    return(
        <>
            <div>
                 <h1>Coins {coinNo}</h1>
                <h2>Open price :{props.results[0].o}</h2>
                <h2>Daily high :{props.results[0].h}</h2>
                <h2>Daily low :{props.results[0].l}</h2>
                <h2>Close price :{props.results[0].c}</h2>

            </div>

        </>
    )
}
Home.getInitialProps = async function(ctx) {
    var Host_url = process.env.HOST_URL || window.location.origin
    const data = await fetch(`${Host_url}/api/ticker/${ctx.query.coinNo}`)
    .then(res => res.json())
    // .catch(err => {console.log(err)});
    return data
  }

  export default Home