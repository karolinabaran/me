$(document).ready(function() {


	$('#fullpage').fullpage({
        //anchors:['slide1'],
		afterLoad: function(anchorLink, index){
        if (index > 1){
            $('#menu').fadeTo("slow",1);
			}
		},
		onLeave: function(index, nextIndex, direction){
        if (index == 2 && direction == 'up') {
            $('#menu').fadeTo("slow",0);
			}
		}
		
		/*onLeave: function(index, nextIndex, direction){
        if (index == 2 && direction == 'up'){
            $('#menu').css('visibility','hidden');
        }
		},
		afterLoad: function(anchorLink, index){
        if (index == 2){
            $('#menu').css('visibility','visible');
        }
		}*/
    });
	
	
	
	$('.sheet').addClass('swing');	
	
	
    $(".hello").typed({
        strings: ["<p>&lt;Hello!&gt;^400</p> <br><p>&lt;I'm Karolina,^500 junior front-end dev&gt;^1200<p/>"],
        typeSpeed: 55,
		startDelay: 960,
		onStringTyped: function() { $.fn.fullpage.moveSectionDown();}
		
      
  });
  



});


