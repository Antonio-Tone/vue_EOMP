<template>
    <div class="mx-auto d-flex justify-content-center my-5 main">
      <h1 class="head style">My Projects</h1>
    </div>
    <div class="row mx-auto">
     <div v-for="card in projects" :key="card.id" :data-aos="projects.aos" class="col-6 col-md-4 mb-5 col-12 col-md-4 mx-auto d-flex justify-content-center">
      <div>
        <div class="col-4">
        <div>
          <div class="card mx-auto my-5" style="width: 18rem">
            <img
              :src="card.image_url"
              id="img2"
              class="card-img-top"
              alt="project"
            />
            <div class="card-body">
              <h5 class="card-title style">{{ card.title }}</h5>
              <p class="card-text style">
                {{ card.description }}
              </p>
              <a :href="card.github_url" target="blank" class="btn btn-info text-white">GitHub</a>
              <a :href="card.live_url" target="blank" class="btn btn-info text-white mx-3" id="btn">Live</a>
            </div>
          </div>
        </div>
    </div>
    </div>
    </div>
    </div>
</template>
<script>
export default {
  computed:{
    projects(){
      return this.$store.state.projects
    }
  },
  mounted(){
this.$store.dispatch("getProjects")

  }
    
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poltawski+Nowy:ital@1&display=swap");
    #img2{
      height: 150px;
      width: 100%;
    }
    .main{
      margin-top:6rem !important ;
    }
.style{
  font-family: 'Poltawski Nowy';
font-style: italic;

}
.card{
  box-shadow:0px 5px 5px 5px;
}
.card:hover{
background-color:rgb(37, 75, 84);
color: white;
scale: 105%;
    box-shadow: rgb(0,98,165) 0px 5px 5px 5px;
}

@media screen and (max-width:300px){
  .card{
  
    width: 250px !important; 
 
}
}
</style>