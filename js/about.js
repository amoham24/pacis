$(document).ready(function(){
	var url = "https://api.flickr.com/services/feeds/photos_public.gne?id="
	//Below is my ID
	url += "145438828@N05"
	url += "&format=json&jsoncallback=?&tags=";
	//Below is the tag of the phtotos I'm using
	url += "sneak";
	$("#bttn").click(function(){
     	$.ajax({
	        url: url,
	        dataType: "json",
	        success: function(data){
	    	var output = "";
	        $.each(data.items, function (index, item) {
		 		output += "<a  href=" + item.media.m  + " data-lightbox='vecta' data-title=" + item.title + ">";
				output+= "<img src=" + item.media.m + ">" + "</a>";
				});

			 $("#sneakpeak").html(output);
	        }
	    });
     })
});