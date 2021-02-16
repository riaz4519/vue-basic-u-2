const  app = Vue.createApp({
    //data ,functions
    //template: '<h2>I am the template</h2>'
    data(){
        return {
            showBooks:true,
            books:[
                {title:'new book 1',author:'kew na 1'},
                {title:'new book 2',author:'kew na 2'},
                {title:'new book 3',author:'kew na 3'},
            ]

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