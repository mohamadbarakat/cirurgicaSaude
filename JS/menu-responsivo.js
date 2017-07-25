;(function( $ ){

    "use strict";

    $.fn.Mobilemenu = function( params ) {

        // Default options
        var options = $.extend({
            btnMobile       : '.btn-menu-xs',
            boxMobile       : '#menu-mobile',
            boxRecebeMobile : '#menu-mobile .recebe-menu',
            widthTablet     : 1,
        }, params);

        // Plugin variables
        var $self       = this;

        // Put your DOM elements here
        var elements = {
            $body       : $('body'),
            $boxMobile  : $(options.boxMobile),
            $boxRecebeMobile  : $(options.boxRecebeMobile),
            $btnMobile  : $(options.btnMobile),
        };
        
        var methods = {
            init : function(){
                events.btnMobileAction();
                events.fechaMenu();
            },

            controlaMenuMobile : function(esconder){
                var e = elements.$boxMobile;
                if( e.is(':visible') || esconder === true ){
                    e.removeClass('show-menu').addClass('hide-menu');
                    e.fadeOut( function(){
                        elements.$body.removeClass('menu-ativo');
                    });
                }else{
                    e.removeClass('hide-menu').addClass('show-menu');
                    e.fadeIn( function(){
                        elements.$body.addClass('menu-ativo');
                    });
                }
            },
        };
        
        // Plugin events
        var events = {
            btnMobileAction : function(){
                elements.$btnMobile.click( function(){
                    methods.controlaMenuMobile();
                });
            },
            fechaMenu : function(){
                $(document).on( 'click', 'body.menu-ativo', function(event){
                    if (!$(event.target).closest("#menu-mobile").length) {
                        methods.controlaMenuMobile(true);
                    }
                });
            },
        };

        methods.init();

    };

})( jQuery );