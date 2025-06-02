import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Book } from "../../types";
import styled from "styled-components";

const StyledSection = styled.section`
  > div{
    width: 60%;

    > div{
    display: flex;
    gap: 20px;

    width: 100%;

      > div{
        height: 50vh;

        > img{
          height: 100%;
        }
      }
    }
  }
`;

const SpecificBook = () => {

  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5500/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledSection>
      {
        book ?
        <div>
          <h3>{book.title}</h3>
          <div>
            <div>
              <img src={book.imageUrl} alt={book.title} />
            </div>
            <div>
              <p>Published: {book.publishDate}</p>
              <p>Author: {book.author}</p>
              <p>Genres: {book.genres.join(', ')}</p>
              <p>Pages: {book.pages}</p>
              <p>Rating: {book.rating}/5</p>
              <p>Ammount of copies: {book.amountOfCopies}</p>
              <p>{book.description}</p>
              <button onClick={() => navigate(-1)}>Back</button>
            </div>
          </div>
        </div>
        : <p>Loading book...</p>
      }
    </StyledSection>
  );
}
 
export default SpecificBook;