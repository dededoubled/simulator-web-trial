<template>
   <div class="mod__panel__wrap flex md:max-w-6xl mx-auto mt-8 px-4 text-d-white">
      <div class="flex md:w-4/12 mr-4 h-24 p-4 bg-d-rhino">
         <div class="w-16 ml-4 mr-5 self-center">
            <img src="../assets/map.svg" alt="">
         </div>
         <div class="font-montserrat font-semibold self-center">
            <p class="text-left">Maps</p>
            <p class="text-d-niagara">View Content</p>
         </div>
      </div>
      <div class="flex md:w-4/12 mx-4 h-24 p-4 bg-d-rhino">
         <div class="w-16 ml-4 mr-5 self-center">
            <img src="../assets/bus.svg" alt="">
         </div>
         <div class="font-montserrat font-semibold self-center">
            <p class="text-left">Vehicle</p>
            <p class="text-d-niagara">View Content</p>
         </div>
      </div>
      <div class="flex md:w-4/12 mx-4 h-24 p-4 bg-d-rhino">
         <div class="w-16 ml-4 mr-5 self-center">
            <img src="../assets/paint-palette.svg" alt="">
         </div>
         <div class="font-montserrat font-semibold self-center">
            <p class="text-left">Livery</p>
            <p class="text-d-niagara">View Content</p>
         </div>
      </div>
      <div class="flex md:w-4/12 ml-4 h-24 p-4 bg-d-rhino">
         <div class="w-16 ml-4 mr-5 self-center">
            <img src="../assets/tyre.svg" alt="" class="text-d-niagara">
         </div>
         <div class="font-montserrat font-semibold self-center">
            <p class="text-left">Accesories</p>
            <p class="text-d-niagara">View Content</p>
         </div>
      </div>
   </div>
</template>

<script>

export default {
   data() {
      return {
      }
   },
   components: {
      
   }
}
</script>

<style scope>
   .mod__panel__wrap>div{
      @apply  rounded-md;
   }
</style>