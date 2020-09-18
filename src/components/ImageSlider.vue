<template>
   <div class="md:max-w-6xl mx-auto mt-6 px-4">
      <agile :dots="true" :infinite="true" :navButtons="false">
         <div class="slide">
            <img src="../assets/slide-1.jpg" alt="">
         </div>
         <div class="slide">
            <img src="../assets/slide-2.jpg" alt="">
         </div>
         <div class="slide">
            <img src="../assets/slide-3.jpg" alt="">
         </div>
         <div class="slide">
            <img src="../assets/slide-4.jpg" alt="">
         </div>
         <div class="slide">
            <img src="../assets/slide-5.jpg" alt="">
         </div>
         <template slot="prevButton">
            <font-awesome-icon :icon="icoArrowLeft"/>
         </template>
         <template slot="nextButton">
            <font-awesome-icon :icon="icoArrowRight"/>
         </template>
      </agile>
   </div>
</template>

<script>
import { VueAgile } from 'vue-agile'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

export default {
   data() {
      return {
         icoArrowLeft: faArrowLeft,
         icoArrowRight: faArrowRight
      }
   },
   components: {
      agile: VueAgile,
      FontAwesomeIcon
   }
}
</script>

<style scope>
   .agile__list {
      height: 420px;
      @apply rounded-md border-b-4 border-d-niagara;
   }
   .agile__track {
      height: inherit;
   }
   .agile__slide {
      height: inherit;
   }
   
   .agile__actions {
      @apply absolute min-w-full;
      /* top: 45%; */
      top: 90%
   }
   .agile__nav-button {
      @apply font-semibold text-3xl text-d-white;
   }
   .agile__nav-button--prev {
      @apply pl-6 text-d-white;
   }
   .agile__nav-button--next {
      @apply pr-6 text-d-white;
   }

   .agile__dots {
      @apply absolute text-d-white;
      top: 470%;
   }
   .agile__dot button {
      @apply w-6 h-1 bg-white mx-1 rounded-sm;
   }
   .agile__dot--current button {
      @apply bg-d-niagara;
   }
</style>