<template>
  <section class="section border-top border-bottom" data-aos="zoom-in" data-aos-once="false">
    <div class="container" style="background-color:#F8F9FD">
      <div class="row justify-content-center text-center mb-5">
        <div class="">
          <h2 class="section-heading">Ce que disent nos clients</h2>
        </div>
      </div>
      <carousel-3d
        :perspective="30"
        :border="0"
        :width="585"
        :height="auto"
        :controls-visible="true"
        :space="500"
        :clickable="true"
        :controls-prev-html="arrowLeft"
        :controls-next-html="arrowRight"
        :display="1"
      >
        <!--slide :index="0">
          <div class="swiper-slide">
            <div class="review text-center">
              <div>
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
              <p class="stars">
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
              </p>
              </div>
              <div class="ff">
              <h3>Excellent App!</h3>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  ea delectus pariatur, numquam aperiam dolore nam optio dolorem
                  facilis itaque voluptatum recusandae deleniti minus animi,
                  provident voluptates consectetur maiores quos.
                </p>
              </blockquote>

              </div>
            </div>
          </div>
        </slide-->
        <slide :index="0">
          <div class="swiper-slide">
            <div class="review text-center">
              <p class="stars">
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill"></span>
                <span class="bi bi-star-fill muted"></span>
              </p>
              <h3>Bons services!</h3>
              <blockquote>
                <p>
                  Les services d'auriculothérapie d'Adictator ont été pour moi une véritable révélation. Leur approche personnalisée, combinée à l'expertise de leurs praticiens, m'a aidé à surmonter mon addiction avec un succès remarquable. Je recommande vivement !.
                </p>
              </blockquote>

              <p class="review-user">
                <img
                  :src="person1"
                  alt="Image"
                  class="img-fluid rounded-circle mb-3"
                />
                <span class="d-block">
                  <span class="text-black">Camille Dubois</span>, &mdash; Client heureux
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
              <h3>Cette procédure est indolore!</h3>
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
                  <span class="text-black">Johan Smith</span>, &mdash; Client heureux
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
              <h3>Ce traitement est efficace !</h3>
              <blockquote>
                <p>
                  Les techniques d'auriculothérapie d'Adictator sont révolutionnaires, abordant l'addiction à sa source pour une guérison durable. Je suis très satisfait des résultats et recommande vivement leurs services à ceux cherchant un traitement efficace contre l'addiction.
                </p>
              </blockquote>

              <p class="review-user">
                <img
                  :src="person3"
                  alt="Image"
                  class="img-fluid rounded-circle mb-3"
                />
                <span class="d-block">
                  <span class="text-black">Charlotte Martin</span>, &mdash; Client heureux
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
      arrowLeft:`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg>`,
      arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg>`
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
  background: white;
  height: 100% !important;
  border-radius: 10px;
}
/*.review {
  padding: 10px 20px;
  height: 100%;
  display:flex;
}*/
.review {
  padding: 10px 20px;
  height: 100%;
}

.ff{
  width:50%
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
  .review{
    flex-direction: column
  }
  .ff{
    width:100%
  }
}
</style>