import { SUPABASE_ANON_KEY, SUPABASE_URL } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';
import logins from '$lib/secure/logins.json';
import type { Database } from '$lib/types/schema';

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);

export function login(email: string, password: string) {
	const login = logins.find((login) => login.email === email && login.password === password);

	return login
		? { success: true, message: 'Login successful.' }
		: { success: false, message: 'Invalid username or password.' };
}
