import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import moviesSliceReducer from './slices/moviesSlice';
import { moviesApiSlice } from './slices/moviesApiSlice'; // Assuming you've exported it

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [moviesApiSlice.reducerPath]: moviesApiSlice.reducer, // Add this line
    movies: moviesSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(moviesApiSlice.middleware), // Add middleware for moviesApiSlice
  devTools: true,
});

export default store;
