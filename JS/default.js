;$(document).ready( function(){
	
	// MONTA MENU PRINCIPAL
        function montaMenu() {
            var a, b, colecao, fade, h3, l, t;
            colecao = $('#prateleiramenu div ul');
            var h = $('#top-menu .menu-departamento h3');

            $('#top-menu .menu-departamento h3, #departament-page .sidebar h4, #category-page .sidebar h4').each(function() {
                $(this).append('<div class="dropdown"></div>');
                $(this).find('.dropdown').prepend($(this).next());
            });

            var i = 0;
    		$("div#prateleiramenu div.prateleira-menu").each(function() {
        		$(this).appendTo("#top-menu #principal .menu-departamento > h3:eq(" + i + ") .dropdown");
        		$(this).find("h2").remove();
        		$(this).find(".helperComplement").remove();
        		i = i + 1;
   			 });

            $("#menu-mobile .menu-departamento h3").each(function() {
				$(this).find("div.prateleira-menu").remove();
       			var $href = $(this).find("a.menu-item-texto").attr("href");
       				$(this).find("ul").append("<li class='all-dept'><a href=" + $href + ">Todos os Produtos</a></li>");

       				if( $(window).width() < 991 ){
      					$(this).find("a.menu-item-texto").removeAttr("href");  		
       				}
    		});	

            $('#top-menu').css('visibility', 'visible');
        }
    //
     
    setTimeout(montaMenu, 100); 


	 if( $.fn.Mobilemenu ){
		$(document).Mobilemenu();
	 }

    $i = "n";
    $("#menu-mobile h3").click(function(){
        if ($i == "n") {
        	$(this).find(".dropdown").slideToggle();
            $(this).addClass("ativo");

            $i = "s";
        }else {
           $(this).find(".dropdown").slideToggle();
           $(this).removeClass("ativo");
            $i = "n";
        }
    });

    $(".helperComplement").remove();

	var $btnComprar = $('.btn-add-buy-button-asynchronous');
	if( $btnComprar.length ){
		$btnComprar.html('COMPRAR');
	}

	var $btnComprarProduto = $('.buy-button.buy-button-ref');
	if( $btnComprarProduto.length ){

		if( $('#comprar-flutuante').length ){
			var $comprarFlutuante = $('#comprar-flutuante');
			var btnComprarTop = $('.product-info .buy-button-box').offset().top;
			$(window).scroll( function(){
				if( $(window).width() > 768 ){
					if( $(this).scrollTop() >= btnComprarTop && !$comprarFlutuante.is(':visible') ){
						$comprarFlutuante.fadeIn( function(){
							var urlImage = ( $('#include #image-main').attr('src') != '' ) ? $('#include #image-main').attr('src') : '/arquivos/sem-foto.gif';
							$('#foto-comprar-flutuante').attr('src', urlImage);
							$('body').css('padding-bottom', $comprarFlutuante.height() + 30);
						});
					}else if( $(this).scrollTop() < btnComprarTop && $comprarFlutuante.is(':visible') ){
						$comprarFlutuante.fadeOut( function(){
							$('body').css('padding-bottom', 0);
						});
					}					
				}
			});
		}


		$btnComprarProduto.html('<i class="fa fa-shopping-cart" aria-hidden="true"></i>COMPRAR');

		$btnComprarProduto.click( function(){
			var $this = $(this);
			var url   = $this.attr('href');
			if( url.indexOf('qty=1') > 0 ){
				$this.attr('href', url.replace('qty=1', 'qty='+ parseInt( $('.buy-button-box .box-qtd .qtd').val() ) ) );
			}
		});

		var $recebeQtyForm = $btnComprarProduto.parents('.buy-button-box');
		if( $recebeQtyForm.length ){
			$(".buy-button.buy-button-ref[style='display:block']").before(
				'<div class="pull-left box-qtd">' +
				'	<input type="text" class="qtd pull-left" value="1" />' +
				'	<div class="bts pull-left">' +
				'		<button class="btn btn-mais">+</button>' +
				'		<button class="btn btn-menos">-</button>' +
				' 	</div>' +
				'</div>'
			);
			$(document).on('keypress' , '.buy-button-box .box-qtd .qtd', function(e){
				var tecla = ( window.event ) ? event.keyCode : e.which;   
			    if( ( tecla > 47 && tecla < 58 ) ){
			    	return true;
			    }else{
			    	if ( tecla == 8 || tecla == 0 ){
			    		return true;
			    	}else{
			    		return false;
			    	}
			    }
			});
			$(document).on('keyup' , '.buy-button-box .box-qtd .qtd', function(e){
				$('.buy-button-box .box-qtd .qtd').val( $(this).val() );
			});
			$(document).on('blur' , '.buy-button-box .box-qtd .qtd', function(e){
				var $this = $(this);
				if( $this.val() === '' || parseInt( $this.val() ) < 1 ){
					$('.buy-button-box .box-qtd .qtd').val(1);
				}else{
					$('.buy-button-box .box-qtd .qtd').val( $this.val() );
				}
			});
			$(document).on('click', '.buy-button-box .box-qtd .btn', function(){
				var $this = $(this);
				var $qtd  = $('.buy-button-box .box-qtd .qtd');
				var valor = parseInt( $qtd.val() );
				if( $this.hasClass('btn-mais') ){
					$qtd.val( valor + 1 );
				}else if( $this.hasClass('btn-menos') ){
					if( valor > 1 ){
						$qtd.val( valor - 1 );
					}
				}
			});
		}
	}

	if( $.fn.owlCarousel ){

		var $fullbanner = $(".fullbanner");
		if( $fullbanner.length ){
			$fullbanner.owlCarousel({
			 	items 			: 1,
			    singleItem 		: true,
			    autoPlay 		: 7000,
			    stopOnHover 	: true,
			    navigation 		: true,
			    autoHeight 		: true,
			    navigationText 	: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
			});
		}

		var $showCaseOwl = $(".showcase-owl .prateleira > ul");
		if( $showCaseOwl.length ){
			$showCaseOwl.find('.helperComplement').remove();
			$showCaseOwl.owlCarousel({
			 	items 				: 4,
			    autoPlay 			: false,
			    stopOnHover 		: true,
			    pagination 	 		: false,
			    itemsDesktop 		: [1199,4],
			    itemsDesktopSmall 	: [980,3],
			    itemsTablet 		: [768,2],
			    itemsMobile 		: [479,1],
			    navigation 			: true,
			});
		}
		

		var $Marcas = $("#home-content .marcas");
		if( $Marcas.length ){
			$Marcas.owlCarousel({
			 	items 				: 6,
			    autoPlay 			: true,
			    stopOnHover 		: true,
			    pagination 	 		: false,
			    itemsDesktop 		: [1199,6],
			    itemsDesktopSmall 	: [980,4],
			    itemsTablet 		: [768,2],
			    itemsMobile 		: [479,1],
			    navigation 			: true,
			    navigationText 		: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			});
		}
	}

	$(".banners-cats .box-banner img").each( function(){
		var $ttlbancat = $(this).attr("alt");
		$(this).parent("a").prepend("<h4>" + $ttlbancat + "</h4>");
	});
	
	$("#extra-footer-top .newsletter #newsletterButtonOK").val("Cadastrar");


	$("#box-bread-brumb li a[title='cirurgicasaudeonline']").html("Home");
	$("#box-bread-brumb li a[href='http://cirurgicasaudeonline.vtexcommercestable.com.br/']").html("Home");

	$(".product-description-box #description").fadeIn("fast");
	  $(".btn-group a").click(function(event){ 
		$('.btn-group a').removeClass("ativo");
		$(this).addClass("ativo");       
        event.preventDefault();
        if ($(this).attr("href") == "#specification") {
        	$(".product-description-box #description").fadeOut();
        	$(".product-description-box #specification").fadeIn("slow");
        }
        if ($(this).attr("href") == "#description") {
        	$(".product-description-box #specification").fadeOut();
        	$(".product-description-box #description").fadeIn("slow");
        }
        //$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1800);
   });

   $(".product-image .apresentacao #show #image .zoomPad").append("<span class='info-zoom'><i class='fa fa-search' aria-hidden='true'></i> Passe o mouse para dar Zoom</span>");

   $(".payment .priceInstallmentWrapper ul").prepend("<li class='bandeiras'><img src='/arquivos/bandeiras-credito.png' alt='Visa, MarsterCard, Diners, Amex, Hipercard ou Elo' title='Visa, MarsterCard, Diners, Amex, Hipercard ou Elo'></li>");

	var $tabs = $('.side-corpo');
	var $itemTab = $tabs.find("li");

	$itemTab.click( function(){
		var $nmTab = $(this).attr("class");
		var $abre = $(".content-pontos").find("li."+$nmTab);
		var $tam = $abre.find(".prateleira").length;


		if (!$tam == 0) {
			$(".content-pontos").find(".tabAtivo").toggleClass("tabAtivo");
    		$abre.toggleClass("tabAtivo");

			$(".fecha-tab a").click( function(){
				$(".content-pontos li").removeClass("tabAtivo");
			});
    	}

	});

    //pag dep
	function montadep() {
 	
 	$('.resultado-busca-filtro').before('\
      <div class="custom-OB">\
        <ul class="list-OB">\
    		<li class="title-OB"><p>Ordenar por:</p></li>\
       		<div class="menu-OB">\
        	<li><a class="OrderByTopSaleDESC" href="javascript://">Mais vendidos</a></li>\
        	<li><a class="OrderByPriceASC" href="javascript://">Menor Preço</a></li>\
     		<li><a class="OrderByPriceDESC" href="javascript://">Maior Preço</a></li>\
        	<li style="width: 29%;"><a class="OrderByReleaseDateDESC" href="javascript://">Data de lançamento</a></li>\
    		</div>\
        </ul>\
     </div>');

 	$('.custom-OB ul.list-OB div.menu-OB li a').live('click', function() {
    	 var thisClass = $(this).attr("class");
     	var currentUrl = window.location.href;
     	window.location.href = '?PS=16&' + 'O=' + thisClass;
   	});

   		$('.custom-OB ul li.title-OB').live('click', function() {
     		$('.custom-OB ul.list-OB .menu-OB').slideToggle();
     		$(this).toggleClass('active');
   		});
	};

	setTimeout(montadep, 100);	

	$("#departament-page .sidebar h5, #category-page .sidebar h5").each(function(){
		$("<p class='filtrar'>FILTRAR</p>").insertBefore($(this));
		var $y = $(this).html();
	    $(this).next("ul").addClass("filtro "+$y);
	});

    $(".search-multiple-navigator fieldset label").click(function() {
        $(".bt-refinar").click();
    });


    $(".filtrar.visible-xs").click(function() {
        $(this).next("#departament-navegador").slideToggle();
    });

    var $b = $(".buy-button-ref").attr("style");
	if ($b == "display: none;"){
		$(".shipping-box").prepend("<p class='cep-escolha'>Escolha o tamanho desejado para verificar disponibilidade</p>");
	}    
});

$( document ).ajaxStop(function() {

	var $a = $(".portal-notify-me-ref .notifyme").attr("style");
    var $b = $(".buy-button-ref").attr("style");
	
	if ($a == "display: block;"){
		$(".price-box .price").hide();
	}	
	if ($b == "display: block;"){
		$(".cep-escolha").remove();
	}	

	$(".welcome p").append(" ou <em><a id='login'>Cadastre-se</a></em>");

	$(".product-info .shipping-box .freight-btn").val("Calcular");

	$(".product-info .shipping-box .freight-values").append("<img src='/arquivos/ico-frete.png' style='float: right;width: 72px;''>");

});