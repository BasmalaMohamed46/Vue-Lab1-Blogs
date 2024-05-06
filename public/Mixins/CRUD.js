import axios from "axios"

export default{
    data(){
        return{
            posts: [],
            onePost:{},
        }
    },
    methods:{
        GetAllPosts(){
            axios.get('http://localhost:3000/posts')
            .then(response => {
                this.posts=response.data
            })
            .catch(error => {
                console.log(error)
                throw error
            })
        },
        deletePost(id){
            axios.delete(`http://localhost:3000/posts/${id}`)
            .then(()=>{
                this.GetAllPosts()
                this.$router.push('/posts');
            }
            )
            .catch(error => {
                console.log(error)
                throw error
            })
        },
        getPostById(id) {
            return axios
              .get(`http://localhost:3000/posts/${id}`)
              .then((res) => {
                return res.data;
              })
              .catch((err) => {
                console.log(err);
              });
          },
        addPost(post){
            axios.post('http://localhost:3000/posts', post)
            .then(()=>{
                this.GetAllPosts() 
                this.$router.push('/posts');
            })
            .catch(error => {
                console.log(error)
                throw error
            })
        },
        updatePostById(id,data){
            console.log(data)
            axios.put(`http://localhost:3000/posts/${id}`,data)
            .then(()=>{
                this.GetAllPosts()
                this.$router.push('/posts');
            })
              .catch((error)=>{
                  console.log(error)
              })
           }


    }
}