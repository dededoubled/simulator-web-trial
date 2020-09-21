<template>
   <div class="flex flex-col relative md:max-w-6xl mx-auto mt-12 px-4">
      <div class="car__image_wrapper">
         <img class="mx-auto mt-20" :src="car[showcaseInfo.indexCar][showcaseInfo.color][showcaseInfo.position]" alt="">
      </div>
      <div class="nav__info flex flex-col absolute">
         <p class="pl-48 font-montserrat text-4xl font-semibold text-white">BMW X3 M</p>
         <p class="font-montserrat text-lg font-semibold text-white">Specification</p>
         <div class="nav__info-each flex flex-col min-w-0 mt-6">
            <div>
               <img class="w-8 inline" src="../assets/Icon Spek Kendaraan/speedometer.svg" alt="">
               <span>250(285) km/h</span>
            </div>
            <div>
               <img class="w-8 inline" src="../assets/Icon Spek Kendaraan/manual-transmission.svg" alt="">
               <span>automatic</span>
            </div>
            <div>
               <img class="w-8 inline" src="../assets/Icon Spek Kendaraan/weight.svg" alt="">
               <span>2.045 kg</span>
            </div>
            <div>
               <img class="w-8 inline" src="../assets/Icon Spek Kendaraan/fuel.svg" alt="">
               <span>14.1 / L</span>
            </div>
            <div>
               <img class="w-8 inline" src="../assets/Icon Spek Kendaraan/whell.svg" alt="">
               <span>255/40 ZR21</span>
            </div>
         </div>
      </div>
      <div class="nav__color absolute">
         <p class="font-montserrat font-semibold text-white border-b-2 border-white">Pilihan Warna</p>
         <div class="color_dot_wrapper flex flex-col items-center mt-6">
            <div @click="showcaseInfo.color = 0" class="w-10 h-10 rounded-full bg-gray-600"></div>
            <div @click="showcaseInfo.color = 1" class="w-10 h-10 rounded-full bg-blue-600"></div>
            <div @click="showcaseInfo.color = 2" class="w-10 h-10 rounded-full bg-red-600"></div>
         </div>
      </div>
      <div class="nav__rotate mt-8 text-center">
         <font-awesome-layers @click="changePosPrev" class="px-10 fa-2x text-white">
            <font-awesome-icon :icon="icoUndo"/>
         </font-awesome-layers>
         <font-awesome-layers @click="changePosNext" class="px-10 fa-2x text-white">
            <font-awesome-icon :icon="icoRedo"/>
         </font-awesome-layers>
      </div>
   </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

export default {
   data() {
      return {
         // icon
         maman: "mantul",
         icoUndo: faUndo,
         icoRedo: faRedo,
         // showcase info
         showcaseInfo: {
            indexCar: 0,
            color: 0,
            position: 0
         },
         car: [
            //bmw x3
            [
               // abu
               [
                  "https://res.cloudinary.com/dededoubled/image/upload/v1600718251/simulator-web-trial/bmx-x3/abu/abu_samping.png",
                  "https://res.cloudinary.com/dededoubled/image/upload/v1600718251/simulator-web-trial/bmx-x3/abu/abu_depan.png",
                  "https://res.cloudinary.com/dededoubled/image/upload/v1600718250/simulator-web-trial/bmx-x3/abu/abu_belakang.png"
               ],
               // biru
               [
                  "https://res.cloudinary.com/dededoubled/image/upload/v1600718209/simulator-web-trial/bmx-x3/biru/biru_samping.png",
                  "https://res.cloudinary.com/dededoubled/image/upload/v1600718175/simulator-web-trial/bmx-x3/biru/biru_depan.png",
                  "https://res.cloudinary.com/dededoubled/image/upload/v1600718157/simulator-web-trial/bmx-x3/biru/biru_belakang.png"
               ],
               // merah
               [
                  "https://res.cloudinary.com/dededoubled/image/upload/v1600718234/simulator-web-trial/bmx-x3/merah/merah_samping.png",
                  "https://res.cloudinary.com/dededoubled/image/upload/v1600718232/simulator-web-trial/bmx-x3/merah/merah_depan.png",
                  "https://res.cloudinary.com/dededoubled/image/upload/v1600718229/simulator-web-trial/bmx-x3/merah/merah_belakang.png"
               ]
            ],
            //car n
         ]
      }
   },
   components: {
      FontAwesomeIcon
   },
   methods: {
      changePosPrev() {
         console.log(this.showcaseInfo.position);
         if ( this.showcaseInfo.position === 0 ) {
            this.showcaseInfo.position = 2;
         } else {
            this.showcaseInfo.position--;
         }
      },
      changePosNext() {
         console.log(this.showcaseInfo.position);
         if ( this.showcaseInfo.position === 2 ) {
            this.showcaseInfo.position = 0;
         } else {
            this.showcaseInfo.position++;
         }
      }
   }
}
</script>

<style scope>
   .car__image_wrapper {
      width: 100%;
   }
   .car__image_wrapper>img {
      width: 650px;
      height: 300px;
      object-fit: contain ;
   }

   .nav__info {
      height: 100%;
   }
   .nav__info-each > div {
      @apply py-2;
   }

   .nav__info-each > div > span{
      @apply pl-4 font-montserrat font-semibold text-white align-middle;
   }

   .nav__color {
      height: 100%;
      top: 50px;
      right: 50px;
   }
   .color_dot_wrapper > div {
      @apply mt-4;
   }
   .nav__rotate {
      
   }
</style>