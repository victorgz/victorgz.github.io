var data = {
	"touractive":
		{
			"title":"TourActive",
			"type":"UX & UI",
			"description":"TourActive is a solution to improve the bus network of Tampere, Finland. The application shows in real-time different interesting points of the city, near events and current news. Everything based on the current location of the user, making with this a more customized experience.",
			"web":null,
			"pictures":[
				{"img": "touractive/01.jpg", "label":"High level prototype"},
				{"img": "touractive/02.jpg", "label":"Low level prototype"},
				{"img": "touractive/03.png", "label":"Icon design"},
				{"img": "touractive/04.PNG", "label":"Interactive prototype"},
			]
		},
	"nextwoodenfurniture":
		{
			"title":"Next Wooden Furniture | Demola",
			"type":"UX & UI & Frontend development",
			"description":"The result of combining Demola with Puulon Oy becomes in Next Wooden Furniture project. During three months the team has developed some wooden furniture products, looking for solutions to different problems like the lack of space in the houses. The result of the project is a book with all the detailed information about the different products and an online portfolio with interactive 3D models of the furniture.",
			"web":"http://bit.ly/d2016nwf",
			"pictures":[
				{"img": "nextwoodenfurniture/01.jpg", "label":"Portfolio online"},
				{"img": "nextwoodenfurniture/02.png", "label":"List of products"},
				{"img": "nextwoodenfurniture/03.png", "label":"Interactive 3D Model"},
			]
		},
	"marinaloph":
		{
			"title":"Marina Lopez Hernando | Portfolio",
			"type":"Frontend development",
			"description":"It's Marina, an Industrial Design Engineer and Product Development, specialised in Innovation and User design eXperience. My main objective as a professional worker is to explore new ideas taking into account people needs and looking for new challenges everyday. I can introduce myself as a outside-the-box thinker who contribute a new and fresh point of view to the projects.",
			"web":"http://marinaloph.com",
			"pictures":[
				{"img": "marinaloph/01.jpg", "label":"Portfolio online"},
			]
		},
	"aunclickdelempleo":
		{
			"title":"A un click del empleo",
			"type":"Frontend & Backend development",
			"description":"LAB of Telefónica with Fundación Adecco and Ericsson to develop accessible technologies: web and smartphone application to help and improve the experience of the job searching process.",
			"web":null,
			"pictures":[
				{"img": "aunclickdelempleo/01.jpg", "label":"Platform"},
				{"img": "aunclickdelempleo/02.jpg", "label":"Automatic generation of documents"},
			]
		},
	"comunicados":
		{
			"title":"Comunicados",
			"type":"Frontend development",
			"description":"Comunicados is a company focused on deaf people. Through a website, they facilitate the communication between the client and a third company, being an intermediator between its relationship.",
			"web": "http://comunicados.es",
			"pictures":[
				{"img": "comunicados/01.jpg", "label":"Website"},
				{"img": "comunicados/02.png", "label":"Website"},
			]
		}
}

$(document).ready(function(){
	$('#portfolio img').click(function(event){
		var target = $(event.target)[0];
		var id = $(target).data("id");
		var title = data[id].title;
		var text = data[id].description;
		var type = data[id].type;
		var pictures = data[id].pictures;
		var web = data[id].web;

		$("#productModal .product-title").text(title);
		$("#productModal .product-type").text(type);
		$("#productModal .product-text").text(text);

		$("#productModal .product-web").empty();
		if(web != null){
			var webItem = '<a href="'+web+'" target="_blank">Official website</a>'
			$("#productModal .product-web").append(webItem);
		}

		$("#carousel .carousel-inner").empty();

		for(var i=0; i<pictures.length; i++){
			if(i == 0)
				var img = '<div class="item active"><img src="./images/'+pictures[i].img+'"><span>'+pictures[i].label+'</span></div>';
			else
				var img = '<div class="item"><img src="./images/'+pictures[i].img+'"><span>'+pictures[i].label+'</span></div>';

			$('#carousel .carousel-inner').append(img);
		}

		$("#productModal").modal("show");
	});

});
