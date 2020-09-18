<template>
   <div class="flex justify-between md:max-w-6xl mx-auto px-4 py-2">
      <ul class="flex">
         <li class="contact-box hover:bg-d-facebook">
            <a href="#" class="mx-auto">
               <font-awesome-icon :icon="['fab', 'facebook-f']"/>
            </a>
         </li>
         <li class="contact-box hover:bg-d-youtube">
            <a href="#" class="mx-auto">
               <font-awesome-icon :icon="['fab', 'youtube']"/>
            </a>
         </li>
         <li class="contact-box hover:bg-d-twitter">
            <a href="#" class="mx-auto">
               <font-awesome-icon :icon="['fab', 'twitter']"/>
            </a>
         </li>
      </ul>
      <ul class="flex">
         <li class="px-3 font-semibold font-montserrat text-d-white capitalize">
            masuk
            <font-awesome-icon :icon="['fas', 'sign-in-alt']"></font-awesome-icon>
         </li>
      </ul>
   </div>
</template>