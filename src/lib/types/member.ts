import { v4 as uuidv4 } from 'uuid';

export type Member = {
	about: string | null;
	avatar_url: string | null;
	country: string | null;
	created_at: string;
	display_name: string;
	joined_at: string | null;
	position: string;
	uuid: string;
	priority: number | null;
};

export function blankMember(): Member {
	return {
		about: '',
		avatar_url: '',
		country: '',
		created_at: '',
		display_name: '',
		joined_at: '',
		position: '',
		priority: null,
		uuid: uuidv4()
	};
}
