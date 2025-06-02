import styled from "styled-components";
import { Book } from "../../../types";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 240px;
  height: 340px;
  background-color: #141414;
  padding: 20px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;

  > span{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > span.description{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: unset;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 75px;
  }
`;

type Props = { book: Book };

const BookCard = ({ book }: Props) => {
  return (
    <StyledDiv>
      <span>{book.title}</span>
      <span className="description">{book.description}</span>
      <span>By: {book.author}</span>
      <span>{book.genres.join(', ')}</span>
      <span>Published: {book.publishDate}</span>
      <button>Read More</button>
    </StyledDiv>
  );
}
 
export default BookCard;