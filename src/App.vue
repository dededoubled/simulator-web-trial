<template>
  <div id="app">
    <app-contact-top></app-contact-top>
    <app-header></app-header>
    <app-image-slider></app-image-slider>
  </div>
</template>

<script>
import ContactTop from './components/ContactTop.vue'
import Header from './components/Header.vue'
import ImageSlider from './components/ImageSlider.vue'

export default {
  components: {
    appContactTop: ContactTop,
    appHeader: Header,
    appImageSlider: ImageSlider
  }
}
</script>
