import styles from '../styles/Home.module.scss'

import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios'
import { useSession } from 'next-auth/react'

export default function Home({ country }) {
  const { data: session } = useSession()
  return (
    <div>
      <Header country={country} />
      <Footer country={country} />
    </div>
  )
}
export async function getServerSideProps() {
  // db.connectDb()
  // let products = await Product.find().sort({ createdAt: -1 }).lean()

  // let data = await axios
  //   .get('https://api.ipregistry.co/?key=r208izz0q0icseks')
  //   .then((res) => {
  //     console.log(res)
  //     return res.data.location.country
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  return {
    props: {
      // products: JSON.parse(JSON.stringify(products)),
      //country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        name: 'India',
        flag: 'https://cdn.ipregistry.co/flags/wikimedia/in.svg',
      },
    },
  }
}
