import { createStore } from 'vuex'

export default createStore({
  state: {
    testimonials: null,
    projects: null,
    timelines: null
  },
  mutations: {
    setTestimonials: (state,value)=>{
      state.testimonials = value;
    },
    setTimelines: (state,value)=>{
      state.timelines = value;
  },
    setProjects: (state,value)=>{
      state.projects = value;
    }
},
  actions: {
  getTestimonials: async (context) => {
    try {
      const response = await fetch("https://vue.github.io/data/index.json");
      const testimonials = await response.json();
      context.commit("setTestimonials", testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  },

  getProjects: async (context) => {
    try {
      const response = await fetch("https://vue.github.io/data/index.json");
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const projects = await response.json();
      context.commit("setProjects", projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  },
  getTimelines: async (context) => {
    try {
      const response = await fetch("https://vue.github.io/data/index.json");
      if (!response.ok) {
        throw new Error("Failed to fetch timelines");
      }
      const timelines = await response.json();
      context.commit("setTimelines", timelines);
    } catch (error) {
      console.error("Error fetching timelines:", error);
    }
  },
  },
  modules: {
  }
})
