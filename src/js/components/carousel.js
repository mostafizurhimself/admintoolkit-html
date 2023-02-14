import Swiper, { Navigation, Pagination } from 'swiper';

const carousel ={
    init() {
        new Swiper('.swiper',{
            modules: [Navigation, Pagination],
            // cssMode: true,
            navigation:{
                nextEl:'.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
        // console.log(swiper);
    }
}
export default carousel;