
$(document).ready(function(){
   $("#biking").hide(function(){
			  });
	 $("#knitting").hide(function(){
			  });
	 $("#traveling").hide(function(){
			  });
				
				//TOGGLES
   		
			$("#bike").click(function(){
        $("#biking").slideToggle("slow");
    });
   $("#knit").click(function(){
        $("#knitting").slideToggle("slow");
    });
   $("#travel").click(function(){
      $("#traveling").slideToggle("slow");
    });
  });
