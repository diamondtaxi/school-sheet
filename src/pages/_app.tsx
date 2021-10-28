import type { AppProps } from 'next/app'

import "bootstrap/dist/css/bootstrap.css"

import '../styles/globals.css'

function SchoolSheet({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default SchoolSheet
