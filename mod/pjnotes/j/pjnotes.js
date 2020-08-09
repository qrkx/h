$(function () {
	var draggie = new Draggabilly( '.draggable', {
		axis: 'y',
		containment: '.dragContainer',
		handle: '.dragHandle'
	});

	function renderBG() {
		particlesJS("bg", {
			particles: {
			  number: { value: 20, density: { enable: true, value_area: 800 } },
			  color: { value: "#ffcc00"},//["#aa73ff", "#f8c210", "#83d238", "#33b1f8"] },
			  shape: {
				type: "circle",
				stroke: { width: 0, color: "#000000" },
				polygon: { nb_sides: 5 },
				image: { src: "img/github.svg", width: 100, height: 100 }
			  },
			  opacity: {
				value: 0.5,
				random: true,
				anim: { enable: false, speed: 0.2, opacity_min: 0.1, sync: false }
			  },
			  size: {
				value: 50,
				random: true,
				anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
			  },
			  line_linked: {
				enable: false,
				distance: 150,
				color: "#ccff00",
				opacity: 0.8,
				width: 1
			  },
			  move: {
				enable: true,
				speed: 0.4,
				direction: "top-right",
				random: false,
				straight: false,
				out_mode: "out",
				bounce: false,
				attract: { enable: false, rotateX: 600, rotateY: 1200 }
			  }
			},
			interactivity: {
			  detect_on: "canvas",
			  events: {
				onhover: { enable: false, mode: "repulse" },
				onclick: { enable: false, mode: "push" },
				resize: true
			  },
			  modes: {
				grab: { distance: 400, line_linked: { opacity: 1 } },
				bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
				repulse: { distance: 200, duration: 0.4 },
				push: { particles_nb: 4 },
				remove: { particles_nb: 2 }
			  }
			},
			retina_detect: true
		  });
	}

	renderBG();

	var date = new Date();

	function startTime() {
		var today = new Date();
		var dt = today.getDate();
		var mn = today.getMonth();
		var dy = today.getDay();
		var h = today.getHours();
		var m = today.getMinutes();
		if(m<10){
			m="0"+m;
		}
		if(h<10){
			h="0"+h;
		}
		renGreeting(dt, mn, dy, h, m);
		var t = setTimeout(startTime, 500);
	}

	function renGreeting(dt, mn, dy, h, m) {
		let greet1 = '';
		let greet2 = '';
		month=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		day=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		if(h<5){
			greet1 = "It's Late!!";
			greet2 = "Time for a Nap..."
		}
		if(h < 8){
			greet1 = 'Good Morning.';
			greet2 = 'Time to Rise & Shine...';
		}
		else if(h<12){
			greet1 = 'Good Morning.';
			greet2 = "Let's start studying...";
		}
		else if(h<17){
			greet1 = 'Good Afternoon.';
			greet2 = "Let's start studying...";
		}
		else if(h<21){
			greet1 = 'Good Evening.';
			greet2 = "Let's start studying...";
		}
		else{
			greet1 = 'Visiting so Late?';
			greet2 = "It's time to rest...";
		}
		$("#dt").html( "<h4>"+day[dy] + " | " + month[mn] + ",&nbsp;" + dt+"</h4>");
		$("#time").html( "<h5>"+h+ ":" + m+"</h5>");
		$("#greet1").html("<h4>"+greet1+"</h4>");
		$("#greet2").html("<h5>"+greet2+"</h5>");
	}

	let bodyTop = $("#bodyCard").offset().top;
	console.log(bodyTop);
	
	$(window).scroll($.debounce( 250, function(){
			var scroll = $(window).scrollTop();
			if(scroll < bodyTop*0.4){
				$(window).scrollTop(0);
			}
			else if(scroll >= bodyTop*0.4 && scroll < bodyTop){
				$(window).scrollTop(bodyTop);
			}
		})
	);

	startTime();

	$( window ).resize(function() {
		renderBG();
	});
	$("#dragH").click(function(){
		console.log("Clicked");
		$("#navContent").removeClass("navFull");
		$("#navContent").addClass("navHalf");
	});

});