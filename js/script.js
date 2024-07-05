// import Swiper JS
// import Swiper from '../swiper/swiper.min.js';




// // core version + navigation, pagination modules:
// import Swiper from 'swiper';
// import { Navigation, Pagination } from '../swiper/swiper';
// // import Swiper and modules styles
// import 'node_modules/swiper/css';
// import 'node_modules/swiper/css/navigation';
// import 'node_modules/swiper/css/pagination';


const swiper = new Swiper('.image-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    pagination: {
        el: '.swiper-pagination',
        // Буллеты
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
            console.log(index);
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },

        // Фракция
        // type: 'fraction',

        // Прогрессбар
        // type: 'prorgessbar',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    slideToClickedSlide: true,

    // Автовысота
    autoHeight: true,

    slidesPerView: 2,

    // Отступы
    spaceBetween: 40,

    // Бесконечность
    loop: true,

    // autoplay: {
    //     delay: 3000,
    //     disableOnnteraction: false,  
    // },
    
    // breakpoints:{
    //     768: {
    //         slidesPerView: 1,
    //     },
    //     1024: {
    //         slidesPerView: 2,
    //     },
    //     1440: {
    //         slidesPerView: 3,
    //     }
    // }
});
