import { useContext } from "react";
import BooksContext from "../contexts/BooksContext";
import { BooksContextType } from "../../types";
import BookCard from "../UI/molecules/BookCard";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: 20px;
  
  > div{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const Books = () => {

  const { books } = useContext(BooksContext) as BooksContextType;

  return (
    <StyledSection>
      <h2>Books</h2>
      <div>
        {
          books.length > 0 ?
          books.map(book =>
            <BookCard key={book._id} book={book} />
          ) : <p>Loading...</p>
        }
      </div>
    </StyledSection>
  );
}
 
export default Books;