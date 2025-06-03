import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Book } from "../../types";
import styled from "styled-components";

const StyledSection = styled.section`
  > div{

    > h3{
      font-size: 1.8em;
    }

    > div{
      display: flex;
      gap: 10px;

      width: 100%;

      > div{
        height: 50vh;

        > img{
          height: 100%;
          border-radius: 5px;
        }
      }

      > div.info{
        border: 1px solid #554a67;
        border-radius: 5px;
        padding: 10px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > p{
          margin: 0;
          border-bottom: 1px solid #554a67;
        }

        > button{
          background-color: #b6d8ff;
          color: black;
          text-decoration: none;
          font-weight: bold;
          width: max-content;
          padding: 2px 5px;
          border-radius: 5px;
          transition: ease-in-out 0.2s;
          border: none;

          &:hover{
            background-color: #449bff;
            cursor: pointer;
          }

        }
      }
    }
  }

  @media (max-width: 768px){
    > div{
      
      > div{
        flex-direction: column;

        > div{
          height: unset;

          > img{
            width: 100%;
            height: auto;
          }
        }

        > div.info{
          gap: 20px;
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
            <div className="info">
              <p>Published: {book.publishDate}</p>
              <p>Author: {book.author}</p>
              <p>Genres: {book.genres.join(', ')}</p>
              <p>Pages: {book.pages}</p>
              <p>Rating: {book.rating}/5</p>
              <p>Amount of copies in stock: {book.amountOfCopies}</p>
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