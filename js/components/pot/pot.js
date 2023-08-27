import store from '../../store.js'
import utilities from '../../utilities.js'
export default {
    template: await utilities.getPage('./js/components/pot/pot.html'),
    data(){
        return{
            utilities,
            store
        }
    },
    props:['data']
    
}