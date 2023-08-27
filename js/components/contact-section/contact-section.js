import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('./js/components/contact-section/contact-section.html'),
    data(){
        return{
            utilities,
            store
        }
    }
}