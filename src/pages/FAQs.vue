<template>
  <section class="section" id="" style="margin-top: 100px; margin-bottom: 50px">
    <div class="container">
      <div class="row align-items-center rounded-lg">
        <div
          class="col-12 rounded-lg"
          style="
            margin: 10px;
            box-shadow: 0 15px 50px 0 rgba(0, 0, 0, 0.3);
            padding: 20px;
          "
        >
        <div class="row justify-content-center text-center mb-5">
            <div class="" data-aos="fade-up" style="width:100%">
              <h2 class="section-heading" style="text-align: left;">FAQs</h2>
            </div>
          </div>
          <VueFaqAccordion :items="myItems" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import img1 from "@/assets/img/im1.jpg";
import img2 from "@/assets/img/im2.jpg";
import VueFaqAccordion from "vue-faq-accordion";
export default {
  components: {
    VueFaqAccordion,
  },
  data() {
    return {
      myItems: [
        {
          title: "How many time zones are there in all?",
          value:
            "Given a 24-hour day and 360 degrees of longitude around the Earth",
          category: " auriculothérapie",
        },
        {
          title: "How many time zones are there in all?",
          value:
            "Given a 24-hour day and 360 degrees of longitude around the Earth",
          category: " auriculothérapie",
        },
        {
          title: "How long is a day and year on Venus?",
          value:
            "Venus takes 224.7 Earth days to complete one orbit around the Sun.",
          category: "Addiction",
        },
        {
          title: "What animal smells like popcorn?",
          value: "Binturongs smell like popcorn.",
          category: "Tab-2",
        },
      ],
      view: {
        slowShow: false,
        img1: img1,
        img2: img2,
      },
    };
  },
  mounted() {
    this.handleAnimation();
  },
  methods: {
    handleAnimation() {
      setTimeout(() => {
        this.view.slowShow = true;
      }, 1000);
    },
  },
};
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.service-name-red {
  text-align: left;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
@media screen and (max-width: 992px) {
  .hero-section {
    height: 154vh;
  }
  .hero-section .iphone-wrap .phone-1 {
    margin-left: 0%;
  }
  .hero-section .iphone-wrap .phone-2 {
    margin-left: 20%;
  }
}

@media screen and (max-width: 576px) {
  .hero-section .iphone-wrap .phone-2 {
    margin-left: 7%;
  }
}
</style>
