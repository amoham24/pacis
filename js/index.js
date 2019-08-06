$(document).ready(function() {

    $("#bttn").click(function(){
            $.ajax({

                url: "json/homeinfo.json",
                dataType: "text",
                success: function(data){

                    var json = $.parseJSON(data);
                    $("#info > h1").html(json.messages[0].title);
                    $("#info > p").html(json.messages[0].tagline);
                }
            });
    })

}); // end ready