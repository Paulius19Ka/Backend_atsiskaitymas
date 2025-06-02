import { createContext, useEffect, useReducer } from "react";

import { Book, BooksContextReducerActionTypes, BooksContextType, ChildrenProp } from "../../types";

const reducer = (state: Book[], action: BooksContextReducerActionTypes) => {
  switch(action.type){
    case 'setBooks':
      return action.data;
    default:
      console.error('There was an error.');
      return state;
  };
};

const BooksContext = createContext<BooksContextType | undefined>(undefined);
const BooksProvider = ({ children }: ChildrenProp) => {

  const [books, dispatch] = useReducer(reducer, []);

  const fetchBooks = () => {
    fetch(`http://localhost:5500/books`)
      .then(res => res.json())
      .then((data: Book[]) => {
        dispatch({
          type: 'setBooks',
          data
        });
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider
      value={{
        books
      }}
    >
      { children }
    </BooksContext.Provider>
  )
}

export { BooksProvider};
export default BooksContext;