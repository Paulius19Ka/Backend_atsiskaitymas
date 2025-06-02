import { NavLink } from "react-router";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to=''>Home</NavLink></li>
          <li><NavLink to='/books'>Books</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
 
export default Header;