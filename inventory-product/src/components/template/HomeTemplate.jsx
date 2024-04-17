import styled from 'styled-components'
import { BtnSave } from '../molecule/BtnSave'
import { useAuthStore } from '../../store/AuthStore'

export const HomeTemplate = () => {
    const { signOut } = useAuthStore()
    return (
        <Container>
          <BtnSave titulo="Cerrar sesion" bgcolor="#fff" funcion={signOut}/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    background-color: ${({ theme }) => theme.bgtotal};
    color: ${({ theme }) => theme.text};
    width: 100%;
`
