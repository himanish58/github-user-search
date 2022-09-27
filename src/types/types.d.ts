export type Payload = {
	skill: string;
	location: string;
	per_page: number;
	page?: number;
	sort?: string;
	order?: string;
};

export type User = {
	id: number;
	login: string;
	avatar_url: string;
	html_url: string;
};

export type Users = {
	total_count: number;
	incomplete_results: boolean;
	items: User[];
};
