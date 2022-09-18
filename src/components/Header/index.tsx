import React, { FC } from 'react';
import { Text } from '@chakra-ui/react';

interface Props {
	title: string;
}

const index: FC<Props> = ({ title }) => {
	return (
		<Text
			fontSize="6xl"
			color="teal.400"
			fontWeight={600}
			mb={4}
			textAlign="center">
			{title}
		</Text>
	);
};

export default index;
