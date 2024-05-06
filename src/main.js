import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import HomeComponent from './components/HomeComponent.vue'
import PostsPage from './components/PostsPage.vue'
import PostDetails from './components/PostDetails.vue'
import AddPost from './components/AddPost.vue'
import ErrorPage from './components/ErrorPage.vue'
const routes=[
    {path:'/',component:HomeComponent},
    {path:'/posts', component:PostsPage},
    {path:'/posts/:id', component:PostDetails},
    {path:'/add', component:AddPost},
    {path:'/add/:id', component:AddPost},
    {path:'/:notFound(.*)',component:ErrorPage, meta:{hideNavbar:true}}

]
let router=createRouter({
    history:createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
