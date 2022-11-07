import { FunctionComponent, ReactNode, useState } from 'react'
import styled from 'styled-components'
import NewTodoForm from '../../NewTodoForm/components/NewTodoForm'
import Todo, { TodoType } from './Todo'

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

const TodoList: FunctionComponent = () => {
  const todos: TodoType[] = [
    { id: '1', task: 'task 1', completed: false },
    { id: '2', task: 'task 2', completed: true },
  ]

  return (
    <Container>
      <Title>
        Todo List <span>A simple React Todo List App</span>
      </Title>
      <List>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </List>
      <NewTodoForm />
    </Container>
  )
}

export default TodoList
