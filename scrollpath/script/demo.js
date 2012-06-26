$(document).ready(init);

function init() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

	$.fn.scrollPath("getPath")
		// Move to 'start' element
		.moveTo(2000, 2000, {name: "start"})
		// Line to 'description' element
		.rotate(Math.PI/2)
		.lineTo(2000, 800, {
			callback: function() {
				highlight($(".settings"));
			},
			name: "station_2"
		})
		.arc(1400, 800, 600, Math.PI*2, Math.PI , true)
		// Arc down and line to 'syntax'
		.rotate(2*Math.PI/2)
		.lineTo(800, 800, {
			callback: function() {
				highlight($(".settings"));
			},
			name: "station_3"
		})
		.rotate(3*Math.PI/2)
		.arc(1400, 1400, 848, -Math.PI/1.3, Math.PI/1.3, true)
		// Continue line to 'scrollbar'

		.lineTo(800, 2000, {
			callback: function() {
				highlight($(".sp-scroll-handle"));
			},
			name: "station_4"
		})

		.lineTo(2000, 2000, {
			callback: function() {
				//alert('end!');
				$(".settings .show-path").text("end!!!");
			},
			name: "end"
		})
		.rotate(4*Math.PI/2)
		/*
		// Arc up while rotating
		.arc(1800, 1000, 600, Math.PI/2, 0, true, {rotate: Math.PI/2 })
		// Line to 'rotations'
		.lineTo(2400, 750, {
			name: "rotations"
		})
		// Rotate in place
		.rotate(3*Math.PI/2, {
			name: "rotations-rotated"
		})
		// Continue upwards to 'source'
		.lineTo(2400, -700, {
			name: "source"
		})
		// Small arc downwards
		.arc(2250, -700, 150, 0, -Math.PI/2, true)

		//Line to 'follow'
		.lineTo(1350, -850, {
			name: "follow"
		})
		// Arc and rotate back to the beginning.
		.arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "end"});
		*/

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({drawPath: true, wrapAround: true});

	// Add scrollTo on click on the navigation anchors
	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
			
			// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
			// for extra easing functions like the one below
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});

	/* ===================================================================== */

	$(".settings .show-path").click(function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
	}).toggle(function() {
		$(this).text("Hide Path");
	}, function() {
		$(this).text("Show Path");
	});

	$(".tweet").click(function(e) {
		open(this.href, "", "width=550, height=450");
		e.preventDefault();
	});


	}


function rotateDiv (element) {

}

function highlight(element) {
	if(!element.hasClass("highlight")) {
		element.addClass("highlight");
		setTimeout(function() { element.removeClass("highlight"); }, 2000);
	}
}
function ordinal(num) {
	return num + (
		(num % 10 == 1 && num % 100 != 11) ? 'st' :
		(num % 10 == 2 && num % 100 != 12) ? 'nd' :
		(num % 10 == 3 && num % 100 != 13) ? 'rd' : 'th'
	);
}
