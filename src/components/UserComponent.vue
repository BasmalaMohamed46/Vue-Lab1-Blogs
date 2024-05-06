<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col text-center">
        <h1>Users</h1>
      </div>
    </div>
    <div class="row mt-3 justify-content-center">
      <div :class="columnClass" v-for="(role, index) in roleData" :key="index">
        <div class="card mb-3 fixed-card">
          <div class="card-body">
            <h5 class="card-title">Name: {{ role.name }}</h5>
            <p class="card-text">Age: {{ role.age }}</p>
            <p class="card-text">Role: {{ role.role }}</p>
            <button @click="DeleteUser(index)" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserComponent',
  props:['roleData'],
  data() {
    return {}
  },
  methods: {
    DeleteUser(index){
      this.$emit('DeleteUser', index);
    }
  },
  computed: {
    columnClass() {
      const count = this.roleData.length;
      if (count === 1) {
        return 'col-md-12';
      } else if (count === 2) {
        return 'col-md-6';
      } else {
        return 'col-md-4';
      }
    }
  },
}
</script>

<style scoped>

</style>
