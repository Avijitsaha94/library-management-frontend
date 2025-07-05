
import { Routes, Route, Navigate } from 'react-router-dom';
import BookList from './pages/books/BookList';
import CreateBook from './pages/books/CreateBook';
import EditBook from './pages/books/EditBook';
import BorrowBook from './pages/borrow/BorrowBook';
import BorrowSummary from './pages/borrow/BorrowSummary';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/books" replace />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/create-book" element={<CreateBook />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
          <Route path="/borrow/:bookId" element={<BorrowBook />} />
          <Route path="/borrow-summary" element={<BorrowSummary />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
