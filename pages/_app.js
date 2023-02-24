import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../app/store'
import Cart from '../components/cart'
import Head from 'next/head'
import Footer from '../components/footer'
import MobileSidebar from '../components/mobile-sidebar'

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
          {/* <MobileSidebar /> */}
          <Cart />
          <Component {...pageProps} />
          {/* <Footer /> */}
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
