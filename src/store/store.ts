import { configureStore } from '@reduxjs/toolkit';
import { searchUsersApi } from '../services/apiSlice';

export const store = configureStore({
	reducer: {
		[searchUsersApi.reducerPath]: searchUsersApi.reducer,
	},
});
