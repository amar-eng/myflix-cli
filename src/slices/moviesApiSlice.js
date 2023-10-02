import { MOVIES_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => {
        return {
          url: MOVIES_URL,
        };
      },
    }),

    getMovieById: builder.query({
      query: (movieId) => {
        return {
          url: `/movies/${movieId}`,
        };
      },
    }),

    updateMovie: builder.mutation({
      query: (updatedMovie) => {
        return {
          url: `${MOVIES_URL}/update/${updatedMovie.id}`,
          method: 'PUT',
          body: updatedMovie,
        };
      },
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useUpdateMovieMutation,
} = moviesApiSlice;
