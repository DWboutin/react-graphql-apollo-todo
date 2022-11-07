import { FunctionComponent } from 'react'
import styled from 'styled-components'

import noop from '../../../utils/noop'

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex-grow: 1;
  border: none;
  background: #f7f1f1;
  padding: 0 1.5em;
  font-size: initial;
  font-family: 'Quicksand', sans-serif;
  height: 3rem;
`

const SaveButton = styled.button`
  padding: 0 1.3rem;
  border: none;
  background: #ff6666;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-left: 5px;
  cursor: pointer;
  transform: background 0.2s ease-out;
  font-family: 'Quicksand', sans-serif;
  height: 3rem;
`

export interface Props {
  task: string
}

const TodoForm: FunctionComponent<Props> = ({ task = '' }) => {
  return (
    <Form onSubmit={noop}>
      <Input onChange={noop} value={task} type="text" />
      <SaveButton>Save</SaveButton>
    </Form>
  )
}

export default TodoForm
