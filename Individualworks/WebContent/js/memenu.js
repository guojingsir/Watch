$(document).ready(function(){
	

	function rr() {
		$("#header .memenu").find("li, a").unbind();
		if (window.innerWidth <= 768) {
			oo();
			ss();
			if (n == 0) {
				$("#header .memenu > li:not(.showhide)").hide(0)
			}
		} else {
			uu();
			ii();
		}
	}
	function ii() {
		$("#header .memenu > li").bind("mouseover", function() {
			$(this).children("#header .mepanel").stop().fadeIn(t.interval)
		}).bind("mouseleave", function() {
			$(this).children("#header .dropdown,#header .mepanel").stop().fadeOut(t.interval)
		})
	}
	function ss() {
		$("#header .memenu > li > a").bind("click", function(e) {
			if ($(this).siblings("#header .mepanel").css("display") == "none") {
				$(this).siblings("#header .mepanel").slideDown(t.interval);
				$(this).siblings(".dropdown").find("ul").slideDown(t.interval);
				n = 1
			} else {
				$(this).siblings("#header .dropdown,#header .mepanel").slideUp(t.interval)
			}
		})
	}
	function oo() {
		$("#header .memenu > li.showhide").show(0);
		$("#header .memenu > li.showhide").bind("click", function() {
			if ($("#header .memenu > li").is(":hidden")) {
				$("#header .memenu > li").slideDown(300)
			} else {
				$("#header .memenu > li:not(.showhide)").slideUp(300);
				$("#header .memenu > li.showhide").show(0)
			}
		})
	}
	function uu() {
		$("#header .memenu > li").show(0);
		$("#header .memenu > li.showhide").hide(0)
	}

	var t = {
		interval: 250
	};

	var n = 0;
	$("#header .memenu").prepend("<li class='showhide'><span class='title'>MENU</span><span class='icon1'></span><span class='icon2'></span></li>");
	rr();

	$(window).resize(function() {
		rr();
	});


});