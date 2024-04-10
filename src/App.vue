<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
    <div v-show="false">{{ isIdle }}</div>
    <b-modal id="bv-modal-example" centered hide-footer>
      <template #modal-title> Numéro de téléphone </template>
      <div class="d-block text-center flex">
        <h3 ref="myinput">0782218188 </h3> <button @click="copy" style="color:blue;border:none"><i class="bi bi-clipboard-check-fill"></i> Copy</button>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
        >Close Me</b-button
      >
    </b-modal>

    <transition name="fade">
      <div id="pagetop" class="fixed flex">
        <button
          class="rounded-lg mb-5"
          @click="$bvModal.show('bv-modal-example')"
        >
          <b>Appel de 10 Minutes offert !</b>
        </button>
        <div id="i" v-show="scY > 300" @click="toTop">
          <i class="bi bi-arrow-up d-line"></i>
        </div>
      </div>
    </transition>
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
      scTimer: 0,
      scY: 0,
    };
  },
  components: {
    Header,
    Footer,
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
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    async copy() {
      this.$refs.myinput.focus();
      await navigator.clipboard.writeText(this.$refs.myinput.innerText);
    }
  },
};
</script>

<style></style>
