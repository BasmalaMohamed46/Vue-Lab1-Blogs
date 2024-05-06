<template>
  <div class="container d-flex flex-column justify-content-center align-items-center mt-5">
    <FormComponent @send="HandleSend" />
    <div class="btn-group btn-group-lg mt-3" role="group" aria-label="User and Admin Buttons">
      <button class="btn btn-primary p-2" @click="flag='AdminComponent'">Admin</button>
      <button class="btn btn-success p-3" @click="flag='UserComponent'">Users</button>
    </div>
    <div class="row col-md-8">
        <div class="mt-4">
        <component :is="flag" :roleData="flag === 'AdminComponent' ? adminsData : usersData" @DeleteUser="DeleteUser" @DeleteAdmin="DeleteAdmin"></component>
        </div>
    </div>
  </div>
</template>
<script>
import FormComponent from './FormComponent.vue'
import AdminComponent from './AdminComponent.vue'
import UserComponent from './UserComponent.vue'
    export default {
        name: 'HomeComponent',
        components: {
            FormComponent,
            AdminComponent,
            UserComponent

        },
        data() {
            return {
                flag:"UserComponent",
                adminsData: [],
                usersData: []
            }
        },
        methods: {
        HandleSend(data) {
            this.adminsData = data.admins;
            this.usersData = data.users;
        },
        DeleteAdmin(index){
            this.adminsData.splice(index, 1);
        },
        DeleteUser(index){
            this.usersData.splice(index, 1);
        }
    }
}
</script>

<style scoped>

</style>