/**
 * 
 */
(function(){
var $target = $('.left-login'),
	animationClass = 'left-login-start';

function animeScroll(){
	var documentTop = $(document).scrollTop();
	
	$target.each(function(){
		var itemTop = $(this).offset().top;
		if(documentTop >= 0){
			$(this).addClass(animationClass);
		}else{
			$(this).removeClass(animationClass);
		}
	})
}

animeScroll();
}());