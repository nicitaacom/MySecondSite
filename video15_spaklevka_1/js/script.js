// Sliders
jQuery(document).ready(function(){
							// adventures slider
							jQuery('.adventures_slider').slick({

								infinite: true,
								slidesToShow: 4,
								slidesToScroll: 1,
								prevArrow:'<button class="prev arrow"></button>',
								nextArrow:'<button class="next arrow"></button>',

								responsive: [
								{
									breakpoint: 991,
									settings: {
										slidesToShow: 2,
										slidesToScroll: 1,
									}
								},
								{
									breakpoint: 767,
									settings: {
										slidesToShow: 1,
										slidesToScroll: 1
									}
								}
								]

							});
							//feedback slider
							$('.feedback_slider').slick({
								prevArrow:'<button class="arrow prev"></button>',
								nextArrow:'<button class="arrow next"></button>',
							});
						});