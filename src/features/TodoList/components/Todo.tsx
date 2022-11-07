import { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'
import noop from '../../../utils/noop'
import TodoForm from './TodoForm'

export interface TodoProps {
  completed?: boolean
}

const Container = styled.div`
  display: flex;
  margin: 0 -3rem 4px;
  padding: 1.1rem 3rem;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
`

const Name = styled.div<TodoProps>`
  position: relative;
  transition: opacity 0.4s linear;

  ${({ completed }) =>
    completed &&
    `
    opacity: 0.6;
    
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: -0.5rem;
      display: block;
      width: 0%;
      height: 2px;
      background: #fff;
      animation: strikeitem 0.5s ease-out 0s forwards;
    }
  `}

  @keyframes strikeitem {
    to {
      width: calc(100% + 1rem);
    }
  }
`

const Buttons = styled.div`
  flex-shrink: 0;
  padding-left: 0.7em;
`

const Button = styled.button`
  border: none;
  font-size: 1em;
  margin: 0.4em;
  background: none;
  -webkit-appearance: none;
  cursor: pointer;
  color: #fff;

  &:hover {
    color: #ff5e5e;
  }
`

export interface TodoType {
  id: string
  task: string
  completed: boolean
}

export interface Props {
  todo: TodoType
}

const Todo: FunctionComponent<Props> = ({
  todo: { task, completed, isEditing },
}) => {
  return (
    <Container>
      {!isEditing && (
        <>
          <Name completed={completed}>{task}</Name>
          <Buttons>
            <Button onClick={noop}>
              <i className="fas fa-pen" />
            </Button>
            <Button onClick={noop}>
              <i className="fas fa-trash" />
            </Button>
          </Buttons>
        </>
      )}
      {isEditing && <TodoForm task={task} />}
    </Container>
  )
}

export default Todo
