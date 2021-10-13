// скролл к якорным ссылкам
$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 0
    }, 800);
});
//


// открытие/закрытие мобильного меню
const headerBurger = document.querySelector('.header__burger');
const headerBurgerIcon = document.querySelector('.header__burger-icon');
const headerBurgerClose = document.querySelector('.header__burger-close')
const headerBurgerCloseIcon = document.querySelector('.header__burger-close-icon');
const headerMenuWrap = document.querySelector('.header__nav');
const headerMenu = document.querySelector('.header__list');

headerBurger.addEventListener('click', function(){
    headerMenuWrap.classList.add('header__nav_active');
    headerMenu.classList.add('header__list_active');
})

headerBurgerClose.addEventListener('click', function(){
    headerMenuWrap.classList.remove('header__nav_active');
    headerMenu.classList.remove('header__list_active');
})
//


// карусель с перелистыванием стрелками
var owl = $(".reviews__content");
owl.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
      0:{
          items:1,
          center: true
      },
      1200:{
          items:2
      }
    }
});
owl.on('mousewheel', '.owl-stage', function(e) {
  if (e.deltaY < 0) {
    owl.trigger('prev.owl');
  } else {
    owl.trigger('next.owl');
  }
  e.preventDefault();
});
owl.on('mouseover mouseout', function() {
  $(this).toggleClass('keydown');
});
$(document).keydown(function(e) {
  if (owl.hasClass('keydown')) {
    if (e.keyCode == '39') {
      owl.trigger('next.owl');
    } else if (e.keyCode == '37') {
      owl.trigger('prev.owl');
    }
  }
});
//


// аккордеон в questions
const questionsItem = document.querySelectorAll('.questions__item');

questionsItem.forEach(function(item) {
    const accordeonTitleIcon = item.querySelector('.question__item-icon')
    const accordeonTitle = item.querySelector('[data-name="accordeon-title"]')

    accordeonTitle.addEventListener("click", function(){
        accordeonTitleIcon.classList.toggle("question__item-icon_active")
        let loock = this.nextElementSibling;
        if (loock.style.maxHeight){
        loock.style.maxHeight = null;
        } else {
            loock.style.maxHeight = loock.scrollHeight + "px";
        }
    })
})
//