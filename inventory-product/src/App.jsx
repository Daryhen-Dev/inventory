
import styled, { ThemeProvider } from 'styled-components'

import { MyRoutes } from './routes/routes'
import { createContext, useState } from 'react'
import { Dark, Light } from './styles/themes'
import { Device } from './styles/breackpoints'
import { Sidebar } from './components/organism/sidebar/SideBar'
import { MenuBurger } from './components/organism/MenuBurger'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AuthContextProvider } from './context/AuthContext'
import { useLocation } from 'react-router-dom'
import { Login } from './pages/Login'

export const ThemeContext = createContext()


function App() {
  const [themeUsed, setThemeUsed] = useState('dark')
  const theme = themeUsed === 'light' ? 'light' : 'dark'
  const themeStyle = theme === 'light' ? Light : Dark
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
    <ThemeContext.Provider value={{ theme, setThemeUsed }}>
      <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
          {
            pathname == "/login" ? (
               <Login />
            ) : (
              <Container className={sideBarOpen ? "active" : null}>
              <section className='ContentSideBar'>
                <Sidebar state={sideBarOpen} setState={() => setSideBarOpen(!sideBarOpen)} />
              </section>
              <section className='ContentMenuBurger'>
                <MenuBurger />
              </section>
              <section className='ContentRoutes'>
                <MyRoutes />
              </section>
            </Container>

            )
          }

        </AuthContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </ThemeContext.Provider>
    </>
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
