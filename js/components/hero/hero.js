import store from '../../store.js'
import utilities from '../../utilities.js'
export default {
    template: await utilities.getPage('./js/components/hero/hero.html'),
    data(){
        return{
            utilities,
            store,
            heroSwiper:{
                pagination: {
                    el: '.swiper-pagination',
                },
                spaceBetween: 15,
            }
        }
    }
    
}