// Добавление класса для Burger, LOCK скролла при Burger//
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


// Cтилизация SLIK SLIDER//
$(document).ready(function(){
	$(`.slider__body`).slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 2,
		speed: 1300,
		easing:`ease`,
		infinite: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false,
				}
			},
			{
				breakpoint: 631,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					speed: 800,
				}
			}
		]
	});
});

//Добавляем класс в Слайдер(добавить в Избранное//
$(document).on('click', '.slider__addtofavorite', function () {
	let id = $(this).hasClass('simple');
    if (!id) {
        $(this).addClass('simple');
    } else {
        $(this).removeClass('simple');
    }
});


//Добавляем и убираем атрибут OPEN для DETAILS при Медиа-запросах//
var handleMatchMedia = function(mediaQuery) {
	if (mediaQuery.matches) {
		$('details').removeAttr('open'); 
	}  else {
		$('details').attr('open', 'open'); //можно убрать т.к. в HTML прописан OPEN для Details.
	}
},
mql = window.matchMedia('(max-width: 767px)');
handleMatchMedia(mql);
mql.addListener(handleMatchMedia); 


//Аккардеон для DETAILS//
var details = document.querySelectorAll("details");
for(i=0;i<details.length;i++) {
  details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
    var details = event.target.parentNode.children;
    for(i=0;i<details.length;i++) {
      if (details[i].tagName != "DETAILS" || 
         !details[i].hasAttribute('open') || 
         event.target == details[i]) {
         continue;
      }
		details[i].removeAttribute("open");
    }
}

//Адаптивная переброска блоков//
let move_array=[];
if($('*[data-move]')){
	$.each($('*[data-move]'), function(index, val) {
		if($(this).data('move')!='' && $(this).data('move')!=null){
			$(this).attr('data-move-index',index);
			move_array[index]={
				'parent':$(this).parent(),
				"index":$(this).index()
			};
		}
	});
}
function dynamic_adaptive(){
		let w=$(window).outerWidth();
	$.each($('*[data-move]'), function(index, val) {
		if($(this).data('move')!='' && $(this).data('move')!=null){
				let dat_array=$(this).data('move').split(',');
				let dat_parent=$('.'+dat_array[0]);
				let dat_index=dat_array[1];
				let dat_bp=dat_array[2];
			if(w<dat_bp){
				if(!$(this).hasClass('js-move_done_'+dat_bp)){
					if(dat_index>0){
						$(this).insertAfter(dat_parent.find('*').eq(dat_index-1));
					}else{
						$(this).prependTo(dat_parent);
					}
					$(this).addClass('js-move_done_'+dat_bp);
				}
			}else{
				if($(this).hasClass('js-move_done_'+dat_bp)){
					dynamic_adaptive_back($(this));
					$(this).removeClass('js-move_done_'+dat_bp);
				}
			}
		}
	});
}
function dynamic_adaptive_back(el){
	let index_original=el.data('move-index');
	let move_place=move_array[index_original];
	let parent_place=move_place['parent'];
	let index_place=move_place['index'];
if(index_place>0){
	el.insertAfter(parent_place.find('*').eq(index_place-1));
}else{
	el.prependTo(parent_place);
}
}
$(window).resize(function(event) {
dynamic_adaptive();
});
dynamic_adaptive();