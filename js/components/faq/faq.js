import store from '../../store.js'
import utilities from '../../utilities.js'
export default {
    template: await utilities.getPage('./js/components/faq/faq.html'),
    data(){
        return{
            utilities,
            store
        }
    }
}