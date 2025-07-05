import { api } from '../api/api';

export const borrowApi = api.injectEndpoints({
  endpoints: (build) => ({
    borrowBook: build.mutation({
      query: (data) => ({
        url: '/borrows',  // plural kore dilam
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Book', 'Borrow'],
    }),
    getBorrowSummary: build.query({
      query: () => '/borrows/summary',  // plural kore dilam
      providesTags: ['Borrow'],
    }),
  }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApi;
