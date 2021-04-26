import { AppProps } from 'next/app'
import 'animate.css/animate.min.css'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/main.css'

interface SafeHydrateProps {
  children: JSX.Element
}

function SafeHydrate({ children }: SafeHydrateProps) {
  // Must be a div, can't be a fragment 😑🤦‍♂️
  return <div suppressHydrationWarning>{typeof document === 'undefined' ? null : children}</div>
}

function App({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  )
}

export default App
