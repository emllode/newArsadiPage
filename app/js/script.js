const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.navbarMenu');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {
	console.log('click hamburger');

	if (header.classList.contains('open')) {
		// Close Hamburger Menu
		//	body.classList.remove('noscroll');
		header.classList.remove('open');
		fadeElems.forEach(function (element) {
			element.classList.remove('fade-in');
			element.classList.add('fade-out');
		});
	} else {
		// Open Hamburger Menu
		//body.classList.add('noscroll');
		header.classList.add('open');
		fadeElems.forEach(function (element) {
			element.classList.remove('fade-out');
			element.classList.add('fade-in');
		});
	}
});

jQuery(document).ready(
	(function ($) {
		// Scroll to the desired section on click
		// Make sure to add the `data-scroll` attribute to your `<a>` tag.
		// Example:
		// `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
		function scrollToSection(event) {
			event.preventDefault();
			var $section = $($(this).attr('href'));
			$('html, body').animate(
				{
					scrollTop: $section.offset().top,
				},
				700
			);
		}
		$('[data-scroll]').on('click', scrollToSection);
	})(jQuery)
);

$(document).ready(function () {
	$('h3').delay('1000').fadeIn();
	// hide #back-top first
	$('#back-top').hide();
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 400) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('a#back-top').click(function () {
			$('body,html').animate(
				{
					scrollTop: 0,
				},
				800
			);
			return false;
		});
	});
});
