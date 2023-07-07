<template>
  <navbarComp/>
  <router-view/>
<footerComp/>
</template>

<script>
import navbarComp from "./components/Navbar.vue";
import footerComp from "./components/footerComp.vue";



export default{
  components: {navbarComp, footerComp}
}
</script>