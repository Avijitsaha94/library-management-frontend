import { api } from '../api/api';

export const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => '/books',
      providesTags: ['Book'],
    }),
    getBook: build.query({
      query: (id) => `/books/${id}`,
      providesTags: ['Book'],
    }),
    createBook: build.mutation({
      query: (data) => ({
        url: '/books',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Book'],
    }),
    updateBook: build.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Book'],
    }),
    deleteBook: build.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Book'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
