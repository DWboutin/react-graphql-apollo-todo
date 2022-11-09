import { gql, useQuery } from '@apollo/client'
import { useAuth0 } from '@auth0/auth0-react'
import { ApolloError } from 'apollo-errors'
import { FunctionComponent, ReactNode, useState } from 'react'
import styled from 'styled-components'
import LoginButton from '../../AuthButtons/LoginButton'
import LogoutButton from '../../AuthButtons/LogoutButton'
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
  margin-top: 2rem;
`

const AuthSection = styled.div`
  margin-top: 1rem;
  text-align: right;
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
  const { isAuthenticated } = useAuth0()
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
            <div>Error...</div>
            {}
            <div>Error...</div>
          </TodoContainer>
        )}
        {!loading &&
          todos.length > 0 &&
          todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </List>
      {isAuthenticated && <NewTodoForm refetchTodos={refetchTodos} />}
      <AuthSection>
        {!isAuthenticated && <LoginButton>Sign in</LoginButton>}
        {isAuthenticated && <LogoutButton>Sign out</LogoutButton>}
      </AuthSection>
    </Container>
  )
}

export default TodoList
