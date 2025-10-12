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
          },
          deleteSkill(index){
            this.skills.splice(index,1);
          }
        }
    }
);

app.mount('#frontend');