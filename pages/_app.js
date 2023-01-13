import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../app/store'
import Cart from '../features/cart/Cart'
import Head from 'next/head'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  if (Component.getLayout) {
    return <Provider store={store}>

      {Component.getLayout(
        <>
          <Head>
            <title>NextJs Ecommerce</title>
            <meta name='description' content='hello from app.js' />
          </Head>
          <Cart />
          <Component {...pageProps} />
        </>)
      }
    </Provider>
  }

  return <Provider store={store}>
    <Head>
      <title>NextJs Ecommerce</title>
    </Head>
    <Component {...pageProps} />

  </Provider>
}

export default MyApp
