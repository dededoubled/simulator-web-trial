<template>
  <div id="app">
    <app-contact-top></app-contact-top>
    <app-header></app-header>
  </div>
</template>

<script>
import ContactTop from './components/ContactTop.vue';
import Header from './components/Header.vue';

export default {
  components: {
    appContactTop: ContactTop,
    appHeader: Header
  }
}
</script>
