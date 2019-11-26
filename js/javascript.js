
		function nav_offset(){
			var window_page_yOffset = window.pageYOffset;
			if(window_page_yOffset >= 350){
				document.getElementsByTagName("nav")[0].style.position = "fixed";
				document.getElementsByTagName("nav")[0].style.backgroundColor = "white";
				document.getElementsByTagName("a")[0].style.color = "black";
				var element = document.getElementsByTagName('a');

				for (var i = 1; i <= 6; i++) {
					 	if((/active/).test(document.getElementsByTagName('li')[i-1].getAttribute('class'))){
					 		element[i].style.color = "#F9B01E";	
						}
						else{
						element[i].style.color = "black";
						}
					 }
			}
			else{
				document.getElementsByTagName("nav")[0].style.position = "static";
				document.getElementsByTagName("nav")[0].style.backgroundColor = "black";
				document.getElementsByTagName("a")[0].style.color = "white";
				var element = document.getElementsByTagName('a')
					
					for (var i = 1; i <= 6; i++) {
					 	if((/active/).test(document.getElementsByTagName('li')[i-1].getAttribute('class'))){
					 		element[i].style.color = "#F9B01E";	
						}
						else{
						element[i].style.color = "white";
						}
					 }


				}
		}

		$(document).ready(function(){

			
				
		});
		