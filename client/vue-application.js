const Home = window.httpVueLoader('./components/Home.vue')
const User = window.httpVueLoader('./components/User.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const KnowledgeSharing = window.httpVueLoader('./components/KnowledgeSharing.vue')
const SearchKnowledge = window.httpVueLoader('./components/SearchKnowledge.vue')
const routes = [
  { path: '/', component: Home },
  { path: '/knowledgeSharings', component: SearchKnowledge },
    { path: '/knowledgeSharings/:ID', component: SearchKnowledge },
  { path: '/user', component: User },
  { path: '/login', component: Login },
  { path: '/knowledgeSharing', component: KnowledgeSharing , meta: {
    requiresAuth: true
} },
  { path: '/knowledgeSharing/:id', component: KnowledgeSharing }
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    user: {},
    isConnected: false
  },
  async mounted () {

  },
  methods: {
     logout(){
       this.user= {}
       this.isConnected = false
       this.$cookies.remove("cookie") 
    
   
     },
     myKnowledgeSharings(){
      this.$router.push('/knowledgeSharings/'+this.user.ID)
     }
  }
})
