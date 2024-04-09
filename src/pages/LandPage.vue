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

    <transition name="fade">
      <div id="pagetop" class="fixed flex">
        <button class="rounded-lg mb-5"><b>Appel de 10 Minutes offert !</b></button>
        <div id="i" v-show="scY > 300" @click="toTop">
        <i class="bi bi-arrow-up d-line" ></i>
        </div>
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

export default {
  components: {
    Banner,
    Features,
    Documentation,
    Review,
    //Publish,
    Trust,
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
  justify-content: end;
  align-items: end;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 996;  
  flex-direction: column;
}

#pagetop #i {
  border-radius: 50%;
  background-color: #1fa78e;
  color: white;
  font-weight: 900;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#pagetop button {
  
  color: black;
  background-color: white;
  border-color: red;
  width: 300px;
  padding: 20px;
  box-shadow: -5px -5px 5px 5px #888888;
}
</style>
