import { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.button`
  padding: 0 1.3rem;
  border: none;
  background: #ff6666;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transform: background 0.2s ease-out;
  font-family: 'Quicksand', sans-serif;
  height: 3rem;

  &:hover {
    background: #ff5e5e;
  }
`

export interface Props extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
}

const Button: FunctionComponent<Props> = ({
  children,
  onClick,
  type = 'button',
}) => {
  return (
    <Container type={type} onClick={onClick}>
      {children}
    </Container>
  )
}

export default Button
