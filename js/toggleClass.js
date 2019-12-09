$(document).ready(function() {
    $('.morehexagon').on('click', function() {
      	$('.morehexagon').removeClass("selected");
      	$(this).toggleClass("selected"); 
    });
});

$('.layer').on('click', 'a', function() {
    $('.layer ul li a.activeCity').removeClass('activeCity');
    $(this).addClass('activeCity');
});

function changeColor () {
	var x = document.getElementById('heart');
	x.classList.toggle("red");
}

function changeImg(a){
	var x = document.getElementById('heart');
	// x.classList.remove("red");

	if (x.classList.contains('red')) {
		return 
	}

	var img = ["img/bfone.jpg", "img/bftwo.jpg", "img/bfthree.jpg", "img/bffour.jpg", "img/bffive.jpg", "img/bfsix.jpg", 
	"img/bfseven.jpg", "img/bfeight.jpg", "img/bfnine.jpg", "img/bften.jpg", "img/bfeleven.jpg", "img/bftwelve.jpg",
	"img/bf3_teen.jpg","img/bf4teen.jpg","img/bf5teen.jpg","img/bf6teen.jpg","img/bf7teen.jpg","img/bf8teen.jpg","img/scrollimg.jpg",];
	var k = document.getElementById("change");
	var name = document.getElementById("cityName");
	var div = document.getElementById("one");

	switch (a.innerHTML) {
	  	case 'Boucle du Mouhoun': k.src= img[0];
	 		name.innerHTML = "Boucle du Mouhoun"; break;
	 	case 'Cascades': k.src = img[1];
	 		name.innerHTML ="Cascades"; break;
	 	case 'Centre': k.src = img[2];
		 	name.innerHTML = "Centre"; break;
		case 'Centre-Est': k.src = img[3];
		 	name.innerHTML = "Centre-Est"; break;
		case 'Centre-Nord': k.src = img[4];
		 	name.innerHTML = "Centre-Nord"; break;
		case 'Centre-Ouest': k.src = img[5];
		 	name.innerHTML = "Centre-Ouest"; break;
		case 'Centre-Sud': k.src = img[6];
		 	name.innerHTML = "Centre-Sud"; break;
		case 'Est': k.src = img[7];
		 	name.innerHTML = "Est"; break;
		case 'Hauts-Bassins': k.src = img[8];
		 	name.innerHTML = "Hauts-Bassins"; break;
		case 'Nord': k.src =img[9];
		 	name.innerHTML = "Nord"; break;
		case 'Plateau-Central':	k.src = img[10];
			name.innerHTML = "Plateau-Central"; break;
		case 'Sahel': k.src = img[11];
		 	name.innerHTML = "Sahel"; break;
		case 'Sud-Ouest': k.src = img[12];
			name.innerHTML = "Sud-Ouest"; break;
		case 'Aribinda': k.src = img[13];
		 	name.innerHTML = "Aribinda"; break;
		case 'Bagre': k.src = img[14];
		 	name.innerHTML = "Bagre"; break;
		case 'Banfora': k.src = img[15];
		 	name.innerHTML = "Banfora"; break;
		case 'Batie': k.src = img[16];
		 	name.innerHTML = "Batie"; break;
		case 'Bobo Dioulasso': k.src = img[17];
		 	name.innerHTML = "Bobo Dioulasso"; break;
		case 'Tougan': k.src = img[18];
		 	name.innerHTML = "Tougan"; break;
	  	default:
	    	alert()
	}
	
}
