import styled from 'styled-components'
import TodoList from './features/TodoList/components/TodoList'

const Layout = styled.div`
  display: block;
  position: relative;
  width: 100%;
`

function App() {
  return (
    <Layout>
      <TodoList />
    </Layout>
  )
}

export default App
