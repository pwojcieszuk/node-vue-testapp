<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Hello',
  data() {
    return {
      msg: null,
      error: null,
    }
  },
  mounted() {
    const url = 'http://localhost:3000/api/v1/hello'
    const token =
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE1NjMzNjU1NjksImV4cCI6MTU2MzQwODc2OSwiaXNzIjoidGVzdCJ9.UhaYhbe64wFJU4bj2aJH4htuyf3WEMZpYmhXJa-JbmASqGOEkyruo1kuTN4HcAWEa9kruucplUp13sOvgKgBR2RjuHVDBq33OxaBl6quIn1DhrvHXamu5TM_WwMMwQKSL3WiNFuhsn9sUCAkencuRXt612W11Yyf8nyhuv0jJxg'

    axios
      .get(url, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then(
        response => {
          this.msg = response.data.msg || ''
        },
        error => {
          this.error = error
        }
      )
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
