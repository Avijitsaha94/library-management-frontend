import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateBookMutation } from '@/features/books/bookApi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

const CreateBook = () => {
  const navigate = useNavigate();
  const [createBook] = useCreateBookMutation();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    isbn: '',
    description: '',
    copies: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'copies' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createBook(formData);
    navigate('/books');
  };

  return (
    <Card className="p-4 max-w-lg mx-auto mt-6">
      <CardContent>
        <h2 className="text-2xl mb-4 font-semibold">Add New Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {['title', 'author', 'genre', 'isbn', 'description'].map((field) => (
            <div key={field}>
              <Label htmlFor={field} className="capitalize">{field}</Label>
              <Input
                id={field}
                name={field}
                value={(formData as any)[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <div>
            <Label htmlFor="copies">Copies</Label>
            <Input
              type="number"
              id="copies"
              name="copies"
              value={formData.copies}
              min={1}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">Create Book</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateBook;
