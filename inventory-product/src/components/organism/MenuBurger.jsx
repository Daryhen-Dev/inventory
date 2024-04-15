import styled from 'styled-components'

export const MenuBurger = () => {

    return (
        <Container>
            <NavBar>
                <section>
                    <BurgerMenu>
                        <input type="checkbox" id="checkbox" />
                        <label for="checkbox" class="toggle">
                            <div class="bars" id="bar1"></div>
                            <div class="bars" id="bar2"></div>
                            <div class="bars" id="bar3"></div>
                        </label>
                    </BurgerMenu>
                </section>
            </NavBar>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${({ theme }) => theme.body};
`
const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
`
const BurgerMenu = styled.span`
position: fixed;
z-index: 100;
top: 2rem;
    #checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: .5s;
}

.bars {
  width: 100%;
  height: 4px;
  background-color: rgb(176, 92, 255);
  border-radius: 4px;
}

#bar2 {
  transition-duration: .8s;
}

#bar1,#bar3 {
  width: 70%;
}

#checkbox:checked + .toggle .bars {
  position: absolute;
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar2 {
  transform: scaleX(0);
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar1 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar3 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: .5s;
}

#checkbox:checked + .toggle {
  transition-duration: .5s;
  transform: rotate(180deg);
}
`