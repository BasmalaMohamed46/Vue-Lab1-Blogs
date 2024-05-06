<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header bg-dark text-white">
            <h3 class="mb-0">Post Form</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="!paramsId ? createPost() : updatePost()">
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" v-model.lazy="formData.title" class="form-control">
              </div>
              <div class="form-group">
                <label for="body">Body:</label>
                <input type="text" id="body" name="body" v-model.lazy="formData.body" class="form-control">
              </div>
              <div class="form-group">
                <label for="userId">UserId:</label>
                <input type="text" id="userId" name="userId" v-model.lazy="formData.userId" class="form-control">
              </div>
              <div class="form-group">
                <label for="tags">Tags:</label>
                <input type="text" id="tags" name="tags" v-model.lazy="formData.tags" class="form-control">
              </div>
              <div class="form-group">
                <label for="reactions">Reactions:</label>
                <input type="number" id="reactions" name="reactions" v-model.lazy.number="formData.reactions" class="form-control">
              </div>
              <div class="form-group mt-4">
                <button type="submit" class="btn btn-success btn-block" v-if="!this.paramsId">Add</button>
                <button type="submit" class="btn btn-primary btn-block" v-else>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import addPost from '../../public/Mixins/CRUD.js';
import updatePostById from '../../public/Mixins/CRUD.js';
import getPostById from '../../public/Mixins/CRUD.js';

    export default {
        name: 'AddPost',
        mixins: [addPost,updatePostById,getPostById],
        data() {
            return {
                paramsId: '',
                formData:{
                    title: '',
                    body: '',
                    userId: '',
                    tags: [],
                    reactions: ''
                }
            }
        },
            async created() {
            this.paramsId = this.$route.params.id;
            if (this.paramsId) {
            const formDataCopy = Object.assign({}, await this.getPostById(this.paramsId));
            this.formData = {
                title: formDataCopy.title,
                body: formDataCopy.body,
                userId: formDataCopy.userId,
                tags: formDataCopy.tags.join(','),
                reactions: formDataCopy.reactions
            };
            }
        },

        methods:{
            createPost() {
            const post = {
                title:this.formData.title,
                body:this.formData.body,
                userId:this.formData.userId,
                tags:this.formData.tags.split(','),
                reactions:this.formData.reactions
            };
            this.addPost(post);
            
            },
            updatePost() {
            const post={
                title:this.formData.title,
                body:this.formData.body,
                userId:this.formData.userId,
                tags:this.formData.tags.split(','),
                reactions:this.formData.reactions
            };
            this.updatePostById(this.paramsId, post);
            
            },
        }
    }
</script>

<style scoped>

</style>