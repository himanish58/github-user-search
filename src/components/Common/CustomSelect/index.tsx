import React, { FC, useState, memo } from 'react';
import {
	Box,
	Menu,
	MenuButton,
	Button,
	MenuList,
	MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface Option {
	id: string;
	value: string;
}

interface Props {
	disabled?: boolean;
	onChange: (id: string) => void;
	options: Option[];
}

const CustomSelect: FC<Props> = ({ disabled = false, onChange, options }) => {
	const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
	const menuClickHandler = (id: string) => {
		if (id !== selectedOption.id) {
			const selectedIndex = options.findIndex(
				({ id: optionId }) => optionId === id
			);
			setSelectedOption(options[selectedIndex]);
			onChange(id);
		}
	};

	return (
		<Box mb={4}>
			<Menu matchWidth>
				<MenuButton
					as={Button}
					rightIcon={<ChevronDownIcon />}
					disabled={disabled || !options.length}
					backgroundColor="teal"
					color="white">
					{selectedOption.value}
				</MenuButton>
				<MenuList>
					{options.map(({ id, value }) => (
						<MenuItem
							id={id}
							key={id}
							onClick={() => menuClickHandler(id)}
							backgroundColor={id === selectedOption.id ? 'teal.200' : ''}>
							{value}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</Box>
	);
};

export default memo(CustomSelect);
