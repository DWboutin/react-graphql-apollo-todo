import { FunctionComponent, ReactNode, useMemo } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useAuth0 } from '@auth0/auth0-react'

export interface Props {
  children: ReactNode
}

const ApolloProviderWithAuth: FunctionComponent<Props> = ({ children }) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  const client = useMemo(() => {
    const httpLink = new HttpLink({
      uri: process.env.REACT_APP_GRAPHQL_URI,
    })

    const authLink = setContext(async (_, { headers }) => {
      let token = ''

      if (isAuthenticated) {
        token = await getAccessTokenSilently()
      }

      return {
        headers: {
          ...headers,
          authorization: token,
        },
      }
    })

    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    })
  }, [isAuthenticated])

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloProviderWithAuth
