import styled from "styled-components";
import { Book } from "../../../types";
import { Link } from "react-router";

const StyledDiv = styled.div<{ $cover: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 240px;
  height: 340px;
  background-color: #141414;
  padding: 20px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;

  background-image: url(${props => props.$cover});
  background-size: cover;
  background-position: center;

  position: relative;

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

  > span, a{
    visibility: hidden;
    position: relative;
    z-index: 2;
    color: white;
    transition: ease-in-out 0.2s;
    opacity: 0;
  }

  > span.title{
    font-weight: bold;
  }

  > a{
    background-color: #b6d8ff;
    color: black;
    text-decoration: none;
    font-weight: bold;
    width: max-content;
    padding: 0px 5px;
    border-radius: 5px;

    &:hover{
      background-color: #449bff;
    }
  }

  > div.darkOverlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #141414dc;
    height: 100%;
    width: 100%;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    z-index: 1;
    transition: ease-in-out 0.2s;
    opacity: 0;
  }

  &:hover{
    /* background-image: unset; */
    
    > span, a{
      visibility: unset;
      opacity: 1;
    }

    > div.darkOverlay{
      opacity: 1;
    }
  }
`;

type Props = { book: Book };

const BookCard = ({ book }: Props) => {
  return (
    <StyledDiv $cover={book.imageUrl}>
      <div className="darkOverlay"></div>
      <span className="title">{book.title}</span>
      <span>Rating: {book.rating}/5</span>
      <span className="description">{book.description}</span>
      <span>By: {book.author}</span>
      <span>{book.genres.join(', ')}</span>
      <span>Published: {book.publishDate}</span>
      <Link to={book._id}>More</Link>
    </StyledDiv>
  );
}
 
export default BookCard;