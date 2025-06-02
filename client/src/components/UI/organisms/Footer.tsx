import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 40px;
  background-color: black;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <span>Copyright &copy; Paulius Karbauskas {new Date().getFullYear()}</span>
    </StyledFooter>
  );
}
 
export default Footer;