<template>
  <p v-if="error" class="error">{{ error }}</p>
</template>

<script>
export default {
  name: 'Error',
  data() {
    return {
      error: null,
    }
  },
  mounted() {
    this.$root.$on('error', error => (this.error = error))
    this.$root.$on('clearError', () => (this.error = null))
  },
}
</script>
