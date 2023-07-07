<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary top-0 position-fixed w-100 z-1"
    id="nav"
  >
    <div class="container-fluid">
    
      <h4 class="navbar-brand active  mx-auto">Antonio Tone</h4>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto " >
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/resume">Resume</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/testimonials">testimonials</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {


};
</script>
<style scoped>
#nav {
  
  padding: 20px 16px;
  width: 100%;
  background-color: rgb(44, 44, 44) !important;
 display: flex;
 justify-content: center;
 
}

.nav-link {
  text-decoration: none !important;
  color: rgb(175, 175, 175) !important;
  font-size: medium;
  font-weight: bold;
  padding: 8px;
  top: 0;

 
}
h4{
  
  color: rgb(175, 175, 175)!important;
}

.nav-link:hover{
    
    scale: 102%;
   box-shadow: rgb(0,98,165) 0px 5px 5px 5px;
   border-radius: 5px !important;
  
}

img{
 height: 40px;
 width: 60px;
 border-radius: 9999px;
 background-position: center; 
}
</style>