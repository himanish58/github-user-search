import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Payload, Users } from '../types/types';

export const searchUsersApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com/search/users',
		prepareHeaders: (headers) => {
			headers.set(
				'Authorization',
				(process.env.REACT_APP_GITHUB_AUTH_TOKEN as string) || ''
			);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		searchUsers: builder.query<Users, Payload>({
			query: ({ skill, location, per_page, page = 1 }) =>
				`?q=type:user language:"${skill}" location:"${location}"&per_page=${per_page}&page=${page}`,
		}),
	}),
});

export const { useSearchUsersQuery } = searchUsersApi;
