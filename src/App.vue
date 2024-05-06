<template>

  <NavBarComponent v-if="!$route.meta.hideNavbar"/>
 <router-view></router-view>
</template>

<script>
import CRUD from '../public/Mixins/CRUD.js'
import NavBarComponent from './components/NavBarComponent.vue'

export default {
  name: 'App',
  mixins: [CRUD],
  components: {
    NavBarComponent,
    
  }
}
</script>

<style>

</style>
