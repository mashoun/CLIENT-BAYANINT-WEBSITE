import store from '../../store.js'
import utilities from '../../utilities.js'
export default {
    template: await utilities.getPage('./js/components/navbar/navbar.html'),
    data(){
        return{
            utilities,
            store
        }
    },
    mounted(){
        document.addEventListener('scroll', e => {
            if(window.scrollY > 1) document.querySelector('header').classList.add('position-fixed')
            else document.querySelector('header').classList.remove('position-fixed')
        })
    }
    
}