module.exports = config => {
	// Copy resources to output dir
	config.addPassthroughCopy('src/assets/');
	config.addPassthroughCopy('src/css/');
	config.addPassthroughCopy('src/fonts/');
	config.addPassthroughCopy('src/images/');
	config.addPassthroughCopy('src/js/');
	config.addPassthroughCopy('src/videos/');
	
	// Custom collections
	// Courses
	config.addCollection(COLLECTIONS.courses, function(collectionApi) {
		return collectionApi
			.getFilteredByGlob("src/data/courses/*.md")
			.sort((a, b) => b.data.order - a.data.order);
    });
	// Experiences
	config.addCollection(COLLECTIONS.experiences, function(collectionApi) {
		return collectionApi
			.getFilteredByGlob("src/data/experiences/*.md")
			.sort((a, b) => b.data.order - a.data.order);
    });
	// Education
	config.addCollection(COLLECTIONS.education, function(collectionApi) {
		return collectionApi
			.getFilteredByGlob("src/data/education/*.md")
			.sort((a, b) => b.data.order - a.data.order);
    });


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

const COLLECTIONS = Object.freeze({ 
	"courses": "courses",
	"experiences": "experiences",
	"education": "education", 
	"projects": "projects" });