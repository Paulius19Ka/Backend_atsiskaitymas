import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "../UI/organisms/Header";
import Footer from "../UI/organisms/Footer";

const StyledMain = styled.main`
  min-height: calc(100vh - 40px - 40px);
  background-color: #373043;

  h2{
    margin: 0;
  }

  > section{
    max-width: 80%;
    margin: 0 auto;
    padding: 20px;

    > div.books{
      justify-content: center;
    }

    > p{
      margin: 0;
      padding: 10px 0px;
    }
  }

  @media (max-width: 768px){
    > section{
      max-width: 100%;
    }
  }
`;

const MainOutlet = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
}
 
export default MainOutlet;