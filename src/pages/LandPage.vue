<template>
  <div>
    <Banner></Banner>
    <div class="main">
      <Features></Features>
      <Documentation></Documentation>
      <Review></Review>
      <!--Publish></Publish-->
      <Trust></Trust>
    </div>
    <Footer></Footer>
    <transition name="fade">
      <div
        id="pagetop"
        class="fixed flex"
        v-show="scY > 300"
        @click="toTop"
      >
        <i class="bi bi-arrow-up d-line"></i>
      </div>
    </transition>
  </div>
</template>
<script>
import Banner from "@/components/Banner.vue";
import Features from "@/components/Features.vue";
import Documentation from "@/components/Documentation.vue";
import Review from "@/components/Review.vue";
//import Publish from "@/components/Publish.vue";
import Trust from "@/components/Trust.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    
    Banner,
    Features,
    Documentation,
    Review,
    //Publish,
    Trust,
    Footer,
  },
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
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
  },
};
</script>
<style>
#pagetop {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 996;
  border-radius: 50%;
  background-color: #1fa78e;
}

#pagetop i {
  font-weight: 900;
  color: white;
}
</style>