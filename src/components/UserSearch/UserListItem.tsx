import React, { FC } from 'react';
import { HStack, Image, VStack, Text, Button, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

interface Props {
	avatar_url: string;
	login: string;
	html_url: string;
}

const UserListItem: FC<Props> = ({ avatar_url, login, html_url }) => {
	return (
		<HStack
			spacing="4"
			padding={4}
			border="2px solid teal"
			borderRadius={4}
			w="100%">
			<Image
				boxSize="150px"
				objectFit="cover"
				src={avatar_url}
				alt={`${login} Thumbnail`}
				borderRadius={4}
				shadow="md"
			/>
			<VStack align="start" justify="space-between" height="100%">
				<Text fontSize="xl">{`@${login}`}</Text>
				<Link href={html_url} isExternal>
					<Button colorScheme="teal" rightIcon={<ExternalLinkIcon />}>
						Github
					</Button>
				</Link>
			</VStack>
		</HStack>
	);
};

export default UserListItem;
