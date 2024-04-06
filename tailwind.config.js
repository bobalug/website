/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				rethink: ['Rethink Sans', 'sans-serif']
			},
			colors: {
				green: {
					boba: '#0FA691'
				}
			},
			screens: {
				'nav-socials': '835px',
				'members-cols': '775px',
				'nav-headers': '665px'
			},
			boxShadow: {
				glow: '5px 5px 5px -2px rgba(0, 0, 0, 0.3)'
			}
		}
	},
	plugins: []
};
