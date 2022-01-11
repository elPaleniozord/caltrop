import styled from 'styled-components'

const Navbar = () => {
  return (
    <NavWrapper>
      <h3>React-Babylon</h3>
      <a href='https://github.com/elPaleniozord/r3d-boilerplate'>Source Code</a>
      <a href='https://github.com/elPaleniozord/r3d-boilerplate' >Sample</a>
      <a href='https://github.com/elPaleniozord'>Other Projects</a>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  font-size: large;
  background: #ebe3e3;

  h3 {
    flex-grow: 1;
    margin-left: 2rem;
  }

  a {
    margin-right: 2rem;
    font-weight: 600;
    text-decoration: none;
    color: #0059ff;
  }
`

export default Navbar