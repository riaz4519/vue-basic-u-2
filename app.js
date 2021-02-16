const  app = Vue.createApp({
    //data ,functions
    //template: '<h2>I am the template</h2>'
    data(){
        return {
            title:"this is a book title",
            author : 'brandon ',
            age : 45
        }
    },
    methods:{
      changeTitle(title){
          this.title = title
      }
    }
})

app.mount('#app')