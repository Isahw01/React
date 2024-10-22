import {Link, NavLink} from 'react-router-dom'
import "./NavBar.module.css"

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink to="/historia">Historia</NavLink>
      <NavLink to="/cadastro">Cadastro</NavLink>



      <footer></footer>
      
    </nav>

    
  )
}

export default NavBar      