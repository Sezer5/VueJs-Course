const app = Vue.createApp(
    {
        data(){
            return {
                skill:'',
                skills:[],
            }
        },
        watch:{
            
            
        },
        computed:{
           
        },
        methods:{
          addSkill(){
            this.skills.push(this.skill);
          }
        }
    }
);

app.mount('#frontend');