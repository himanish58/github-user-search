import React, { ChangeEvent, useCallback, memo } from 'react';
import UseClassicState from '../../hooks/useClassicState';
import SearchSection from './SearchSection';
import UserList from './UserList';
import { PER_PAGE_COUNT } from '../../constants';

const Index = () => {
	const [state, setState] = UseClassicState({
		skill: '',
		location: '',
		showResults: false,
		payload: {
			skill: '',
			location: '',
			per_page: PER_PAGE_COUNT,
		},
	});

	const inputChangeHandler = useCallback(
		(event: ChangeEvent<HTMLInputElement>): void => {
			const { id, value } = event.target;
			setState({ [id]: value });
		},
		[]
	);

	const searchClickHandler = useCallback(() => {
		const payload = {
			...state.payload,
			skill: state.skill,
			location: state.location,
		};
		setState({ showResults: true, payload });
	}, []);

	return (
		<>
			<SearchSection
				skill={state.skill}
				location={state.location}
				searchClickHandler={searchClickHandler}
				searchChangeHandler={inputChangeHandler}
			/>
			{state.showResults && <UserList payload={state.payload} />}
		</>
	);
};

export default memo(Index);
