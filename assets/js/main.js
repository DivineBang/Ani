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
});

