<template>
  <div>
    <h1>Rejestracja</h1>

    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email"/>
      <br>

    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"/>
      <br>
      <button
        @click="register">
        zarejestruj sie</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  methods: {
    async  register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
<style scoped>

</style>
