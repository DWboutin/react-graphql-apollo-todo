import { useAuth0 } from '@auth0/auth0-react'
import { FunctionComponent, ReactNode } from 'react'
import Button from '../../components/Button/Button'

export interface Props {
  children: ReactNode
}

const LoginButton: FunctionComponent<Props> = ({ children }) => {
  const { loginWithRedirect } = useAuth0()

  return <Button onClick={() => loginWithRedirect()}>{children}</Button>
}

export default LoginButton
