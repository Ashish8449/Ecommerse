import '../styles/globals.scss'

import store from '../store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistStore } from 'redux-persist'
import Head from 'next/head'
let persistor = persistStore(store)
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ShopPay</title>
        <meta name='description' content='Online shoping website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}
