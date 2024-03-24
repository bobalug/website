import { supabase } from '$lib/database/supabaseClient';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/admin') && !event.url.pathname.startsWith('/admin/login')) {
		const cookies = event.cookies;
		const sessionId = cookies.get('session_id');
		if (!sessionId) {
			throw redirect(301, '/admin/login?no_session_in_cookies');
		}

		const { data: session, error: err } = await supabase
			.from('sessions')
			.select()
			.eq('session_id', sessionId);

		if (err || !session) {
			throw redirect(301, '/admin/login?no_session_in_db');
		}
	}

	return resolve(event);
};
