<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <img src="../assets/post2.png" alt="post" width="5%" height="5%" >
      <router-link class="navbar-brand" to="/">Blogs</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link" :class="{ 'active': $route.path === '/' }" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ 'active': $route.path === '/posts' }" to="/posts">Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ 'active': $route.path === '/add' }" to="/add">Add Post</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarComponent",
};
</script>

<style scoped>
.navbar-brand {
  font-size: 1.9rem;
  margin-left: 3%; 
}
.nav-link {
  font-size: 1.2rem;
  margin-right: 90px;
}
.nav-link.active {
  font-weight: bold;
}
</style>
