import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    const {coinNo} = router.query
    return(
        <>
        <h1>Coins {coinNo}</h1>
        <h2>coin name</h2>
        <h2>coin logo</h2>
        <p>coin data</p>
        </>
    )
}
