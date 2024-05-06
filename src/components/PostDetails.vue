<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header bg-dark text-white">
            <h1 class="card-title mb-0">Post Details</h1>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <strong>Id:</strong> {{ postDetails.id }}
            </div>
            <div class="mb-3">
              <strong>Title:</strong> {{ postDetails.title }}
            </div>
            <div class="mb-3">
              <strong>Body:</strong> {{ postDetails.body }}
            </div>
            <div class="mb-3">
              <strong>UserId:</strong> {{ postDetails.userId }}
            </div>
            <div class="mb-3">
              <strong>Tags:</strong>
              <ul class="list-inline">
                <li v-for="(tag, index) in postDetails.tags" :key="index" class="list-inline-item">{{ tag }}</li>
              </ul>
            </div>
            <div class="mb-3">
              <strong>Reactions:</strong> {{ postDetails.reactions }}
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <router-link :to="'/add/' + postDetails.id" class="btn btn-primary me-md-2">Edit</router-link>
              <button @click="deleteProduct(postDetails.id)" class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import getPostById from '../../public/Mixins/CRUD.js';
import deletePost from '../../public/Mixins/CRUD.js';
import GetAllPosts from '../../public/Mixins/CRUD.js';
    export default {
        name:'PostDetails',
        mixins: [getPostById,deletePost,GetAllPosts],
        data() {
            return {
                id:'',
                postDetails:{}
            }
        },
        created(){
            this.id = this.$route.params.id;
        },
        async mounted(){
          this.postDetails = Object.assign({}, await this.getPostById(this.id));


        },
        methods:{
            deleteProduct(id){
                this.deletePost(id);
            }
        }
    }
</script>

<style scoped>

</style>