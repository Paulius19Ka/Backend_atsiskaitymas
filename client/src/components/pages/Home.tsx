import styled from "styled-components";

const StyledImage = styled.img`
  width: 50vw;
  height: auto;
  display: block;
  margin: 0 auto;
  filter: invert(100%);

  @media (max-width: 768px){
    width: 80vw;
  }
`;

const Home = () => {
  return (
    <section>
      <StyledImage src="https://cdn-icons-png.freepik.com/512/13969/13969942.png" alt="an image of a book" />
      <p>
        Welcome to BookVault, your go-to site for discovering and exploring books. Whether you're looking for a new read or want to learn more about your favorite authors, we've got you covered.
      </p>
      <p>
        Browse Thousands of Books - From classics to bestsellers, find books that match your interests.
      </p>
      <p>
        Ratings & Reviews - See what other readers think, share your own reviews, and help others pick their next great read.
      </p>
    </section>
  );
}
 
export default Home;