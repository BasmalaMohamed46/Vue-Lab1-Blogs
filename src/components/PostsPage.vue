<template>
  <div class="container mt-5">
    <h1 class="mb-4">Posts</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">UserId</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.userId }}</td>
          <td>
            <button @click="deletePost(post.id)" class="btn btn-danger me-2">Delete</button>
            <router-link :to="'/posts/' + post.id" class="btn btn-primary me-2">Details</router-link>
            <router-link :to="'/add/' + post.id" class="btn btn-primary">Edit</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



<script>
import GetAllPosts from '../../public/Mixins/CRUD.js';
import DeletePost from '../../public/Mixins/CRUD.js';
import GetPostById from '../../public/Mixins/CRUD.js';
    export default {
        name:'PostsPage',
        mixins: [GetAllPosts, DeletePost, GetPostById],
        data() {
            return {
               postsInPage:[]
            }
        },
        methods:{
            DeletePost(id){
                this.deletePost(id);
            },
        },
        mounted(){
            this.GetAllPosts();
            this.postsInPage = this.posts;
        }
    }
</script>

<style scoped>

</style>