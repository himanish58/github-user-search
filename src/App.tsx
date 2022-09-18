import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';

import Header from './components/Header';
import UserSearch from './components/UserSearch';

const App: FC = () => (
	<Flex
		p={5}
		m={0}
		alignItems="center"
		direction="column"
		mb={4}
		maxWidth="90%">
		<Header title="Github User Search" />
		<UserSearch />
	</Flex>
);

export default App;
