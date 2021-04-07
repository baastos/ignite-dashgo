import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SiderBarContextProvider } from '../hooks/SideBarDrawerContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SiderBarContextProvider>
        <Component {...pageProps} />

      </SiderBarContextProvider>

    </ChakraProvider>
  )
}

export default MyApp
