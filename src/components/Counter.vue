<template>
  <div id="counter"> 
      <label><strong>{{counter}}</strong></label><br>
      <button v-on:click="increment">+</button>
      {{space}}
      <button v-on:click="decrement">-</button>
          
    
  </div>
</template>

<script>
export default {

data(){
    return {
        counter:0,
        space: "  "
    }
},
methods:{
    increment:function() {
        this.counter++;
    },
    decrement:function() {
        if (this.counter-1 < 0) {
            this.counter= 0;
        } else {
            this.counter--;
        }
    }
}
   
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #counter{
        color:mediumpurple;
        font-size:20px;
    }
    
    button {
        background-color:grey;
        padding: 10px 30px;
        border-radius: 12px;
    }
</style>