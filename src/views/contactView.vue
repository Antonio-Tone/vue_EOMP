<template>
    <div>
        <section id="contact" class="heading d-flex justify-content-center align-items-center">

<div class="container my-lg-2">
  <h1 id="abt" class="about d-flex align-items-start justify-content-center con-animation lead">
  Contact Me
</h1>
<div class="row">
  <div class="col-lg-6 col-12">
    <h4 class="text-lg-start text-center lead">GET IN TOUCH</h4>
        <div class="contact-icons d-flex justify-content-lg-start py-2 justify-content-center">
            <i class="fa-solid fa-phone fa-beat-fade" style="color: #2f59a2;"></i>
            <p class="lead text-dark ps-3">+27 65 851 3651</p> 
        </div>
        <div class="contact-icons d-flex justify-content-lg-start py-2 justify-content-center">
            <i class="fa-solid fa-envelope-open-text fa-beat-fade" style="color: #4169af;"></i>
            <p class="lead text-dark ps-3">antoniotone@gmail.com</p>
        </div>
        <div class="contact-icons d-flex justify-content-lg-start py-2 justify-content-center">
            <a href="#"><i class="fa-brands fa-facebook fa-beat-fade" style="color: #325ea9;"></i>
            </a>
            <p class="lead text-dark ps-3">My FACEBOOK</p> 
        </div>
        <div class="contact-icons d-flex justify-content-lg-start py-2 justify-content-center">
            <a href="#"><i class="fa-brands fa-instagram fa-beat-fade" style="color: #bd2e97;"></i></a>
            <p class="lead text-dark ps-3">My INSTAGRAM</p> 
        </div>
        <div class="contact-icons d-flex justify-content-lg-start py-2 justify-content-center">
            <a href="https://github.com/Antonio-Tone"><i class="fa-brands fa-github fa-beat-fade"></i></a>
            <p class="lead text-dark ps-3">My GitHub</p> 
        </div>
  </div>

  <div class="col-lg-6 col-12 my-lg-2">
    <form action="https://formspree.io/f/mayzkeqz" method="post">
      <!-- 2 column grid layout with text inputs for the first and last names -->
      <div class="row mb-4 ">
        <h1 class="d-flex justify-content-center my-4 lead">Contact Form</h1>
        <div class="col" >
          <div class="form-outline ">
            <input type="text" id="form3Example1" class="form-control" name="firstname" placeholder="First Name " required />
          </div>
        </div>
        <div class="col">
          <div class="form-outline ">
            <input type="text" id="form3Example2" class="form-control" name="surname" placeholder="Last Name" required />
              </div>
        </div>
      </div>
    
      <!-- Email input -->
      <div class="form-outline mb-4">
        <input type="email" id="form3Example3" class="form-control" name="email" placeholder="Email Address" required />
      </div>
        <!-- Message input -->
      <div class="form-outline mb-4">
          <textarea class="form-control" id="form4Example3" name="message" rows="4" placeholder="Message" required></textarea>
      </div>
<div>
      <!-- Submit button -->
      <button type="submit" id="btn" class="btn btn-success btn-block d-block mx-auto">Submit</button>
    </div>
    </form>
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
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");
    @import url("https://fonts.googleapis.com/css2?family=Poltawski+Nowy:ital@1&display=swap");
body{
    background-color: teal !important;
    height: 100vh !important;
}
#contact {
    min-height: 100vh;
}
.con-animation {
    animation: name-breathing 10s infinite normal;
    animation-duration: 10s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: con-breathing;
}
@keyframes con-breathing {
    0% {
        transform: scale(1);
    }
    16% {
        transform: scale(1.1);
    }
    32% {
        transform: scale(1);
    }
    48% {
        transform: scale(1.1);
    }
    64% {
        transform: scale(1);
    }
    80% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}


#nav{
    opacity: 0.70;
     margin: 0;
     top: 0;
     width: 100%;
     background-color: transparent;
    
 }

 .px-3:hover{
    background-color:#314a5e;
    padding: 5px;
   

}

a:hover{
    color: #aed5d5 !important;
}
 
 .nav-link{
     margin-left: 220px !important;
     color: white;
 }

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.form-outline{
  width: 100%!important;
  color: white !important;
}


.form-control{
    background-color:  #aed5d5!important;
    color: black !important;
    
}

h2{
    color:#314a5e !important;
   
}

.heading {
    color: #aed5d6 !important;
    text-align: center;
    font-size:x-large;
}


.con-animation{
        animation: con-breathing 10s infinite normal;

}

#btn{
    background-color: #314a5e !important;
}

#btn:hover{
    background-color: rgb(13,202,240) !important;
    scale: 120%;
    font-weight: bolder;
}
.container{
    min-height: 100%;
}
i {
    color: #aed5d5; 
    font-size: 2em;
}
#contact{
    background-color: rgb(76, 127, 139);;
}

.lead{
    font-family: 'Poltawski Nowy';
  font-style: italic;
  color: #aed5d5 !important;
}
</style>