<template>
  <div class="login">
    <button @click="auth">Login</button>
  </div>
</template>

<script>
import { get } from '../utils/request'

export default {
  name: 'Login',
  methods: {
    auth() {
      get('tokens').then(
        response => {
          response.data.token &&
            localStorage.setItem('jwt', response.data.token)
          this.$router.push('/')
        },
        error => {
          this.$root.$emit('error', error)
        }
      )
    },
  },
}
</script>