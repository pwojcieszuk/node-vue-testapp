<template>
  <div />
</template>

<script>
export default {
  name: 'Login',
  created() {
    localStorage.removeItem('jwt')
    this.$router.push('/')
  },
}
</script>