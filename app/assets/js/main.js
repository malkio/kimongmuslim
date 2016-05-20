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


	function toggleCoggle(){
		$(".btn-toggle-coggle").on('click', function(e){
			e.preventDefault();
			if( $('#coggle-background').hasClass('hidden') ) {
				$("#coggle-background").removeClass('hidden');
				$('#simple-background').addClass('hidden');
			}
			else {
				$("#coggle-background").addClass('hidden');
				$('#simple-background').removeClass('hidden');
			}
		});
	}
	toggleCoggle();



	function buildThumbnail(data, isHeader){
		if(isHeader){
			var workThumbnailHeader = "<div class='col-sm-6 col-xs-6 col-md-3 work-header'>";
			workThumbnailHeader +=  "<a href='"+data.url+"'>";
			workThumbnailHeader +=  	"<img src='"+imageLocation + data.img+"' alt=''>";
			workThumbnailHeader += 	"<div class='overlay'>";
			workThumbnailHeader +=		"<h3>"+data.name+"</h3>";
			workThumbnailHeader +=	"</div>";
			workThumbnailHeader += "</a>";
			workThumbnail += "</div>";
			return workThumbnailHeader;
		}

		var workThumbnail = "<div class='col-sm-6 col-xs-6 col-md-3 work-item'>";
		workThumbnail +=  "<a href='"+data.url+"'>";
		workThumbnail +=  	"<img src='"+imageLocation + data.img+"' alt=''>";
		workThumbnail += 	"<div class='overlay'>";
		workThumbnail +=		"<h5>"+data.title+"</h5>";
		workThumbnail +=		"<small>"+data.description+"</small>";
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
			var $workList = $("<div class='row work-list'></div>");
			// Add next button
			//$work-list.append("<a href='#' class='btn-work-next'><i class='glyphicon glyphicon-chevron-right'></i></a>");
			$.each(category.list, function(workIndex, work){
				if(workIndex > 2) return false;
				var _workThumbnail = buildThumbnail(work);
				$workList.append(_workThumbnail);
			});
			$workList.prepend( buildThumbnail(category, true) );
			$works.find('.container').append($workList);
		});

		// BUILD BACKGROUND
		var backgroundData = data.background;
		var $background = $("#simple-background");
		$.each(backgroundData.categories, function(catIndex, category){
			var $categories = $("<div class='row'><div class='col-sm-3'><h4>"+category.name+"</h4></div><div class='col-sm-9 background-list'></div></div>");

			$.each(category.list, function(backgroundIndex, background){
				var backgroundSpan = "<span class='label label-default'>"+background+"</span>";
				$categories.find('.background-list').append(backgroundSpan);
			});
			$background.find('.container').append($categories);
		});
	}
}(jQuery, window, document, undefined));


 
