require('dotenv').config()

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { loadFiles } from '@graphql-tools/load-files'
import { mergeResolvers } from '@graphql-tools/merge'
import { AuthenticationClient } from 'auth0'

import TodosAPI from './datasources/todo-api'

const auth0 = new AuthenticationClient({
  domain: process.env.REACT_APP_AUTH0_DOMAIN || '',
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || '',
})

const startServer = async () => {
  const resolverFiles = await loadFiles('./**/*.resolvers.ts')
  const resolvers = mergeResolvers(resolverFiles)
  const server = new ApolloServer({
    typeDefs: await loadFiles('./**/*.graphql'),
    resolvers,
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => {
      const { cache } = server
      const token = req.headers.authorization
      let user = null

      if (token) {
        user = await auth0.getProfile(token)
      }

      const dataSources = {
        todosAPI: new TodosAPI({ cache }),
      }

      return {
        user,
        dataSources,
      }
    },
  })

  console.log(`🚀 Server ready at ${url}`)
}

startServer()
