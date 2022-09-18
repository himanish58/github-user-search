import React, { FC, memo } from 'react';
import { VStack, Spinner, Text } from '@chakra-ui/react';
import { useSearchUsersQuery } from '../../services/apiSlice';
import UserListItem from './UserListItem';
import { Payload } from '../../types/types';

interface Props {
	payload: Payload;
}

const UserList: FC<Props> = ({ payload }) => {
	const { data, isLoading, isError } = useSearchUsersQuery({
		...payload,
	});

	if (isLoading) {
		return <Spinner color="teal" mt={40} />;
	}

	if (isError) {
		return (
			<Text fontSize="xl" mt={20} color="teal">
				Sorry Something Went Wrong!!
			</Text>
		);
	}

	if (!data?.items.length) {
		return (
			<Text fontSize="xl" mt={20} color="teal">
				Sorry No Result Found!!
			</Text>
		);
	}

	return (
		<VStack spacing={4} maxWidth="600px">
			{data?.items.map(({ login, avatar_url, html_url, id }, index) => (
				<UserListItem
					key={id}
					avatar_url={avatar_url}
					login={login}
					html_url={html_url}
				/>
			))}
		</VStack>
	);
};

export default memo(UserList);
