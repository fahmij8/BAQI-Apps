jQuery(window).load(function () {
	// preloader
	$('.preloader-background').delay(1000).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(100)
		.fadeOut();
		animasi();

	 $('.collapsible').collapsible();

	// Floating Action Button Init
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      toolbarEnabled: true
    });

    // Slider init
    var sliderElems = document.querySelectorAll('.slider');
    var sliderInstances = M.Slider.init(sliderElems, {
    	indicators : false,
    	duration : 500,
    	interval : 6000
    });

    // Select option init
    $('select').formSelect();

    // Modal init
    $('.modal').modal();

    // Back is exit
    window.history.pushState({ noBackExitsApp: true }, '')
});

// Transition
function animasi() {
	if (anim > 0) {
		anim += 1;
		console.log('Animasi = Aktif');
		var play = setInterval(playAnim, 700);
		playedAnim = 1;
		function playAnim() {
			var classes = "anim" + playedAnim;
			document.getElementById(classes).className = document.getElementById(classes).className.replace( /(?:^|\s)scale-out(?!\S)/g , ' scale-in' );
			playedAnim++;
			if (playedAnim == anim) {
				clearInterval(play);
				console.log('Animasi = Selesai')
			}
		}
	} else {
		console.log('Animasi = Tidak Aktif');
		clearInterval(play);
	}
}


// Text-color change
function changeColor() {
	setTimeout(trans, 300)
}

function colorChange() {
	setTimeout(snart, 300)
}

function trans() {
	document.getElementById('text-color1').className = document.getElementById('text-color1').className.replace( /(?:^|\s)transparent-text(?!\S)/g , ' white-text' );
	document.getElementById('text-color2').className = document.getElementById('text-color2').className.replace( /(?:^|\s)transparent-text(?!\S)/g , ' white-text' );	
	document.getElementById('text-color3').className = document.getElementById('text-color3').className.replace( /(?:^|\s)transparent-text(?!\S)/g , ' white-text' );	
	document.getElementById('text-color4').className = document.getElementById('text-color4').className.replace( /(?:^|\s)transparent-text(?!\S)/g , ' white-text' );		
}

function snart() {
	document.getElementById('text-color1').className = document.getElementById('text-color1').className.replace( /(?:^|\s)white-text(?!\S)/g , ' transparent-text' );
	document.getElementById('text-color2').className = document.getElementById('text-color2').className.replace( /(?:^|\s)white-text(?!\S)/g , ' transparent-text' );	
	document.getElementById('text-color3').className = document.getElementById('text-color3').className.replace( /(?:^|\s)white-text(?!\S)/g , ' transparent-text' );	
	document.getElementById('text-color4').className = document.getElementById('text-color4').className.replace( /(?:^|\s)white-text(?!\S)/g , ' transparent-text' );		
}

window.addEventListener('popstate', function(event) {
  if (event.state && event.state.noBackExitsApp) {
    window.history.pushState({ noBackExitsApp: true }, '')
  }
})