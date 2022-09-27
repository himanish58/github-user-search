export const PER_PAGE_COUNT = 10;

export const SORTING_OPTIONS = [
	{
		id: 'followers-desc',
		value: 'Followers Count (z -> a)',
	},
	{
		id: 'followers-asc',
		value: 'Followers Count (a -> z)',
	},
	{
		id: 'repositories-desc',
		value: 'Repository Count (z -> a)',
	},
	{
		id: 'repositories-asc',
		value: 'Repository Count (a -> z)',
	},
	{
		id: 'joined-desc',
		value: 'Joined On (z -> a)',
	},
	{
		id: 'joined-asc',
		value: 'Joined On (a -> z)',
	},
];

export const [DEFAULT_SORT_OPTION, DEFAULT_ORDER_OPTION] =
	SORTING_OPTIONS[0].id.split('-');
