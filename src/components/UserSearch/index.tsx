import React, { ChangeEvent, useCallback, memo } from 'react';
import useClassicState from '../../hooks/useClassicState';
import SearchSection from './SearchSection';
import UserList from './UserList';
import {
	PER_PAGE_COUNT,
	DEFAULT_SORT_OPTION,
	DEFAULT_ORDER_OPTION,
} from '../../constants';
import { Payload } from '../../types/types';

const Index = () => {
	const [state, setState] = useClassicState({
		skill: '',
		location: '',
		showResults: false,
		payload: {
			skill: '',
			location: '',
			per_page: PER_PAGE_COUNT,
			sort: DEFAULT_SORT_OPTION,
			order: DEFAULT_ORDER_OPTION,
		},
	});

	const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		const { id, value } = event.target;
		setState({ [id]: value });
	};

	const searchClickHandler = useCallback(() => {
		const payload = {
			...state.payload,
			skill: state.skill,
			location: state.location,
		};
		setState({ showResults: true, payload });
	}, [state]);

	const sortingHandler = useCallback(
		(sort: string, order: string): void => {
			const payload: Payload = { ...state.payload };
			payload.sort = sort;
			payload.order = order;
			setState({ payload });
		},
		[state.payload, setState]
	);

	return (
		<>
			<SearchSection
				skill={state.skill}
				location={state.location}
				searchClickHandler={searchClickHandler}
				searchChangeHandler={inputChangeHandler}
			/>
			{state.showResults && (
				<UserList payload={state.payload} sortingHandler={sortingHandler} />
			)}
		</>
	);
};

export default memo(Index);
