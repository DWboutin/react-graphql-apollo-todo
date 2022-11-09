import { isAuthenticatedResolver } from '../resolvers'

const todosResolver = isAuthenticatedResolver.createResolver(
  (_, __, context) => {
    const { dataSources } = context

    return dataSources.todosAPI.getTodoList()
  }
)

const createTodoResolver = isAuthenticatedResolver.createResolver(
  (_, args, context) => {
    const {
      data: { task },
    } = args
    const { dataSources } = context

    return dataSources.todosAPI.createTodo({
      task,
      authorId: 'fakeId',
      completed: false,
    })
  }
)

const resolvers = {
  Query: {
    todos: todosResolver,
  },
  Mutation: {
    createTodo: createTodoResolver,
  },
}

export default resolvers
