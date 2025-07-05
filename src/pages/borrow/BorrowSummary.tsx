import { useGetBorrowSummaryQuery } from '@/features/borrow/borrowApi';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from '@/components/ui/table';

const BorrowSummary = () => {
  const { data, isLoading } = useGetBorrowSummaryQuery(undefined);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Card className="p-4 max-w-4xl mx-auto mt-6">
      <CardContent>
        <h2 className="text-2xl font-semibold mb-4">📊 Borrow Summary</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Book Title</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Total Quantity Borrowed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((summary: any) => (
              <TableRow key={summary.book.isbn}>
                <TableCell>{summary.book.title}</TableCell>
                <TableCell>{summary.book.isbn}</TableCell>
                <TableCell>{summary.totalQuantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default BorrowSummary;
