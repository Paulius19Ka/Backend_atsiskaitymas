import { NavLink } from "react-router";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 100px;
  background-color: black;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0px 20px;

  > img{
    height: 90%;
  }

  > nav{

    > ul{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      
      > li{
        list-style-type: none;

        > a{
          color: white;
          text-decoration: none;
          font-weight: 600;

          &.active{
            color: red;
          }
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src="https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-open-book-logo-png-image_12467719.png" alt="book image" />
      <nav>
        <ul>
          <li><NavLink to=''>Home</NavLink></li>
          <li><NavLink to='/books'>Books</NavLink></li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
 
export default Header;