import '../styles/globals.css'
import { ThirdwebProvider } from '@thirdweb-dev/react'

const supportedChainIds = [4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return(
    <ThirdwebProvider supportedChainIds={supportedChainIds} connectors={connectors}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
