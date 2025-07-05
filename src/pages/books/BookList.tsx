import React from 'react';
import { useGetBooksQuery, useDeleteBookMutation } from '@/features/books/bookApi';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { Link } from 'react-router-dom';

interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
}

const BookList: React.FC = () => {
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useGetBooksQuery(undefined);
  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation();

  // Extract the actual array of books from response.data.data
  const books: IBook[] = response?.data?.data ?? [];

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteBook(id).unwrap();
        // Optionally show a toast here
      } catch {
        // Optionally handle error
      }
    }
  };

  if (isLoading) {
    return <p>Loading books…</p>;
  }

  if (isError) {
    return <p>Error loading books: {(error as any).message}</p>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold">📚 Book List</h2>
        <Link to="/create-book">
          <Button>Add New Book</Button>
        </Link>
      </div>

      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Copies</TableHead>
              <TableHead>Available</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book._id}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.copies}</TableCell>
                <TableCell>{book.available ? 'Yes' : 'No'}</TableCell>
                <TableCell className="flex gap-2">
                  <Link to={`/edit-book/${book._id}`}>
                    <Button variant="secondary" size="sm">Edit</Button>
                  </Link>
                  <Link to={`/borrow/${book._id}`}>
                    <Button variant="outline" size="sm">Borrow</Button>
                  </Link>
                  <Button
                    variant="destructive"
                    size="sm"
                    disabled={isDeleting}
                    onClick={() => handleDelete(book._id)}
                  >
                    {isDeleting ? 'Deleting…' : 'Delete'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default BookList;
