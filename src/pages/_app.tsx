import { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import 'antd/dist/antd.css'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body,
  #root {
    padding: 0;
    margin: 0;
    font-size: 16px;
  }
`

function CLinkApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, minimal-ui" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default CLinkApp
