import { login, supabase } from '$lib/database/supabaseClient.js';
import { redirect } from '@sveltejs/kit';

export async function load() {
	return {};
}

export const actions = {
	login: async ({ request, cookies }) => {
		const form = await request.formData();
		const email = form.get('email') as string;
		const password = form.get('password') as string;

		const { user, message } = await login(email, password);
		if (!user) return { success: false, message };

		const sessionId = Math.random().toString(36).substring(2);
		cookies.set('session_id', sessionId, { path: '/', maxAge: 10800 });

		const { data: session, error } = await supabase
			.from('sessions')
			.select()
			.eq('user_id', user.id);

		if (error || session.length === 0) {
			await supabase.from('sessions').insert({ session_id: sessionId, user_id: user.id });
		} else {
			await supabase.from('sessions').update({ session_id: sessionId }).eq('user_id', user.id);
		}

		throw redirect(301, '/admin?message=Login+successful!');
	}
};
