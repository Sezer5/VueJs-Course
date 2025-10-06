const app = Vue.createApp(
    {
        data(){
            return {
                counter:0,
                name:'',
                lastName:'',
                fullName:'',
            }
        },
        watch:{
            counter(value){
                if(value>20){
                    this.counter=0;
                }
            },
            name(value){
                if(value == ''){
                    this.fullName='';
                }else{
                    this.fullName=value+' '+this.lastName;
                }
                
            },
            lastName(value){
                if(value == ''){
                    this.fullName='';
                }else{
                    this.fullName=this.name+' '+value;
                }
            }
        },
        computed:{
            fullNameComputed(){
                console.log("Execute edildi");
                if(this.name == '' || this.lastName == ''){
                    return '';
                }
                return this.name+' '+'Ünalmış';
            }
        },
        methods:{
            fullName(){
                console.log("Execute edildi");
                if(this.name == ''){
                    return '';
                }
                return this.name+' '+this.lastName;
            },
            reset(){
                this.name='';
            },
            login(event){
                // event.preventDefault();
                
                alert('Giriş Yapıldı');
            },
            setName(event){
                // debugger;
                this.name=event.target.value;
            },
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