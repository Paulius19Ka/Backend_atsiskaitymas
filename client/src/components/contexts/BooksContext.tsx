import { createContext, useEffect, useReducer, useRef } from "react";

import { Book, BooksContextReducerActionTypes, BooksContextType, BooksContextValues, ChildrenProp } from "../../types";

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
  const queryString = useRef('');

  const changeFilter = (values: BooksContextValues) => {
    console.log(values);
    const filterParams = [];
    if(values.publishDate_gte){
      filterParams.push(`filter_publishDate_gte=${values.publishDate_gte}`);
    };
    if(values.publishDate_lte){
      filterParams.push(`filter_publishDate_lte=${values.publishDate_lte}`);
    };
    if(values.inStock){
      filterParams.push(`filter_amountOfCopies_gte=1`);
    }
    queryString.current = filterParams.join('&');
    fetchBooks();
  };

  const fetchBooks = () => {
    fetch(`http://localhost:5500/books?${queryString.current}`)
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
        books,
        changeFilter
      }}
    >
      { children }
    </BooksContext.Provider>
  )
}

export { BooksProvider};
export default BooksContext;