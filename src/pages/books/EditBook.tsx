import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetBookQuery, useUpdateBookMutation } from '@/features/books/bookApi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

const EditBook = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetBookQuery(id!);
  const [updateBook] = useUpdateBookMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    isbn: '',
    description: '',
    copies: 1,
    available: true,
  });

  useEffect(() => {
    if (data?.data) {
      setFormData({
        ...data.data,
      });
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : name === 'copies' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateBook({ id: id!, data: formData });
    navigate('/books');
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <Card className="p-4 max-w-lg mx-auto mt-6">
      <CardContent>
        <h2 className="text-2xl mb-4 font-semibold">Edit Book</h2>
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
              min={0}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="available"
              name="available"
              checked={formData.available}
              onChange={handleChange}
              className="rounded"
            />
            <Label htmlFor="available">Available</Label>
          </div>
          <Button type="submit" className="w-full">Update Book</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EditBook;
