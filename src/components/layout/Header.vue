<template>
  <div class="hero is-large is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 is-capitalized">{{ info.name }}</h1>
        <h2 class="subtitle is-5 has-text-weight-light">{{ info.title }}</h2>

        <div>
          <a
            v-for="profile in info.profiles"
            :key="profile.title"
            :href="profile.url"
            target="_blank"
            class="has-text-link"
          >
            {{ profile.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['info'])
  }
}
</script>

<style></style>
