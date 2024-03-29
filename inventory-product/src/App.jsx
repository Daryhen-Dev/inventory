
import styled, { ThemeProvider } from 'styled-components'
import { AuthContextProvider } from './context/AuthContext'
import { MyRoutes } from './routes/routes'
import { createContext, useState } from 'react'
import { Dark, Light } from './styles/themes'

export const ThemeContext = createContext()


function App() {
  const [themeUsed, setThemeUsed] = useState('dark')
  const theme = themeUsed === 'light' ? 'light' : 'dark'
  const themeStyle = theme === 'light' ? Light : Dark
  return (
    <ThemeContext.Provider value={{ theme, setThemeUsed }}>
      <ThemeProvider theme={themeStyle}>
        <Container>
          <section className='ContentSideBar'>

          </section>
          <section className='ContentMenuBurger'>
            
          </section>
          <section className='ContentRoutes'>
            
            </section>
          <MyRoutes />
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.bgtotal};
`

export default App
