<template>
 <div class="container z-0 col-12">
     <section id="landing" class="z-5">
      <div class="container-fluid pt-3 my-5">
        <div class="row py-5 my-5 ">
          <div
            class="col-12 col-lg-6 d-flex d-lg-flex mt-lg-5 justify-content-center"
          >
            <img
              class="img-fluid showcase z-0"
              src="https://i.postimg.cc/k5dggjwz/93d3e31639a4d07613de9dccdc8bd5e8-developer-icon-removebg-preview.png"
              alt="laptop-coding"
              loading="eager  "
            />
          </div>
          <div class="col-12 col-lg-6 text-light text-center mx-auto">
            <p id="fadeIn" class="lead py-3">HI, WELCOME TO MY PORTFOLIO!</p>
            <h3 id="fadeIn2" class="display-3 lead">
              I'm <span class="name">Antonio Tone</span>
            </h3>
            <p id="fadeIn3" class="lead pb-3">And I'm an Aspired Developer</p>
            
              <router-link to="/about"
                ><button id="btn" type="button" class="btn btn-success">
                  Continue to..
                </button></router-link>
              
            
          </div>
        </div>
      </div>
    </section>
 </div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poltawski+Nowy:ital@1&display=swap");
#fadeIn{
    animation: fadeIn 5s !important;
    margin-right: 5px;
    animation:infinite;
}

#fadeIn2{
    animation: fadeIn 10s !important;
    margin-right: 5px;
    animation:infinite;
}

#fadeIn3{
    animation: fadeIn 15s !important;
    margin-right: 5px;
    animation:infinite;
}

.fadeOut{
    animation: fadeOut 20s !important ;
    
}

@keyframes  fadeIn{
from{
    opacity: 0;
}

to{
    opacity: 1;
}

 
}
.lead{
    color:rgb(254,254,254);
    font-family: 'Poltawski Nowy';
  font-style: italic;
  font-size: 35px;	
}
.name{
       font-family: 'Poltawski Nowy';
  font-style: italic;
  font-size: 40px;
  color: rgb(63,84,247);	
}
.navbar-toggler-icon{
  background-image:white !important;
}

h3{
    color: black;
}

img{
    width: 250px;
    border-radius: 20px;
}
.container{
    background-image: url("https://i.postimg.cc/kXt6g696/linus-mimietz-gvpt-Kmonylk-unsplash.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

      min-width: 100%;
      min-height: 81.4vh;
    
}
@media screen and (max-width: 300px) {
    .container{
        min-height: 100vh;
    }
}

</style>