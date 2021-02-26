/*!
	* Start Bootstrap - Freelancer v6.0.1 (https://startbootstrap.com/themes/freelancer)
	* Copyright 2013-2020 Start Bootstrap
	* Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
	*/
(function ($) {
	function generateData($data) {
		let techSkills = $("#tech_skills")
		let otherSkills = $("#other_skills")
		techSkills.html("")
		otherSkills.html("")
		for (const key in $data["skills"]) {
			let html = '<h3 class="text-info">' + key.toUpperCase() + '</h3>'
			let skillHtml = ''
			if (!Array.isArray($data["skills"][key])) {
				for (const skillitem in $data["skills"][key]) {
					skillHtml += "<h5>" + skillitem + "</h5>"
					skillHtml += "<ul>"
					$data["skills"][key][skillitem].forEach(element => {
						skillHtml += '<li>' + element + '</li>'
					});
					skillHtml += "</ul>"
				}
			} else {
				skillHtml += "<ul>"
				$data["skills"][key].forEach(element => {
					skillHtml += '<li>' + element + '</li>'
				});
				skillHtml += "</ul>"
			}
			html += skillHtml
			if (key == "Technical Skills") { techSkills.append(html) } else { otherSkills.append(html) }
		}
	}
	generateData(mydata);

	"use strict"; // Start of use strict

	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - 71)
				}, 600, "easeInOutExpo");
				return false;
			}
		}
	});

	// Scroll to top button appear
	$(document).scroll(function () {
		var scrollDistance = $(this).scrollTop();
		if (scrollDistance > 100) {
			$('.scroll-to-top').fadeIn();
		} else {
			$('.scroll-to-top').fadeOut();
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: 80
	});

	// Collapse Navbar
	var navbarCollapse = function () {
		if ($("#mainNav").offset().top > 100) {
			$("#mainNav").addClass("navbar-shrink");
		} else {
			$("#mainNav").removeClass("navbar-shrink");
		}
	};
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);

	// Floating label headings for the contact form
	$(function () {
		$("body").on("input propertychange", ".floating-label-form-group", function (e) {
			$(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
		}).on("focus", ".floating-label-form-group", function () {
			$(this).addClass("floating-label-form-group-with-focus");
		}).on("blur", ".floating-label-form-group", function () {
			$(this).removeClass("floating-label-form-group-with-focus");
		});
	});

	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	})

	var year = new Date().getFullYear();

	$("#year").html(year);



})(jQuery); // End of use strict
