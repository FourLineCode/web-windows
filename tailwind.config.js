const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.ts', './src/**/*.tsx'],
	experimental: 'all',
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				gray: colors.trueGray,
				theme: colors.emerald,
			},
		},
	},
	variants: {
		extend: {},
		scrollbar: ['rounded'],
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/line-clamp'),
		require('tailwind-scrollbar'),
	],
};
