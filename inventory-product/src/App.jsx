
import styled, { ThemeProvider } from 'styled-components'
import { AuthContextProvider } from './context/AuthContext'
import { MyRoutes } from './routes/routes'
import { createContext, useState } from 'react'
import { Dark, Light } from './styles/themes'
import { Device } from './styles/breackpoints'

export const ThemeContext = createContext()


function App() {
  const [themeUsed, setThemeUsed] = useState('dark')
  const theme = themeUsed === 'light' ? 'light' : 'dark'
  const themeStyle = theme === 'light' ? Light : Dark
  const [sideBarOpen, setSideBarOpen] = useState(false) 
  return (
    <ThemeContext.Provider value={{ theme, setThemeUsed }}>
      <ThemeProvider theme={themeStyle}>
        <Container className={sideBarOpen ? "active" : null }>
          <section className='ContentSideBar'>
            sidebar
          </section>
          <section className='ContentMenuBurger'>
            menu hamburgueza
          </section>
          <section className='ContentRoutes'>
            <MyRoutes />  
          </section>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.bgtotal};
  .ContentSideBar {
    display : none;
  }
  .ContentMenuBurger{
    display: block;
    position: absolute;
    left: 20px;
  }
  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    &.active{
      grid-template-columns: 220px 1fr;
    }
    .ContentSideBar{
      display: initial;
    }
    .ContentMenuBurger{
      display: none;
    }
    .ContentRoutes{
      grid-column: 1;
      width: 100%;
      @media ${Device.tablet} {
        grid-column: 2;
      }
    }
  }
`

export default App
