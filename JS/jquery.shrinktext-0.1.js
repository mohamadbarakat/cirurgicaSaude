/*
*       shrinkText - jQuery plugin
*       written by feco linhares 
*       http://fecolinhares.com
*       Project Page: https://github.com/fecolinhares/jquery.shrinktext
*
*       Dual licensed under the MIT (MIT-LICENSE.txt)
*       and GPL (GPL-LICENSE.txt) licenses.
*
*       Built for jQuery library
*       http://jquery.com
*
*/

(function($){
    $.fn.shrinkText = function(options) {
        // default options
             var defaults = {
                 maxLength: 140,
                 preffix: '',
                 suffix: '',
                 showOnHover: false
             };

             options = $.extend(defaults, options);

             return this.each(function () {
                 if ($(this).text().length > options.maxLength) {
                    if (options.showOnHover) {
                        $(this).attr('title', $(this).text());
                    }
                    var shrinkedText = $(this).text().substring(0, options.maxLength - String(options.suffix).length - String(options.preffix).length);
                    $(this).text(options.preffix + shrinkedText + options.suffix);
                 }

             });
    };
})(jQuery);

$(document).ready(function() {
        $('.prateleira.home .product-name a').shrinkText({
            maxLength: 45,
            suffix: '...',
            showOnHover: true
        });

        $('.prateleira.vitrine .product-name a').shrinkText({
            maxLength: 58,
            suffix: '...',
            showOnHover: true
        });
});