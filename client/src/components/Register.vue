<template>
 <v-layout column>
  <v-flex  offset-1>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Rejestracja</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
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
          placeholder="haslo"/>
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn
            class="cyan"
            @click="register">
            zarejestruj sie
          </v-btn>
        </div>
      </div>
  </v-flex>
 </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async  register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
 color: red;
}
</style>
