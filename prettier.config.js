module.exports = {
	arrowParens: "avoid",
	overrides: [
		{
			files: "*.html",
			options: {
				parser: "html",
			},
		},
		{
			files: "*.component.html",
			options: {
				parser: "angular",
			},
		},
	],
};
