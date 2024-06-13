//Прокрут до секции 
document.addEventListener('DOMContentLoaded', function() {
    const scrollToSection = (selector) => {
        const menuLinks = document.querySelectorAll(selector);

        menuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                const targetId = link.getAttribute('href'); // Получаем атрибут href ссылки
                const targetSection = document.querySelector(targetId); // Находим соответствующую секцию по ID

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' }); // Прокручиваем к секции плавно
                }
            });
        });
    };

    scrollToSection('.footer__text_coffee');
    scrollToSection('.footer__text_tea');
    scrollToSection('.footer__text_protein');
    scrollToSection('.footer__text_collagen');
    scrollToSection('.footer__text_CBD');
    scrollToSection('.footer__title_contact');
    scrollToSection('.footer__title_steps');
    scrollToSection('.offer__btn_first');
    scrollToSection('.offer__btn_second');
    scrollToSection('.menu__item_first');
    scrollToSection('.menu__item_second');
    scrollToSection('.menu__item_third');

    scrollToSection('.product__more_1');
    scrollToSection('.product__more_2');
    scrollToSection('.product__more_3');
    scrollToSection('.product__more_4');
    scrollToSection('.product__more_5');

});

//burger

$(document).ready(function(){
    $('.header__menu').click(function(event){
      $('.menu').toggleClass('active__menu');
  
    });
  
  });
  $(document).ready(function(){
    $('.header__menu').click(function(event){
      var menuImage = $('.burger__img');
      
      if (menuImage.attr('src') === 'assets/img/burger.png') {
          menuImage.attr('src', 'assets/img/close_burger.png');
      } else {
          menuImage.attr('src', 'assets/img/burger.png');
      }
    });
  });
  $(document).ready(function(){
    $('.header__menu_mod').click(function(event){
      $('.menu__mod').toggleClass('active__menu_mod');
  
    });
  
  });
  $(document).ready(function(){
    $('.header__menu_mod').click(function(event){
      var menuImage = $('.burger__img_mod');
      
      if (menuImage.attr('src') === 'assets/img/burger__black.png') {
          menuImage.attr('src', 'assets/img/close_burger.png');
      } else {
          menuImage.attr('src', 'assets/img/burger__black.png');
      }
    });
  });