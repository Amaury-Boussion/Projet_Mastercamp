 
<template>
  <div style="text-align:center;">
    <h3 v-if="isCreate" >Création d' un projet</h3>
    <h3 v-if="!isCreate" >Modification d' un projet</h3>
    <form  @submit="submitKnowledgeSharing()">
     
      <input v-model="titre" placeholder="Titre" required>
        <input v-model="tags" placeholder="Tags" required>
          <input v-model="url" placeholder="Lien " required>
         <textarea class="form-control" rows="5" v-model="description" placeholder="Description" required></textarea>
       <input type="submit" v-if="isCreate" value="Enregistrer" >
       <input  type="submit" v-if="!isCreate" value="Modifier">
      
       
    </form>
     <input  type="submit" v-if="!isCreate" value="Supprimer" style="background:#DC143C;" v-on:click="deleteKnowledgeSharing()">
  </div>
</template>

<script>
module.exports = {
  props: {
    
  },
  data () {
    return {
      id:'',
      email: '',
      titre:'',
      description:'' ,
       tags:'' ,
        url:'' , 
      isCreate:true
    }
  },
   async mounted(){
  
      if(this.$cookies.get("cookie") ){
       var cookie =this.$cookies.get("cookie")  ;
        app.isConnected = cookie.isConnected
        app.user = cookie.user 
    }
 if(app.isConnected){
      var params = this.$route.params;
      var id = params.id || "";

      if(id != ""){
      var result = await axios.post('/api/knowledgeSharingById', { 
            id: id
          }) 
      var knowledgeSharing = result.data; 
    
       this.id = knowledgeSharing.IDprojet
       this.titre = knowledgeSharing.TitreProjet
       this.description = knowledgeSharing.DescriptionProjet
        this.url = knowledgeSharing.Lien
         this.tags = knowledgeSharing.Tag
       this.isCreate = false
  }
 }else{
    this.$router.push('/')
 }

     
     
     

  },
  methods: {
    async submitKnowledgeSharing(){
            if(this.isCreate){
          this.createKnowledgeSharing();
            }else{
              this.updateKnowledgeSharing();
            }
    },
    async createKnowledgeSharing() {
     
     var result = await axios.post('/api/createKnowledgeSharing', {
       id:app.user.ID,
  
        titre: this.titre,
        description: this.description,
        url : this.url,
        tags:this.tags
       
      }) 
     alert(result.data.message) 
        this.$router.push('/knowledgeSharings/'+app.user.ID)
    
         
    },
      async updateKnowledgeSharing() {
       
     var result = await axios.post('/api/updateKnowledgeSharing', {
       id:this.id,
      
        titre: this.titre,
        description: this.description,
        tags : this.tags,
        url:this.url
       
      }) 
       alert(result.data.message) 
        this.$router.push('/knowledgeSharings/'+app.user.ID)
        
         
    },
      async deleteKnowledgeSharing() {
     
     var result = await axios.post('/api/deleteKnowledgeSharing', {
       id:this.id 
       
      }) 
      alert(result.data.message)
        this.$router.push('/knowledgeSharings/'+app.user.ID)
         
         
    }
  }
}
</script>

<style scoped>

/* style the container */
.container {
  position: relative;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px 0 30px 0;
} 

/* style inputs and link buttons */
input,
.btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none; /* remove underline from anchors */
}

input:hover,
.btn:hover {
  opacity: 1;
}

/* add appropriate colors to fb, twitter and google buttons */
.fb {
  background-color: #3B5998;
  color: white;
}

.twitter {
  background-color: #55ACEE;
  color: white;
}

.google {
  background-color: #dd4b39;
  color: white;
}

/* style the submit button */
input[type=submit] {
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

/* Two-column layout */
.col {
  float: left;
  width: 50%;
  margin: auto;
  padding: 0 50px;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* vertical line */
.vl {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border: 2px solid #ddd;
  height: 175px;
}

/* text inside the vertical line */
.vl-innertext {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 8px 10px;
}

/* hide some text on medium and large screens */
.hide-md-lg {
  display: none;
}

/* bottom container */
.bottom-container {
  text-align: center;
  background-color: #666;
  border-radius: 0px 0px 4px 4px;
}

/* Responsive layout - when the screen is less than 650px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 650px) {
  .col {
    width: 100%;
    margin-top: 0;
  }
  /* hide the vertical line */
  .vl {
    display: none;
  }
  /* show the hidden text on small screens */
  .hide-md-lg {
    display: block;
    text-align: center;
  }
}
</style>
