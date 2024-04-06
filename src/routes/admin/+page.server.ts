import { supabase } from '$lib/database/supabaseClient.js';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
	if (!cookies.get('session_id')) {
		throw redirect(301, '/admin/login');
	}

	const { data: members, error } = await supabase.from('members').select();
	if (error || !members) {
		return { status: 500, error: error.message, members: [] };
	}

	return { status: 200, members };
}

export const actions = {
	logout: async ({ cookies }) => {
		cookies.set('session_id', '', { path: '/', maxAge: 0 });
		throw redirect(301, '/admin/login');
	},
	update: async ({ request }) => {
		const data = await request.formData();
		const display_name = data.get('display_name') as string;
		const position = data.get('position') as string;
		const country = data.get('country') as string;
		const about = data.get('about') as string;
		const avatar_url = data.get('avatar_url') as string;
		const joined_at = data.get('joined_at') as string;
		const priority = data.get('priority') as string;
		const uuid = data.get('uuid') as string;

		let numPriority;
		if (priority === null || priority === '') {
			numPriority = null;
		} else {
			numPriority = parseInt(priority);
		}

		const { data: member, error } = await supabase
			.from('members')
			.upsert({ uuid, display_name, position, country, about, avatar_url, priority: numPriority })
			.select();

		if (error || !member) {
			return { status: 500, error: error.message };
		}

		return { status: 200, member };
	},
	delete: async ({ request }) => {
		const data = await request.formData();
		const uuid = data.get('uuid') as string;

		const { error } = await supabase.from('members').delete().eq('uuid', uuid);

		if (error) {
			return { status: 500, error: error.message };
		}

		return { status: 200, error: null };
	}
};
