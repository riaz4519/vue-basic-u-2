const  app = Vue.createApp({
    //data ,functions
    //template: '<h2>I am the template</h2>'
    data(){
        return {
            url:'https://www.google.com',
            showBooks:true,
            books:[
                {title:'new book 1',author:'kew na 1',img:'assets/1.jpg',isFav:true},
                {title:'new book 2',author:'kew na 2',img:'assets/2.jpg',isFav:false},
                {title:'new book 3',author:'kew na 3',img:'assets/3.jpg',isFav:true},
            ]

        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        toggleFav(book){

            book.isFav = !book.isFav

        }

    }
})

app.mount('#app')