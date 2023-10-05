<script >

 export default {



   methods:{
     increment(){
       this.$store.commit('increment')
     },
     increment2(){
       this.$store.dispatch('increment')
     },
     squareCount(){
       this.$store.getters.squareCount
     }
   }
 }
</script>

<template>
<div>
  <button @click = 'increment'>Click</button>
  <button @click = 'increment2'>Click with delay </button>
  {{$store.state.count}}
  {{$store.getters.squareCount}}
</div>
</template>

<style scoped>

</style>
