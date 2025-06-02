export type ChildrenProp = { children: React.ReactElement };

export type Book = {
  _id: string,
  title: string,
  description: string,
  author: string,
  genres: string[],
  pages: number,
  publishDate: string,
  rating: number,
  amountOfCopies: number,
  imageUrl: string
};

export type BooksContextReducerActionTypes =
{ type: 'setBooks', data: Book[]};

export type BooksContextType = {
  books: Book[]
};