import '../styles/globals.scss'
import {Provider as NextAuthProvider} from "next-auth/client"

function MyApp({ Component, pageProps }) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Component {...pageProps} />
    </NextAuthProvider>

  )
}

export default MyApp
