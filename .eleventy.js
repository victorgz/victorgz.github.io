module.exports = config => {
	// Copy resources to output dir
	config.addPassthroughCopy('src/assets/');
	config.addPassthroughCopy('src/css/');
	config.addPassthroughCopy('src/fonts/');
	config.addPassthroughCopy('src/images/');
	config.addPassthroughCopy('src/js/');
	config.addPassthroughCopy('src/videos/');
	
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