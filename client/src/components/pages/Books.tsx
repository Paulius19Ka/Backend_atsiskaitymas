import { useContext } from "react";
import BooksContext from "../contexts/BooksContext";
import { BooksContextType } from "../../types";
import BookCard from "../UI/molecules/BookCard";
import styled from "styled-components";
import { useFormik } from "formik";

const StyledSection = styled.section`
  padding: 20px;
  
  > div.books{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const Books = () => {

  const formik = useFormik({
    initialValues: {
      publishDate_gte: 1970,
      publishDate_lte: 2000,
      inStock: false
    },
    onSubmit: async (values) => {
      // console.log(values);
      changeFilter(values);
    }
  });

  const { books, changeFilter, changeSort } = useContext(BooksContext) as BooksContextType;

  return (
    <StyledSection>
      <h2>Books</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <span>{formik.values.publishDate_gte}</span>
          <input
            type="range"
            name="publishDate_gte" id="publishDate_gte"
            value={formik.values.publishDate_gte}
            min={1800}
            max={formik.values.publishDate_lte - 1}
            step={1}
            onChange={formik.handleChange}
          />
          <input
            type="range"
            name="publishDate_lte" id="publishDate_lte"
            value={formik.values.publishDate_lte}
            min={formik.values.publishDate_gte + 1}
            max={new Date().getFullYear()}
            step={1}
            onChange={formik.handleChange}
          />
          <span>{formik.values.publishDate_lte}</span>
        </div>
        <div>
          <input
            type="checkbox"
            name="inStock" id="inStock"
            checked={formik.values.inStock}
            onChange={formik.handleChange}
          />
          <label htmlFor="inStock">Only available books</label>
        </div>
        <button type="button" onClick={changeSort} value={`sort_rating=1`}>Rating ASC</button>
        <button type="button" onClick={changeSort} value={`sort_rating=-1`}>Rating DESC</button>
        <input type="submit" value='Filter' />
        <button type="button" onClick={() => {
            formik.setValues({
              publishDate_gte: 1800,
              publishDate_lte: new Date().getFullYear(),
              inStock: false
            });
            changeFilter({
              publishDate_gte: 1800,
              publishDate_lte: new Date().getFullYear(),
              inStock: false
            });
          }}>Reset</button>
      </form>
      <div className="books">
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