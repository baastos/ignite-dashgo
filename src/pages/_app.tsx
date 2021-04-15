import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SideBarContextProvider } from '../hooks/SideBarDrawerContext'
import { makeServer } from '../services/mirage'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from '../services/queryClient'

function MyApp({ Component, pageProps }: AppProps) {


  if (process.env.NODE_ENV === 'development') {
    makeServer();
  }
  return (
    <QueryClientProvider client={queryClient} >
      <ChakraProvider theme={theme}>
        <SideBarContextProvider>
          <Component {...pageProps} />

        </SideBarContextProvider>

      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>

  )
}

export default MyApp
