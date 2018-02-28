

jQuery(function($){

 
	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       200,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
          
        }

      }
    );
    wow.init();

});


