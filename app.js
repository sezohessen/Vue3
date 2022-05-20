const app = Vue.createApp({
    //data ,functions
   /*  template:'<h2>Hello From Vue</h2>', */
    data() {
        return {
            title:'Sezo',
            ok:false,
            age:1
        }
    },
    methods: {
        changeTitle(){
            this.title = 'Ahmed'
        }
    },
})
app.mount('#app')