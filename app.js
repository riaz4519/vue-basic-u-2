const  app = Vue.createApp({
    //data ,functions
    //template: '<h2>I am the template</h2>'
    data(){
        return {
            showBooks:true,
            title:"this is a book title",
            author : 'brandon ',
            age : 45,
            x:0,
            y:0
        }
    },
    methods:{
        toggleShowBooks(){

            this.showBooks = !this.showBooks

        },
        handleEvent(e,data) {
            console.log(e,e.type)
            if (data){
                console.log(data)
            }
        },
        handleMouseMove(e){

            this.x = e.offsetX
            this.y = e.offsetY

        }
    }
})

app.mount('#app')