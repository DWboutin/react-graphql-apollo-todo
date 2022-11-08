import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { loadFiles } from '@graphql-tools/load-files'
import { mergeResolvers } from '@graphql-tools/merge'
import TodosAPI from './datasources/todo-api'

const startServer = async () => {
  const resolverFiles = await loadFiles('./**/*.resolvers.ts')
  const resolvers = mergeResolvers(resolverFiles)
  const server = new ApolloServer({
    typeDefs: await loadFiles('./**/*.graphql'),
    resolvers,
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => {
      const { cache } = server

      const dataSources = {
        todosAPI: new TodosAPI({ cache }),
      }

      return {
        dataSources,
      }
    },
  })

  console.log(`🚀 Server ready at ${url}`)
}

startServer()
