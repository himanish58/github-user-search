import React, { ChangeEvent, useCallback, memo, MouseEvent } from 'react';
import useClassicState from '../../hooks/useClassicState';
import SearchSection from './SearchSection';
import UserList from './UserList';
import {
	PER_PAGE_COUNT,
	DEFAULT_SORT_OPTION,
	DEFAULT_ORDER_OPTION,
	DEFAULT_PAGE_NUMBER,
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
			page: DEFAULT_PAGE_NUMBER,
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
			page: DEFAULT_PAGE_NUMBER,
		};
		setState({ showResults: true, payload });
	}, [state]);

	const sortingHandler = useCallback(
		(sort: string, order: string): void => {
			const payload: Payload = { ...state.payload, sort, order };
			setState({ payload });
		},
		[state.payload, setState]
	);

	const pageChangeHandler = useCallback(
		(event: MouseEvent<HTMLButtonElement>) => {
			const { id } = event.target as HTMLButtonElement;
			if (id === 'next') {
				const payload: Payload = {
					...state.payload,
					page: state.payload.page + 1,
				};
				setState({ payload });
			} else {
				const payload: Payload = {
					...state.payload,
					page: state.payload.page - 1,
				};
				setState({ payload });
			}
			window.scrollTo({ top: 0, behavior: 'smooth' });
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
				<UserList
					payload={state.payload}
					sortingHandler={sortingHandler}
					pageChangeHandler={pageChangeHandler}
				/>
			)}
		</>
	);
};

export default memo(Index);
