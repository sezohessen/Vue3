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
            books:[
                {title:'Art Of War',author:'gnkez khan'},
                {title:'Time 100',author:'US Top 100'},
                {title:'Mohamed Ali',author:'Ali'},
                {title:'Taha Hussien',author:'Taha'},
            ]
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
        }
    },
})
app.mount('#app')