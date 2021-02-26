/*!
	* Start Bootstrap - Freelancer v6.0.1 (https://startbootstrap.com/themes/freelancer)
	* Copyright 2013-2020 Start Bootstrap
	* Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
	*/
(function ($) {

	function generateData(data) {
		// PERSONAL DATA
		$("#name").html(data["personal_info"]["name"])
		$("#email").html("<a href='mailto:" + data["personal_info"]["email"] + "' class='text-light'>" + data["personal_info"]["email"] + "</a>")
		$("#phone").html(data["personal_info"]["phone"])
		let hobbies = ""
		for (let hobby in data["personal_info"]["hobbies"]) {
			hobbies += '<span class="badge badge-secondary">' + data["personal_info"]["hobbies"][hobby] + '</span>'
		}
		$("#hobbies").html(hobbies)
		let shortExperince = ""
		for (let exp in data["personal_info"]["experience"]) {
			shortExperince += '<span class="badge badge-pill badge-secondary">' + exp + ' <sup><i>' + data["personal_info"]["experience"][exp] + '</i></sup></span>'
		}
		$("#experience_short").html(shortExperince)


		// SKILL DATA
		let techSkills = $("#tech_skills")
		let otherSkills = $("#other_skills")
		techSkills.html("")
		otherSkills.html("")
		for (const key in data["skills"]) {
			let html = '<h3 class="text-info">' + key.toUpperCase() + '</h3>'
			let skillHtml = ''
			if (!Array.isArray(data["skills"][key])) {
				for (const skillitem in data["skills"][key]) {
					skillHtml += "<h5>" + skillitem + "</h5>"
					skillHtml += "<ul>"
					data["skills"][key][skillitem].forEach(element => {
						skillHtml += '<li>' + element + '</li>'
					});
					skillHtml += "</ul>"
				}
			} else {
				skillHtml += "<ul>"
				data["skills"][key].forEach(element => {
					skillHtml += '<li>' + element + '</li>'
				});
				skillHtml += "</ul>"
			}
			html += skillHtml
			if (key == "Technical Skills") { techSkills.append(html) } else { otherSkills.append(html) }
		}

		// EDUCATION DATA
		var eduBadge = function (type) {
			let html = '<div class="col-auto text-center flex-column d-none d-sm-flex"><div class="row h-50">'
				+ '<div class="col ' + ((type === "first") ? "" : " border-right border-light") + '">&nbsp;</div>'
				+ '<div class="col">&nbsp;</div></div><h5 class="m-2"><span class="badge badge-pill bg-light border border-info">&nbsp;</span></h5><div class="row h-50">'
				+ '<div class="col ' + ((type === "last") ? "" : " border-right border-light") + '">&nbsp;</div>'
				+ '<div class="col">&nbsp;</div></div></div >';
			return html;
		}
		var eduContent = function (dateFrom, dateTo, title, place, detail) {
			let html = '<div class="col py-2 text-dark"><div class="card border-info shadow"><div class="card-body"><div class="float-right">'
				+ '<span class="badge badge-info">' + dateFrom + '</span>'
				+ '<i class="fas fa-angle-right text-info"></i>'
				+ '<span class="badge badge-info">' + dateTo + '</span>'
				+ '</div>'
				+ '<h4 class="card-title text-info">' + title + '</h4>'
				+ '<span class="card-text">'
				+ '<div><b>At: </b><span>' + place + '</span></div>'
				+ (detail ? ('<div><b>Details: </b><span class="card-text text-dark">' + detail + '</span></div>') : "")
				+ '</span></div></div></div>'
			return html;
		}

		let eduHtml = '';
		let isFirst = true;
		let lastKey = Object.keys(data["education"])[Object.keys(data["education"]).length - 1]

		for (const key in data["education"]) {
			eduHtml += '<div class="row">';
			if (isFirst) {
				eduHtml += eduBadge('first')
				isFirst = false
			} else if (key == lastKey) {
				eduHtml += eduBadge('last')
			} else {
				eduHtml += eduBadge('')
			}
			eduHtml += eduContent(data["education"][key]["date_from"], data["education"][key]["date_to"], key, data["education"][key]["place"], data["education"][key]["detail"])
			eduHtml += '</div>'
		}

		$("#education").html(eduHtml);
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
