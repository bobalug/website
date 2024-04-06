import { supabase } from '$lib/database/supabaseClient.js';

export async function load({}) {
	const { data: members, error } = await supabase.from('members').select();

	if (error || !members) {
		return {
			status: 500,
			error: error.message
		};
	}

	return {
		status: 200,
		members
	};
}
