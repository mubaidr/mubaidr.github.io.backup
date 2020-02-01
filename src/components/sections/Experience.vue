<template>
  <div class="section">
    <div class="columns">
      <div class="column is-2">
        <h2 class="title is-5 is-capitalized has-text-weight-light">
          {{ sections.experience.title }}
        </h2>
      </div>

      <div class="column is-10">
        <div class="tags">
          <span
            v-for="skill in sections.experience.list"
            :key="skill.title"
            class="tag is-light"
          >
            {{ skill.title }}
          </span>
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
    ...mapGetters(['sections'])
  }
}
</script>

<style></style>
