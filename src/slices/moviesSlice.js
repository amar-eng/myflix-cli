import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  moviesList: [], // Array of movies
  selectedMovie: null, // Details of a single movie
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.moviesList = action.payload;
    },
    updateMovie: (state, action) => {
      const updatedMovie = action.payload;
      const index = state.moviesList.findIndex(
        (movie) => movie.id === updatedMovie.id
      );
      if (index !== -1) {
        state.moviesList[index] = updatedMovie;
      }
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const { setMovies, updateMovie, setSelectedMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
