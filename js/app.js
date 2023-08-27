import "../js/bootstrap.min.js"
import store from './store.js'
import utilities from './utilities.js'
var app = Vue.createApp({
    data(){
        return{
            title:'Bayan International Group',
            store,
            utilities,
            spinner:false
        }
    },
    mounted(){
        this.spinner = true
        fetch(this.store.getApi() + "?&getProfile=1").then(res => res.json()).then(res => {
            console.log(res);
            this.store.profile = res
            this.spinner = false
        })
        .catch(err => {
            alert('Weak network please refresh')
            console.log(err);
            location.reload()
        })
    }
})

import swiper from './components/swiper/swiper.js'
app.component('swiper-container',swiper)

import navbar from './components/navbar/navbar.js'
app.component('navbar',navbar)

import hero from './components/hero/hero.js'
app.component('hero-section',hero)

import tagline from './components/tagline/tagline.js'
app.component('tagline',tagline)

import pot from './components/pot/pot.js'
app.component('pot',pot)

import majors from './components/majors-section/majors-section.js'
app.component('majors-section',majors)

import partners from './components/partners/partners.js'
app.component('partners-section',partners)

import faq from './components/faq/faq.js'
app.component('faq-section',faq)

import contact from './components/contact-section/contact-section.js'
app.component('contact-section',contact)

app.mount('#app')