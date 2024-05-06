<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="alert alert-danger" role="alert">
          <h4 class="alert-heading">Error</h4>
          <p>Sorry, something went wrong.</p>
          <hr>
          <p class="mb-0">Please try again later.</p>
        </div>
        <button @click="handleBack" class="btn btn-primary">Back Home</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  methods: {
    handleBack() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
</style>
