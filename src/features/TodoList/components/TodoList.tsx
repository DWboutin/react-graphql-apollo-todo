import { gql, useQuery } from '@apollo/client'
import { FunctionComponent, ReactNode, useState } from 'react'
import styled from 'styled-components'
import NewTodoForm from '../../NewTodoForm/components/NewTodoForm'
import Todo, { TodoType, Container as TodoContainer } from './Todo'

const Container = styled.div`
  margin: 4rem auto;
  padding: 2rem 3rem 3rem;
  max-width: 500px;
  background: #ff6666;
  color: #fff;
  box-shadow: -20px -20px 0px 0px rgba(100, 100, 100, 0.1);
`

const Title = styled.h1`
  font-weight: normal;
  font-size: 2.6rem;
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  span {
    display: block;
    font-size: 0.8rem;
    margin-bottom: 0.7rem;
    margin-left: 3px;
    margin-top: 0.2rem;
  }
`

const List = styled.div`
  margin-top: 2.6rem;
`

const TodosQuery = gql`
  query Query {
    todos {
      id
      task
      completed
    }
  }
`

type TodoQueryData = {
  todos: TodoType[]
}

const TodoList: FunctionComponent = () => {
  const { loading, error, data, refetch } = useQuery<TodoQueryData>(TodosQuery)
  const todos = data?.todos || []

  const refetchTodos = () => {
    refetch()
  }

  return (
    <Container>
      <Title>
        Todo List <span>A simple React Todo List App</span>
      </Title>
      <List>
        {loading && <TodoContainer>Is laoding...</TodoContainer>}
        {!loading && error && (
          <TodoContainer>
            <>Error: {error}</>
          </TodoContainer>
        )}
        {!loading &&
          todos.length > 0 &&
          todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </List>
      <NewTodoForm refetchTodos={refetchTodos} />
    </Container>
  )
}

export default TodoList
