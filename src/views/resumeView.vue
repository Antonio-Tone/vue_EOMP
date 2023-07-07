<template>
     <div class="main">
      <h1 class="heading d-flex justify-content-center my-4">Resume</h1>
    <div class="timeline mb-5">
      <div v-for="timeframe in timelines" :key="timeframe.id" class="container left" :class="timeframe.class" :style="timeframe.style" >
        <div class="content">
          <h2>{{ timeframe.year }}</h2>
          <h4>{{ timeframe.title }}</h4>
          <p>{{ timeframe.description }}</p>  
        </div>
      </div>
    </div>
     </div>
    
</template>
<script>
export default {
    computed:{
        timelines(){
            return this.$store.state.timelines
        }
    },
    mounted(){
        this.$store.dispatch("getTimelines")
    }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poltawski+Nowy:ital@1&display=swap");
.heading,.content{
  font-family: 'Poltawski Nowy';
font-style: italic;
}
p{
  font-size: 20px;
}

/* The actual timeline (the vertical ruler) */
.timeline {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
      }
      
      /* The actual timeline (the vertical ruler) */
      .timeline::after {
        content: '';
        position: absolute;
        width: 6px;
        background-color: #aed5d6;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -3px;
        
      }
      
      /* Container around content */
      .container {
        padding: 10px 40px;
        position: relative;
        background-color: inherit;
        width: 50%;
      }
      .main{
        margin-top: 6rem !important;
      }
      /* The circles on the timeline */
      .container::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -17px;
        background-color: #aed5d6;
        border: 4px solid #314a5e;
        top: 15px;
        border-radius: 50%;
        z-index: 1;
      }
      
      /* Place the container to the left */
      .left {
        left: -25.3%;
        
      }
      
      /* Place the container to the right */
      .right {
        left: 25.3%;
      }
      
      /* Add arrows to the left container (pointing right) */
      .left::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: 30px;
        border: medium solid #aed5d6;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent #aed5d6;
      }
      
      /* Add arrows to the right container (pointing left) */
      .right::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        left: 30px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent #aed5d6 transparent transparent;
      }
      
      /* Fix the circle for containers on the right side */
      .right::after {
        left: -16px;
      }
      
      /* The actual content */
      .content {
        padding: 20px 30px;
        background-color:rgb(37, 75, 84);
        color: #aed5d6;
        position: relative;
        border-radius: 6px;
      }
      
      /* Media queries - Responsive timeline on screens less than 600px wide */
      @media screen and (max-width: 600px) {
      /* Place the timelime to the left */
        .timeline::after {
          left: 31px;
        }
      
      /* Full-width containers */
        .container {
          width: 100%;
          padding-left: 70px;
          padding-right: 25px;
        }
      
      /* Make sure that all arrows are pointing leftwards */
        .container::before {
          left: 60px;
          border: medium solid #aed5d6;
          border-width: 10px 10px 10px 0;
          border-color: transparent #aed5d6 transparent transparent;
        }
      
      /* Make sure all circles are at the same spot */
        .left::after, .right::after {
          left: 15px;
        }
      
      /* Make all right containers behave like the left ones */
        .right, .left {
          left: 0.6%;
        }
      }
    
</style>