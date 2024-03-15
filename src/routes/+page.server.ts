import { BEHOLD_URL } from '$env/static/private';
import type { Behold } from '$lib/types/behold';


export async function load() {
	const response: Behold = await fetch(BEHOLD_URL).then((res) => res.json());
	return { behold: response };
}
