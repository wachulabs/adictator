<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
    <div v-show="false">{{ isIdle }}</div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      idle: false,
    };
  },
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapGetters(["remember"]),
    isIdle: function () {
      return this.$store.state.idleVue.isIdle;
    },
  },
  watch: {
    isIdle: function () {
      if (this.isIdle && !this.remember) {
        this.$store.dispatch("logout");
      }
    },
  },
};
</script>

<style></style>
