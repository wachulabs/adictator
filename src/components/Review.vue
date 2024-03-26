<template>
  <section class="section border-top border-bottom" data-aos="zoom-in" data-aos-once="false">
    <div class="container">
      <div class="row justify-content-center text-center mb-5">
        <div class="col-md-4">
          <h2 class="section-heading">Review From Our Users</h2>
        </div>
      </div>
      <carousel-3d
        :perspective="30"
        :border="0"
        :width="585"
        :height="370"
        :controls-visible="true"
        :space="500"
        :clickable="true"
      >
        <slide :index="0">
          <div class="swiper-slide">
            <div class="review text-center">
              <p class="stars">
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
              </p>
              <h3>Excellent App!</h3>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  ea delectus pariatur, numquam aperiam dolore nam optio dolorem
                  facilis itaque voluptatum recusandae deleniti minus animi,
                  provident voluptates consectetur maiores quos.
                </p>
              </blockquote>

              <p class="review-user">
                <img
                  :src="person1"
                  alt="Image"
                  class="img-fluid rounded-circle mb-3"
                />
                <span class="d-block">
                  <span class="text-black">Jean Doe</span>, &mdash; App User
                </span>
              </p>
            </div>
          </div>
        </slide>
        <slide :index="1">
          <div class="swiper-slide">
            <div class="review text-center">
              <p class="stars">
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill muted"></span>
              </p>
              <h3>This App is easy to use!</h3>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  ea delectus pariatur, numquam aperiam dolore nam optio dolorem
                  facilis itaque voluptatum recusandae deleniti minus animi,
                  provident voluptates consectetur maiores quos.
                </p>
              </blockquote>

              <p class="review-user">
                <img
                  :src="person2"
                  alt="Image"
                  class="img-fluid rounded-circle mb-3"
                />
                <span class="d-block">
                  <span class="text-black">Johan Smith</span>, &mdash; App User
                </span>
              </p>
            </div>
          </div>
        </slide>
        <slide :index="2"
          ><div class="swiper-slide">
            <div class="review text-center">
              <p class="stars">
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
              </p>
              <h3>Awesome functionality!</h3>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  ea delectus pariatur, numquam aperiam dolore nam optio dolorem
                  facilis itaque voluptatum recusandae deleniti minus animi,
                  provident voluptates consectetur maiores quos.
                </p>
              </blockquote>

              <p class="review-user">
                <img
                  :src="person3"
                  alt="Image"
                  class="img-fluid rounded-circle mb-3"
                />
                <span class="d-block">
                  <span class="text-black">Jean Thunberg</span>, &mdash; App
                  User
                </span>
              </p>
            </div>
          </div></slide
        >
      </carousel-3d>
    </div>
  </section>
</template>
<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import person1 from "@/assets/img/person_1.jpg";
import person2 from "@/assets/img/person_2.jpg";
import person3 from "@/assets/img/person_3.jpg";
export default {
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      person1: person1,
      person2: person2,
      person3: person3,
    };
  },
};
</script>
<style>
.carousel-home-resources.left-1 {
  transform: translateX(-500px) translateZ(-400px) rotateY(-30deg) !important;
}
.carousel-home-resources.right-1 {
  transform: translateX(500px) translateZ(-400px) rotateY(30deg) !important;
}
.carousel-3d-container {
  height: 350px !important;
}
.carousel-3d-slider {
  height: 100% !important;
}

.carousel-3d-slide {
  background: #b3def1;
  height: 100% !important;
  border-radius: 10px;
}
.review {
  padding: 10px 20px;
  height: 100%;
}

@media only screen and (max-width: 1024px) {
  .carousel-3d-container {
    width: 500px !important;
  }
}

@media only screen and (max-width: 576px) {
  .carousel-3d-container {
    width: 300px !important;
    height: 420px !important;
  }
}
</style>