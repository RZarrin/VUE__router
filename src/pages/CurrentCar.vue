<template>
  <main class="main">
    <div class="container">
        <div class="main__item">
            <div class="main__item-img">
                <img :src="getCar.img" alt="">
            </div>
            <img src="" alt="">
            <h2>{{ getCar.tittle }}</h2>
            <p> {{ getCar.text }}</p>
            <router-link to="/cars">Перейти назад</router-link>
        </div>
    </div>
  </main>
</template>

<script>

import bd from '@/bd.js'

export default {
    data() {
        return {
            cars: bd,
            currentId: null
        }
    },
    created() {
        this.currentId = this.$route.params.id
    },
    computed:{
        getCar() {
            return this.cars.find(car => car.id == this.currentId)
        }
    }
}
</script>

<style>

</style>