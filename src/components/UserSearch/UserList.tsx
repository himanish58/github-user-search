import React, { FC, memo, MouseEvent } from 'react';
import { VStack, Spinner, Text, HStack, Button } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { useSearchUsersQuery } from '../../services/apiSlice';
import UserListItem from './UserListItem';
import CustomSelect from '../Common/CustomSelect';
import { SORTING_OPTIONS, PER_PAGE_COUNT } from '../../constants';
import { Payload } from '../../types/types';

interface Props {
	payload: Payload;
	sortingHandler: (sort: string, order: string) => void;
	pageChangeHandler: (event: MouseEvent<HTMLButtonElement>) => void;
}

const UserList: FC<Props> = ({
	payload,
	sortingHandler,
	pageChangeHandler,
}) => {
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
			<HStack>
				<Button
					id="previous"
					colorScheme="teal"
					size="md"
					leftIcon={<ArrowLeftIcon />}
					disabled={payload.page === 1}
					onClick={pageChangeHandler}>
					Prev
				</Button>
				<Button
					id="next"
					colorScheme="teal"
					size="md"
					rightIcon={<ArrowRightIcon />}
					disabled={data.total_count <= PER_PAGE_COUNT * payload.page}
					onClick={pageChangeHandler}>
					Next
				</Button>
			</HStack>
		</VStack>
	);
};

export default memo(UserList);
