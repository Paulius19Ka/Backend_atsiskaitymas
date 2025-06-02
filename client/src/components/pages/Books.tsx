import { useContext } from "react";
import BooksContext from "../contexts/BooksContext";
import { BooksContextType } from "../../types";
import BookCard from "../UI/molecules/BookCard";

const Books = () => {

  const { books } = useContext(BooksContext) as BooksContextType;

  return (
    <section>
      <h2>Books</h2>
      <div>
        {
          books.length > 0 ?
          books.map(book =>
            <BookCard key={book._id} book={book} />
          ) : <p>Loading...</p>
        }
      </div>
    </section>
  );
}
 
export default Books;