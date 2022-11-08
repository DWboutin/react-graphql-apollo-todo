import { baseResolver } from '../resolvers'

const todosResolver = baseResolver.createResolver((_, __, context) => {
  const { dataSources } = context

  return dataSources.todosAPI.getTodoList()
})

const createTodoResolver = baseResolver.createResolver((_, args, context) => {
  const {
    data: { task },
  } = args
  const { dataSources } = context

  return dataSources.todosAPI.createTodo({
    task,
    authorId: 'fakeId',
    completed: false,
  })
})

const resolvers = {
  Query: {
    todos: todosResolver,
  },
  Mutation: {
    createTodo: createTodoResolver,
  },
}

export default resolvers
