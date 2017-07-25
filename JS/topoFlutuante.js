$(document).ready(function(){
	$(window).scroll(function(){
		$("#topoFlutuante").stop().animate($(this).scrollTop()>=157?{top:0}:{top:"-175px"})
		if ($(this).scrollTop()>=30){
			$(".after").css("position", "absolute");
			var $e = $("#menu-mobile");
			$e.removeClass('show-menu').addClass('hide-menu');
                    $e.fadeOut( function(){
                        $('body').removeClass('menu-ativo');
                    });
		}
		else{
			$(".after").css("position", "fixed");
		}
	})

});