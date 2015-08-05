(function(vert,hor,img){
		var s=document.createElement('script');
		s.type='text/javascript';
		s.onload=b;
		s.src='https://code.jquery.com/jquery-1.11.3.min.js';
		document.body.appendChild(s);

		function b(){
			var $=jQuery.noConflict(true);
      var css = {position:'fixed',zIndex:100000};
      css[hor] = 0;
      css[vert] = 0;
			$('body').append($('<img>').css(css).attr('src', 'https://raw.githubusercontent.com/kaminaly/ribbons/master/imgs/'+img));
		}
	}
)('top','left','fwa/DayTopLeft.png');

// 1, change params end of code.
// 2, compress the code by http://jscompress.com/
// 3, prepend 'javascript:'
