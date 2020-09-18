<template>
   <div class="bg-d-rhino py-4">
      <header class="flex justify-between items-center md:max-w-6xl md:mx-auto px-4">
         <a href="#">
            <img src="https://res.cloudinary.com/dededoubled/image/upload/v1586530715/doubled.png" alt="" class="w-10 sm:w-16">
         </a>
         <div class="sm:flex sm:flex-row hidden font-montserrat capitalize"> 
            <ul class="flex">
               <li class="dropdown relative inline-block">
                  <a href="#" class="text-lg px-6 py-1 font-semibold text-white">list game +</a>
                  <ul class="dropdown-menu invisible absolute min-w-0 mt-10 py-4 bg-black text-white font-semibold font-montserrat whitespace-no-wrap bg-opacity-75 rounded-md  border-b-4 border-d-niagara">
                     <li>
                        <a href="#">UK Truck Simulator</a>
                     </li>
                     <li>
                        <a href="#">Euro Truck Simulator</a>
                     </li>
                     <li>
                        <a href="#">Bus Simulator indonesia</a>
                     </li>
                  </ul>
               </li>
               <li>
                  <a href="#" class="text-lg px-6 py-1 font-semibold text-white">mods +</a>
               </li>
               <li>
                  <a href="#" class="text-lg px-6 py-1 font-semibold text-white">kontak</a>
               </li>
            </ul>
         </div>
      </header>
   </div>
</template>

<script>
export default {
   data() {
      return {
         dropdown: false
      }
   },
   methods: {
      mouserEnter() {
         this.dropdown = !this.dropdown;
         console.log(this.dropdown);
      },
      mouseLeave() {
         this.dropdown = !this.dropdown;
         console.log(this.dropdown);
      }
   },
   // computed: {
   //    cekMousePosition() {
   //       console.log(event.clientX);
   //    }
   // }
}
</script>

<style scope>
   .dropdown>ul {
      z-index: 2;
   }
</style>