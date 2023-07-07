<template>
    <section class="sec my-5" id="testimonials mx-auto">
        <h5 id="text" class="display-5  text-center py-4">
            Testimonial
        </h5>
        <div class="container-fluid" id="carousel">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div v-for="testimony in testimonials" :key="testimony.id" id="cara"  class="carousel-item " :class="testimony.class" data-bs-interval="5000">
                        <img id="image" :src="testimony.image_url" class="d-block mx-auto z-0"
                            alt="testimony" loading="lazy" />
                        <p class="lead text-center font-italic text-muted">{{testimony.title}}</p>
                        <h5 id="name" class="display-5 text-white text-center mx-auto my-0 pt-1">{{ testimony.name }}
                        </h5>
                        <p class="lead text-center text-light w-75 mx-auto px-0 px-md-5">
                            {{ testimony.description }}
                        </p>
                    </div>
                </div>
                <button
            class="carousel-control-prev mx-auto"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials
        }
    },
    mounted() {
        this.$store.dispatch('getTestimonials')
    }
};

</script>


<style scoped>
img{
    height: 300px;
    width: 300px;
    border-radius: 20px ;
}
#text{
    font-family: 'Poltawski Nowy';
font-style: italic;
}
.lead,#name{
 color: #aed5d6;
font-family: 'Poltawski Nowy';
font-style: italic;
}
#cara{
    background-color:rgb(76, 127, 139);
    padding: 20px;
    border-radius: 20px;
}
.sec{
    min-height:15vh !important;
    margin-bottom: 20px !important;
}
#text{
    margin-top:60px !important ;
}
@media screen and(max-width: 300px) {
    #image{
        min-height: 20px !important;
        width: 20px !important;
        border-radius: 9999px;

    }
}
</style>
