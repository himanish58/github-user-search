import React, { useState } from 'react';

const useClassicState = <T>(initialValue: T): [T, Function] => {
	const [state, setState] = useState({ ...initialValue });
	const setClassicState = (updatedValue: T) => {
		setState((prevState) => ({ ...prevState, ...updatedValue }));
	};
	return [state, setClassicState];
};

export default useClassicState;
