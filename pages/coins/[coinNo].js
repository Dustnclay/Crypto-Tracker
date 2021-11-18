import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    const {coinNo} = router.query
    return(<h1>Coins {coinNo}</h1>)
}

// import { useRouter } from 'next/router'

// const Post = () => {
//   const router = useRouter()
//   const { pid } = router.query

//   return <p>Post: {pid}</p>
// }

// export default Post