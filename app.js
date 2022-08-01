const app = Vue.createApp({
    //data ,functions
   /*  template:'<h2>Hello From Vue</h2>', */
    data() {
        return {
            title:'Sezo',
            ok:false,
            age:1,
            ShowBooks:false,
            x:0,
            y:0,
            path:'assets/',
            books:[
                {title:'Art Of War',author:'gnkez khan',img:'1.jpg',isFav:false},
                {title:'Time 100',author:'US Top 100',img:'2.png',isFav:true},
                {title:'Mohamed Ali',author:'Ali',img:'3.jpg',isFav:false},
                {title:'Taha Hussien',author:'Taha',img:'1.jpg',isFav:true},
            ],
            faceURL:'http://www.facebook.com',
            twitterURL:'http://www.twitter.com'
        }
    },
    methods: {
        changeTitle(){
            this.title = 'Ahmed'
        },
        ToggleBooks(){
            this.ShowBooks = !this.ShowBooks
        },
        handleEvent(e,num){
            console.log(e,e.type)
            if(num)console.log(num)
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        ToggleFav(index){
            this.books[index].isFav = !this.books[index].isFav
        },
        ToggleFavVersion2(book){
        book.isFav = !book.isFav
        }
    },
    computed:{
        favBooks(){
            return this.books.filter((book)=> book.isFav)
        }
    }
})
app.mount('#app')