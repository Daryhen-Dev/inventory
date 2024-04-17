import styled from 'styled-components'
import { BtnSave } from '../molecule/BtnSave'
import { useUserStore } from '../../store/UserStore'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export const LoginTemplate = () => {
    const navigate = useNavigate()
    const { insertUserAdmin } = useUserStore()
    const mutationInsertUser = useMutation({ 
        mutationKey: ["inser user admin"], 
        mutationFn: async () => {
            const p = {
                email: "prueba1@gmail.com",
                pass: "paloma123",
            }
           const dt = await insertUserAdmin(p)
          if (dt) {
            navigate("/")
          }
        }  
    })

    return (
        <Container>
            <BtnSave titulo="Crear cuenta" bgcolor="#fff" funcion={ mutationInsertUser.mutateAsync} />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
`
