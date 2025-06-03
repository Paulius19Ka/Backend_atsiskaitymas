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
    gap: 15px;
  }

  > form{
    padding: 20px 0px;
    padding-bottom: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;

    > div{
      display: flex;
      align-items: center;

      > span, label{
        color: white;
      }

      > input.slider{
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 10px;
        background: #b6d8ff;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;

        &:hover{
          opacity: 1;
        }
      }

      > input.slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        border-radius: 50px;
        width: 17px;
        height: 17px;
        background: #449bff;
        cursor: pointer;
      }

      > input.checkbox{
        -webkit-appearance: none;
        appearance: none;
        /* position: absolute; */
        top: 0;
        left: 0;
        height: 17px;
        width: 17px;
        background-color: #b6d8ff;

        &:hover{
          background-color: #449bff;
        }

        &:checked{
          transform: rotate(45deg);
          background-color: #00d707;
          border-radius: 3px;
        }
      }
    }

    > button, input{
      background-color: #b6d8ff;
      color: black;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      padding: 2px 5px;
      transition: ease-in-out 0.2s;

      &:hover{
        background-color: #449bff;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px){
    padding: 0;
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

  const sliderConstraints = (e: React.ChangeEvent<HTMLInputElement>) => {
    // prevent overlapping slider values, gte always one year lower than lte and lte
    const { name, value } = e.target;
    // const numericValue = Number(value);
    if(name === "publishDate_gte"){
      formik.setFieldValue("publishDate_gte", Math.min(Number(value), formik.values.publishDate_lte - 1));
    } else if(name === "publishDate_lte"){
      formik.setFieldValue("publishDate_lte", Math.max(Number(value), formik.values.publishDate_gte + 1));
    };
  };

  const { books, changeFilter, changeSort, loading } = useContext(BooksContext) as BooksContextType;

  return (
    <StyledSection>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <span>{formik.values.publishDate_gte}</span>
          <input
            className="slider"
            type="range"
            name="publishDate_gte" id="publishDate_gte"
            value={formik.values.publishDate_gte}
            min={1800}
            max={new Date().getFullYear()}
            step={1}
            onChange={sliderConstraints}
          />
          <input
            className="slider"
            type="range"
            name="publishDate_lte" id="publishDate_lte"
            value={formik.values.publishDate_lte}
            min={1800}
            max={new Date().getFullYear()}
            step={1}
            onChange={sliderConstraints}
          />
          <span>{formik.values.publishDate_lte}</span>
        </div>
        <div>
          <input
            className="checkbox"
            type="checkbox"
            name="inStock" id="inStock"
            checked={formik.values.inStock}
            onChange={formik.handleChange}
          />
          <label htmlFor="inStock">Available</label>
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
          loading ? <p>Loading books...</p> :
          books.length > 0 ?
          books.map(book =>
            <BookCard key={book._id} book={book} />
          ) : <p>No books were found...</p>
        }
      </div>
    </StyledSection>
  );
}
 
export default Books;