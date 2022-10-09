<template>
    <div class="wrapper">
      <Header :links="links"/>
      <router-view/>
    </div>
</template>

<script>

import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
  data() {
    return {
      links: [
        {tittle: 'Home', url: '/'},
        {tittle: 'About', url: '/about'},
        {tittle: 'Cars', url: '/cars'},
      ]
    }
  }
}
</script>

<style>

</style>