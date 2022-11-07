import { FunctionComponent, ReactNode, useState } from 'react'
import styled from 'styled-components'
import noop from '../../../utils/noop'

const Form = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
`

const Label = styled.label`
  min-width: 100%;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
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

const Button = styled.button`
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

  &:hover {
    background: #ff5e5e;
  }
`

export interface Props {}

const NewTodoForm: FunctionComponent<Props> = () => {
  const [value, setValue] = useState('')

  return (
    <Form onSubmit={noop}>
      <Label htmlFor="task">New todo</Label>
      <Input
        value={value}
        onChange={({ target: { value } }) => {
          setValue(value)
        }}
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
      />
      <Button>Add Todo</Button>
    </Form>
  )
}

export default NewTodoForm
