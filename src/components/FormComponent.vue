<template>
  <div class="container mt-5">
    <form @submit.prevent="HandleAdd()" class="row g-3">
      <div class="col-md-6">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter Your Name" v-model.lazy.trim="formData.name" required>
      </div>
      <div class="col-md-6">
        <label for="age" class="form-label">Age</label>
        <input type="number" class="form-control" id="age" placeholder="Enter Your Age" v-model.lazy.number="formData.age" required>
      </div>
      <div class="col-md-6">
        <label for="role" class="form-label">Role</label>
        <select class="form-select" id="role" v-model="formData.role" required>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        name: 'FormComponent',
        emits: ['send'],
        data() {
            return {
                formData:{
                    name: '',
                    age: '',
                    role: 'user'
                },
                allArrays: {
                    admins: [],
                    users: []
                }
            }
        },
        methods: {
            HandleAdd(){
                const formDataCopy = Object.assign({}, this.formData);
                if(formDataCopy.role === 'admin'){
                    this.allArrays.admins.push(formDataCopy);
                } else if(formDataCopy.role === 'user'){
                    this.allArrays.users.push(formDataCopy);
                }
                this.$emit('send', this.allArrays);

                console.log("Users", this.allArrays.users);
                console.log("Admins", this.allArrays.admins);

                this.formData.name = '';
                this.formData.age = '';
                this.formData.role = 'user';
           }
        }
    }
</script>

<style scoped>

</style>