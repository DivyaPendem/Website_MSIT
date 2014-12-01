/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var flag = 0;
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.cbp-af-header' ),
		didScroll = false,
		changeHeaderOn = 10;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 2);
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'cbp-af-header-shrink' );
//			alert('shrinked');
			if(flag==0){
				$('#headerchange').append('<h3><span style="color: #b20000;">TARA</span> MOBILE TECHNOLOGIES</h3>');
				flag = 1;
			}
//			alert('added title');
		}
		else {
			classie.remove( header, 'cbp-af-header-shrink' );
			$('#headerchange h3').remove();
			flag=0;
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();
	

})();
