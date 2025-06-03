import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router";

const StyledFooter = styled.footer`
  height: 40px;
  background-color: #231c2b;
  padding: 0px 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > div{
    display: flex;
    gap: 10px;

    > a{
      color: #ffffff;
      transition: ease-in-out 0.2s;

      &:hover{
        color: #b6d8ff;
      }
    }
  }

  @media (max-width: 768px){
    > div.address{
      display: none;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <span>Copyright &copy; PK {new Date().getFullYear()}</span>
      <div className="address">
        <span>
          98 Withers Close, Allerton, L18 4UN, UK
        </span>
        <span>|</span>
        <span>
          Mon-Fri: 8 AM - 4 PM
          Sat-Sun: Closed
        </span>
      </div>
      <div>
        <Link to='https://github.com/Paulius19Ka/Backend_atsiskaitymas' >{<GitHubIcon />}</Link>
        <Link to='https://www.facebook.com/' >{<FacebookIcon />}</Link>
        <Link to='https://www.instagram.com/' >{<InstagramIcon />}</Link>
        <Link to='https://bsky.app/' >{<TwitterIcon />}</Link>
      </div>
    </StyledFooter>
  );
}
 
export default Footer;