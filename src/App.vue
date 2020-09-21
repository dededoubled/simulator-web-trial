<template>
  <div id="app">
    <app-contact-top></app-contact-top>
    <app-header></app-header>
    <app-image-slider></app-image-slider>
    <app-mod-panel></app-mod-panel>
    <app-gap-component 
      title1="vehicle"
      title2="showchase"
    />
    <app-vehicle-showcase></app-vehicle-showcase>
  </div>
</template>

<script>
import ContactTop from './components/ContactTop.vue'
import Header from './components/Header.vue'
import ImageSlider from './components/ImageSlider.vue'
import ModPanel from './components/ModPanel.vue'
import GapComponent from './components/GapCompnent.vue'
import VehicleShowcase from './components/VehicleShowcase.vue'

export default {
  components: {
    appContactTop: ContactTop,
    appHeader: Header,
    appImageSlider: ImageSlider,
    appModPanel: ModPanel,
    appGapComponent: GapComponent,
    appVehicleShowcase: VehicleShowcase
  }
}
</script>
