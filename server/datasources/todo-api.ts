import { RESTDataSource } from '@apollo/datasource-rest'

export interface Todo {
  id: string
  task: string
  authorId: string
  completed: boolean
}

class TodosAPI extends RESTDataSource {
  override baseURL = 'http://localhost:3000/'

  async getTodoList(): Promise<Todo[]> {
    return this.get<Todo[]>(`todos`)
  }

  async createTodo(todo: any): Promise<Todo> {
    return this.post<Todo>(`todos`, { body: todo })
  }
}

export default TodosAPI
