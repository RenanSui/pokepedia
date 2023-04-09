/** @type {import('tailwindcss').Config} */
module.exports = {
	plugins: [require('prettier-plugin-tailwindcss')],
	trailingComma: 'es5',
	endOfLine: 'auto',
	tabWidth: 4,
	semi: true,
	singleAttributePerLine: false,
	singleQuote: true,
	printWidth: 80,
	htmlWhitespaceSensitivity: 'ignore',
	useTabs: true,
	bracketSpacing: true,
};
