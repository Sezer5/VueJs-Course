const app = Vue.createApp(
    {
        data(){
            return {
                counter:0,
                mesaj:'',
            }
        },
        watch:{
            counter(value){
                if(value<25){
                    this.mesaj='Değerin Altındasınız';
                }
                if(value>25){
                    this.mesaj='Değerin Üstündesiniz';
                }

                if(value==0){
                    this.mesaj='-';
                }
            },
            
        },
        computed:{
            
        },
        methods:{
            add(number){
                this.counter=this.counter+number;
            },
            reduce(number){
                this.counter=this.counter-number;
            },
        }
    }
);

app.mount('#frontend');