import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBorrowBookMutation } from '@/features/borrow/borrowApi';
import { useGetBooksQuery } from '@/features/books/bookApi';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

const BorrowBook = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { data } = useGetBooksQuery(undefined);
  const navigate = useNavigate();
  const [borrowBook] = useBorrowBookMutation();

  const book = data?.data?.find((b: any) => b._id === bookId);

  const [formData, setFormData] = useState({
    quantity: 1,
    dueDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'quantity' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.quantity > book?.copies) {
      alert('Quantity cannot exceed available copies');
      return;
    }
    await borrowBook({ book: bookId!, ...formData });
    alert('Book borrowed successfully!');
    navigate('/borrow-summary');
  };

  if (!book) return <p>Book not found</p>;

  return (
    <Card className="p-4 max-w-md mx-auto mt-6">
      <CardContent>
        <h2 className="text-2xl mb-4 font-semibold">Borrow "{book.title}"</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              type="number"
              id="quantity"
              name="quantity"
              min={1}
              max={book.copies}
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="dueDate">Due Date</Label>
            <Input
              type="date"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">Borrow</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BorrowBook;
