<template>
  <div id="app" class="is-family-code">
    <section-header></section-header>
    <div class="container">
      <section-about></section-about>
      <section-skills></section-skills>
      <!-- <section-experience></section-experience> -->
    </div>
    <section-footer></section-footer>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import About from './components/sections/About.vue'
import Skills from './components/sections/Skills.vue'
// import Experience from './components/sections/Experience.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    'section-header': Header,
    'section-about': About,
    // 'section-experience': Experience,
    'section-skills': Skills,
    'section-footer': Footer
  }
}
</script>

<style></style>
