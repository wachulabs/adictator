<template>
  <section class="hero-section" id="hero">
    <div class="wave">
      <svg
        width="100%"
        height="355px"
        viewBox="0 0 1920 355"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Apple-TV"
            transform="translate(0.000000, -402.000000)"
            fill="#FFFFFF"
          >
            <path
              d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z"
              id="Path"
            ></path>
          </g>
        </g>
      </svg>
    </div>

    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 hero-text-image">
          <div class="row">
            <div
              class="col-lg-8 text-center text-lg-start animate__animated animate__fadeInLeft"
            >
              <h1 data-aos="fade-right" style="color: #0f172a">
                <span style="color: #f21e1e">Accueil pour tous vos</span>
                besoins en <span style="color: #38b44a">auriculothérapie</span>
              </h1>

              
                <carousel-3d
                  :perspective="30"
                  :border="0"
                  :width="585"
                  :height="370"
                  :controls-visible="true"
                  :space="500"
                  :clickable="true"
                  :controls-prev-html="arrowLeft"
                  :controls-next-html="arrowRight"
                  :display="1"
                  :loop="true"
                  :controlsVisible="false"
                  :autoplay="true"
                  :autoplayTimeout="10000"
                >
                  <slide :index="1">
                    <div class="swiper-slide" style="height:100%">
                      <div class="review text-center">
                        Nous utilisons du matériel unique, protégé et conforme
                        aux normes CE en vigueur. Notre traitement vise à
                        stimuler les points de l'oreille à l'aide d'un laser de
                        faible intensité, totalement indolore et sans effets
                        secondaires, agissant sur la dépendance physique à la
                        nicotine. Le tout en éliminant l'envie et l'envie de
                        recommencer à fumer dès les premiers instants après
                        votre cure de sevrage tabagique.
                      </div>
                    </div>
                  </slide>
                  <slide :index="0">
                    <div class="swiper-slide">
                      <div class="review text-center">
                        Reprenez le contrôle de vous-même
                      </div>
                    </div>
                  </slide>
                  <slide :index="2">
                    <div class="swiper-slide">
                      <div class="review text-center">
                        Libérez-vous de vos addictions en une seule séance et ouvrez les portes d'une vie plus saine et épanouissante
                      </div>
                    </div>
                  </slide>
                  <slide :index="3">
                    <div class="swiper-slide">
                      <div class="review text-center">
                        Libérez-vous de l'emprise, vivez une vie sans dépendance.
                      </div>
                    </div>
                  </slide>
                  <slide :index="4">
                    <div class="swiper-slide">
                      <div class="review text-center">
                        Brisez les chaînes de l'addiction, embrassez la liberté d'une vie sans dépendance.
                      </div>
                    </div>
                  </slide>
                  <slide :index="5">
                    <div class="swiper-slide">
                      <div class="review text-center">
                        Libérez-vous de vos chaînes, embrassez votre liberté.
                      </div>
                    </div>
                  </slide>
                  <slide :index="6">
                    <div class="swiper-slide">
                      <div class="review text-center">
                        Libérez-vous de vos chaînes, embrassez votre liberté.
                      </div>
                    </div>
                  </slide>
                  <slide :index="7">
                    <div class="swiper-slide">
                      <div class="review text-center">
                        Un chemin vers une vie sans addictions, une séance à la fois.
                      </div>
                    </div>
                  </slide>
                  <slide :index="8">
                    <div class="swiper-slide">
                      <div class="review text-center">
                        Transformez votre vie, dites adieu à vos dépendances.
                      </div>
                    </div>
                  </slide>
                  <slide :index="9">
                    <div class="swiper-slide">
                      <div class="review text-center">
                        Reprenez le contrôle, vivez une vie pleine de santé et de bonheur.
                      </div>
                    </div>
                  </slide>
                  <slide :index="10">
                    <div class="swiper-slide">
                      <div class="review text-center">
                        Le pouvoir de changer réside en vous, nous sommes là pour vous guider.
                      </div>
                    </div>
                  </slide>
                </carousel-3d>
              
              <p
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-offset="-500"
                :class="{ 'aos-init aos-animate': view.slowShow }"
              >
                <router-link
                  style="
                    color: black;
                    background-color: #38b44a;
                    margin-right: 20px;
                  "
                  to="pricing"
                  class="btn btn-outline-dark-green"
                  >See Prices</router-link
                >
                <router-link
                  style="color: black; background-color: #38b44a"
                  to="book-appointment"
                  class="btn btn-outline-dark-green"
                  >Book Appointment</router-link
                >
              </p>
            </div>
            <div
              class="col-lg-4 iphone-wrap animate__animated animate__fadeInRight"
            >
              <img
                :src="view.img1"
                alt="Image"
                class="phone-1"
                data-aos="fade-right"
              />
              <!--img
                :src="view.img2"
                alt="Image"
                class="phone-2"
                data-aos="fade-right"
                data-aos-delay="200"
              -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import img1 from "@/assets/img/im1.jpg";
import img2 from "@/assets/img/im2.jpg";
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
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

.review{
  align-items: center;
  justify-content:center;
  font-size: 40px;
  color:black
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
