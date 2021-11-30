module.exports = config => {
	// Copy resources to output dir
	config.addPassthroughCopy( 'src/assets/' );
	config.addPassthroughCopy( 'src/css/' );
	config.addPassthroughCopy( 'src/fonts/' );
	config.addPassthroughCopy( 'src/images/' );
	config.addPassthroughCopy( 'src/js/' );
	config.addPassthroughCopy( 'src/videos/' );

	// Custom collections
	const addCollection = (collection, filesPathGlob) => {
		config.addCollection( collection, function ( collectionApi ) {
			return collectionApi
				.getFilteredByGlob( filesPathGlob )
				.sort( ( a, b ) => b.data.order - a.data.order );
		} );
	};

	addCollection(COLLECTIONS.courses, "src/data/courses/*.md");
	addCollection(COLLECTIONS.experiences, "src/data/experiences/*.md");
	addCollection(COLLECTIONS.education, "src/data/education/*.md");
	addCollection(COLLECTIONS.achievements, "src/data/achievements/*.md");



	return {
		//templateFormats: ['md', 'njk', 'html', 'liquid'],
		dir: {
			input: 'src',
			output: '_site',
			//layouts: '_includes/layouts',
			//includes: '_includes',
			//data: 'settings',
		},
	};
}

const COLLECTIONS = Object.freeze( {
	"courses": "courses",
	"experiences": "experiences",
	"education": "education",
	"projects": "projects",
	"achievements": "achievements"
} );