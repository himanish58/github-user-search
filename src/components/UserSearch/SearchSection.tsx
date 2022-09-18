import React, { ChangeEvent, MouseEvent, FC } from 'react';
import { Stack, Input, Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface Props {
	skill: string;
	location: string;
	searchChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
	searchClickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

const SearchSection: FC<Props> = ({
	skill,
	location,
	searchChangeHandler,
	searchClickHandler,
}) => (
	<Stack
		direction={['column', 'row']}
		spacing={4}
		justifyContent="center"
		mb={4}>
		<Input
			id="skill"
			type="text"
			width="auto"
			placeholder="Enter Skill"
			value={skill}
			onChange={searchChangeHandler}
		/>
		<Input
			id="location"
			type="text"
			width="auto"
			placeholder="Enter Location"
			value={location}
			onChange={searchChangeHandler}
		/>
		<Button
			colorScheme="teal"
			size="md"
			leftIcon={<SearchIcon />}
			disabled={!(skill || location)}
			onClick={searchClickHandler}>
			Search
		</Button>
	</Stack>
);

export default SearchSection;
