(function($, window, document, undefined){
	var source = "data.json";
	var imageLocation = "./assets/images/";

	$.ajax({
		url: source,
		cache: false,
		success: function(data){
			if(typeof data === 'object')
				initialize(data);

		}
	});


	// var $works = $("#works");
	// var $categories = $("<div class='row no-gutter'></div>");
	// var $work = $("<div class='col-sm-6 col-xs-12 col-md-3'></div>");
	//
	// 	<div class="col-sm-6 col-xs-12 col-md-3">
	// 		<div class="he-wrap tpl6">
	// 			<img src="./assets/img/portfolio/portfolio_08.jpg" alt="">
	// 			<div class="he-view">
	// 				<div class="bg a0" data-animate="fadeIn">
	// 					<h6 class="project-title" data-animate="fadeInDown">A Graphic Design Item</h6>
	// 					<a data-rel="prettyPhoto" href="./assets/img/portfolio/portfolio_08.jpg" class="dmbutton a2" data-animate="fadeInUp"><i class="fa fa-search"></i></a>
	// 					<a href="single-project.html" class="dmbutton a2" data-animate="fadeInUp"><i class="fa fa-link"></i></a>
	// 				</div><!-- he bg -->
	// 			</div><!-- he view -->
	// 		</div><!-- he wrap -->
	// 	</div>
	// 	<div class="col-sm-6 col-xs-12 col-md-3">
	//
	// 	</div>


	function buildWorkThumbnail(work){
		var workThumbnail = "<div class='col-sm-6 col-xs-12 col-md-3 work-item'>";
		workThumbnail +=  "<a href='"+work.url+"'>";
		workThumbnail +=  	"<img src='"+imageLocation + work.img+"' alt=''>";
		workThumbnail += 	"<div class='overlay'>";
		workThumbnail +=		"<h4>"+work.title+"</h4>";
		workThumbnail += 		"<i class='glyphicon glyphicon-link'></i>";
		workThumbnail +=	"</div>";
		workThumbnail += "</a>";
		workThumbnail += "</div>";
		return workThumbnail;
	}
	function initialize(data){

		// BUILD WORK
		var workData = data.works;
		var $works = $("#works");

		$.each(workData.categories, function(catIndex, category){
			var $categories = $("<div class='row'></div>");
			$.each(category.list, function(workIndex, work){
				if(workIndex > 3) return false;
				var _workThumbnail = buildWorkThumbnail(work);
				$categories.append(_workThumbnail);
			});
			$works.find('.container').append($categories);
		});

		// BUILD BACKGROUND
		var backgroundData = data.background;
		var $background = $("#background");
		$.each(backgroundData.categories, function(catIndex, category){
			var $categories = $("<div class='row'><div class='col-sm-4'><h4>"+category.name+"</h4></div><div class='col-sm-8 background-list'></div></div>");

			$.each(category.list, function(backgroundIndex, background){
				var backgroundSpan = "<span class='label label-primary'>"+background+"</span>";
				$categories.find('.background-list').append(backgroundSpan);
			});
			$background.find('.container').append($categories);
		});
	}
}(jQuery, window, document, undefined));
