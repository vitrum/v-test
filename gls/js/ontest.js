(function( $ ){

  $.fn.ontest = function( type ) {  
	var $this = $(this);
	$this.on({
	  click: function(){
		$(this).toggleClass("active");
	  },
	  mouseenter: function(){
		$(this).addClass("inside");
	  },
	  mouseleave: function(){
		$(this).removeClass("inside");
	  }
	});

  };
})( jQuery );
