import { useAuth0 } from '@auth0/auth0-react'
import { FunctionComponent, ReactNode } from 'react'

import Button from '../../components/Button/Button'

export interface Props {
  children: ReactNode
}

const LogoutButton: FunctionComponent<Props> = ({ children }) => {
  const { logout } = useAuth0()

  return <Button onClick={() => logout()}>{children}</Button>
}

export default LogoutButton
