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
				'nav-socials': '860px',
				'members-cols': '775px',
				'nav-headers': '700px'
			},
			boxShadow: {
				glow: '5px 5px 5px -2px rgba(0, 0, 0, 0.3)'
			},
			dropShadow: {
				glow: ['0 0px 20px rgba(255,255, 255, 0.35)', '0 0px 65px rgba(255, 255,255, 0.2)']
			}
		}
	},
	plugins: []
};
