<template>
 <div>
  <div class="" style="border-radius: 20px;padding:20px;border:1px solid #ccc!important;cursor:pointer;margin-bottom:15px;"   >
    <h3  >Rechercher un projet</h3>
    
    
      <input v-model="auteur" placeholder="Auteur" >
      <input v-model="titre" placeholder="Titre" >
        <input v-model="tags" placeholder="Tags" >
          <input  type="submit"  value="Valider"   v-on:click="searchKnowledgeSharing()">
           <input  type="submit"  value="Rénitialiser"   v-on:click="resetKnowledgeSharing()">
      
      
       
    
    
  </div>



<div v-if="knowledgeSharings.length" > 
    <div class="row" style="border-radius: 20px;padding:20px;border:1px solid #ccc!important;cursor:pointer;margin-bottom:15px;" v-for="item of knowledgeSharings"  @click="selectTraineeship(item)">
      <div>
        Projet publié par : {{item.firstname}} {{item.lastname}} , le {{Date(item.Date_d_archivage)}}
      </div>
      
      <div>
        Titre : {{item.TitreProjet}}
      </div>
       <div>
        Lien : {{item.Lien}}
      </div>
       <div>
        Tags : {{item.Tag}}
      </div>
      <div>
         Description : {{item.DescriptionProjet}}
      </div>
    </div>
</div>
   
 <div   style="border-radius: 20px;padding:20px;border:1px solid #ccc!important;cursor:pointer;margin-bottom:15px;"  v-else>
  <div>
     Aucun Projets
  </div>
 
</div>
</div>
</template>

<script>
module.exports = {
  props: {
   
  },
  data () {
    return {
     knowledgeSharings : [],
     ID:'',
         auteur: '',
      titre:'',
     
      tags:""
    }
  },
  async mounted(){
 
    if(this.$cookies.get("cookie") ){
      var cookie =this.$cookies.get("cookie")  ;
      app.isConnected = cookie.isConnected
      app.user = cookie.user
    }
  var params = this.$route.params;
  var ID = params.ID || "";
  this.ID = ID;
  if(!app.isConnected){
    ID = "";
  }
     var result = await axios.post('/api/knowledgeSharings', { 
        ID: ID 
      })
    
      this.knowledgeSharings = result.data;

  },
  methods: {
     selectTraineeship(item){
   
       if(app.isConnected && app.user.ID == item.ID)
         this.$router.push('/knowledgeSharing/'+item.IDProjet)
     },
     async resetKnowledgeSharing(){
    
     this.titre = "";
     this.auteur = "";
        var result = await axios.post('/api/knowledgeSharings', { 
        ID: this.ID
      })
    
      this.knowledgeSharings = result.data;
     },
     async searchKnowledgeSharing(){
      var result = await axios.post('/api/knowledgeSharings', { 
        ID: this.ID,
        titre : this.titre,
        tags : this.tags,
        auteur:this.auteur

      })
    
      this.knowledgeSharings = result.data;
     }
  }
}
</script>
 
<style scoped>
.row:hover{
  background:lightblue;
}
 
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

