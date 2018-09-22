new Vue({
    el:'#vue-app',
    data:{
        name:'',
        age:'19',
        college:'Crescent University',
        degree:'B.Tech',
        salary:10000,
        skills:'Software Engineer.',
        website:'<a href="www.amazon.com"> Amazon INC</a>',
        go:'go',
        points:0,
        a:0,
        b:0
        

    },
    methods:{

        newsFeed:function(time){
            return 'Good'+time + this.name;
        },
        addPoints:function(inc){

            this.points += inc;
        },
        subPoints:function(dec){

            this.points -= dec;
        },
        logName:function(){
            console.log('You entered your name');

        },
        logSkills:function(){
            console.log('You Entered your Skills');
        },
        addtoA:function(){
            return this.a + this.salary;
        },
        addtoB:function(){
            return this.b + this.salary;
        }
    }
}),
new Vue({

    el:'#fullshade',
    data:{
        namee:'',
        skillss:''
    }
}


);