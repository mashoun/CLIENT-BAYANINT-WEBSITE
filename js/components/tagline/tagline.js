import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/tagline/tagline.html'),
    props:['title'],
    
}