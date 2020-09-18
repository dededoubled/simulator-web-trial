<template>
   <div class="gap__component md:max-w-6xl mx-auto mt-8 px-4 font-montserrat">
      <span class="px-5 text-d-niagara text-3xl capitalize">
         {{ title1 }}
         <span class="text-white">{{ title2 }}</span>
      </span>
   </div>
</template>

<script>
export default {
   props: {
      title1: {
         type: String,
      },
      title2: {
         type: String,
      }
   }
}

</script>

<style scope>
   .gap__component {
      @apply flex;
   }
   .gap__component:before{
      content: "";
      max-width: 25px;
      flex: 100;
      transform: translateY(-17px);
      @apply block border-b-4 border-d-rhino;
   }
   .gap__component:after{
      content: "";
      flex: 100;
      transform: translateY(-17px);
      @apply block border-b-4 border-d-rhino;
   }
</style>