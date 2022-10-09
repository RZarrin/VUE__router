<template>
  <main class="main" v-if="loading">
    <div class="container">   
    <div class="main__about">
      <div class="main__about-item" v-for="user in users" :key="user.id">
        <p>Name: {{ user.Name }}</p>
        <p>UserName: {{ user.username }}</p>
        <a :href="`mailto:${user.email}`">{{ user.email }}</a>
        <h2>City: {{ user.address.city }}</h2>
      </div>
    </div>
    </div>
  </main>
  <div class="main__loading" v-else>
    <div class="main__loading-el"></div>
  </div>
</template>

<script>
export default {
       data() {
        return {
          users: null,
          loading: false
        }
       },
  methods: {
    async getUser() {
      try {
        const result = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await result.json()
        this.users = data
      } catch (error) {
        console.log('Произошлa ошибка при получении пользователей')     
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.getUser()
      this.loading = true
    },2000)
  },
         
}
</script>

<style>

</style>