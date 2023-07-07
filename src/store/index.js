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
      const response = await fetch('https://Antonio-Tone.github.io/data/testimonials.json');
      const data = await response.json();
      context.commit('setTestimonials', data.testimonials);
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
    }
  },

  getProjects: async (context) => {
    try {
      const response = await fetch("https://Antonio-Tone.github.io/data/projects.json");
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json();
      context.commit("setProjects", data.projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  },
  getTimelines: async (context) => {
    try {
      const response = await fetch("https://Antonio-Tone.github.io/data/resume.json");
      if (!response.ok) {
        throw new Error("Failed to fetch timelines");
      }
      const data = await response.json();
      context.commit("setTimelines", data.timelines);
    } catch (error) {
      console.error("Error fetching timelines:", error);
    }
  },
  },
  modules: {
  }
})
