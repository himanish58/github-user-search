import React, { FC, memo } from 'react';
import { VStack, Spinner, Text } from '@chakra-ui/react';
import { useSearchUsersQuery } from '../../services/apiSlice';
import usePagination from '../../hooks/usePagination';
import UserListItem from './UserListItem';
import CustomSelect from '../Common/CustomSelect';
import { SORTING_OPTIONS } from '../../constants';
import { Payload } from '../../types/types';

interface Props {
	payload: Payload;
	sortingHandler: (sort: string, order: string) => void;
}

const UserList: FC<Props> = ({ payload, sortingHandler }) => {
	const { data, isLoading, isError } = useSearchUsersQuery({
		...payload,
	});

	const paginationHandler = () => {
		console.log('hello world');
	};

	const paginationRef = usePagination(paginationHandler);

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

	const onChangeHandler = (id: string): void => {
		const [sort, order] = id.split('-');
		sortingHandler(sort, order);
	};

	return (
		<VStack spacing={4} maxWidth="600px">
			<CustomSelect
				onChange={onChangeHandler}
				options={SORTING_OPTIONS}
				disabled={!data?.items?.length}
			/>
			{data?.items.map(({ login, avatar_url, html_url, id }) => (
				<UserListItem
					key={id}
					avatar_url={avatar_url}
					login={login}
					html_url={html_url}
				/>
			))}
			<div ref={paginationRef}></div>
		</VStack>
	);
};

export default memo(UserList);
