import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import ApolloProviderWithAuth from './ApolloProviderWithAuth'

import App from './App'
import GlobalStyle from './theme/GlobalStyle'

const domain: string = process.env.REACT_APP_AUTH0_DOMAIN || ''
const clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID || ''

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <ApolloProviderWithAuth>
        <App />
      </ApolloProviderWithAuth>
    </Auth0Provider>
  </React.StrictMode>
)
