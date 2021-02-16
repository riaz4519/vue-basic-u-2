const  app = Vue.createApp({
    //data ,functions
    //template: '<h2>I am the template</h2>'
    data(){
        return {
            title:"this is a book title",
            author : 'brandon ',
            age : 45
        }
    }
})

app.mount('#app')