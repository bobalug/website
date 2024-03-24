import { SUPABASE_ANON_KEY, SUPABASE_URL } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '$lib/types/schema';

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function login(email: string, password: string) {
	const { data: users, error } = await supabase
		.from('auth')
		.select()
		.eq('email', email)
		.eq('password', password);

	if (error || users.length === 0) {
		return { user: null, message: 'Invalid username or password.' };
	}

	return { user: users[0], message: 'Login successful.' };
}
