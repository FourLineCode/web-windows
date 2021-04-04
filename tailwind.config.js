const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.ts', './src/**/*.tsx'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				gray: colors.trueGray,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
