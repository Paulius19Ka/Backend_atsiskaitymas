import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 40px;
  background-color: black;
  padding: 0px 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > div{
    display: flex;
    gap: 10px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <span>Copyright &copy; PK {new Date().getFullYear()}</span>
      <div>
        <span>
          98 Withers Close, Allerton, L18 4UN, UK
        </span>
        <span>
          Mon-Fri: 8 AM - 4 PM
          Sat-Sun: Closed
        </span>
      </div>
      <div>
        <span>bsky</span>
        <span>FB</span>
        <span>IG</span>
        <span>Twitter</span>
      </div>
    </StyledFooter>
  );
}
 
export default Footer;