<template>
    <div>
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
                <h1 data-aos="fade-up" style="color:#0f172a"> <span style="color:#38B44A">About Adictator</span></h1>
  
                <p
                  class="mb-5"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  :class="{ 'aos-init aos-animate': view.slowShow }"
                  style="color:black"
                >
                {{ view.a2 }}
                <br/>
                {{view.a1}}
                </p>
                <p
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-offset="-500"
                  :class="{ 'aos-init aos-animate': view.slowShow }"
                >
                  <router-link style="color:black; background-color: #38B44A" to="#" class="btn btn-outline-dark-green"
                    >Book Appointment</router-link
                  >
                </p>
              </div>
              <div
                class="col-lg-4 iphone-wrap animate__animated animate__fadeInLeft"
              >
                <img
                  :src="view.img1"
                  alt="Image"
                  class="phone-1"
                  data-aos="fade-left"
                  style="height:400px"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section class="section">
    <div class="container rounded-lg">
      <div class="rounded-lg" style="margin: 10px; box-shadow: -5px -5px 5px 5px #888888; padding:20px">
        <div class="row justify-content-center text-center">
          <div class="" data-aos="fade-up" style="width:100%; text-align: left;">
            <h2 class="section-heading ml-5">Mission :</h2>
          </div>
        </div>
        <div class="row">
          <!--div class="desc"-->
          <div class="col-md-8 ml-5" data-aos="fade-up" data-aos-delay="" style="color:black; font-size:20px">
            <ol style="padding: 20px">
                <li>vous libérer, de vos addictions, vivez une vie saine et épanouissante.</li>
                <li>Notre mission est de vous aider à retrouver votre liberté face à vos addictions et à prendre le contrôle de votre vie.</li>
            </ol>
          </div>
          
        </div>
      </div>
    </div>
    <div class="container rounded-lg mt-5">
      <div class="rounded-lg" style="margin: 10px; box-shadow: -5px -5px 5px 5px #888888; padding:20px">
        <div class="row justify-content-center text-center">
          <div class="" data-aos="fade-up" style="width:100%; text-align: left;">
            <h2 class="section-heading ml-5">Valeurs :</h2>
          </div>
        </div>
        <div class="row">
          <!--div class="desc"-->
          <div class="col-md-8 ml-5" data-aos="fade-up" data-aos-delay="" style="color:black; font-size:20px">
            <ol style="padding: 20px">
                <li>Engagement : Nous sommes dévoués à votre succès et à votre bien-être.</li>
                <li>Respect : Nous traitons chaque individu avec respect, compassion et confidentialité.</li>
                <li>Excellence : Nous nous engageons à fournir des services de haute qualité et des résultats durables.</li>
            </ol>
          </div>
          
        </div>
      </div>
    </div>
    <div class="container rounded-lg mt-5">
      <div class="rounded-lg" style="margin: 10px; box-shadow: -5px -5px 5px 5px #888888; padding:20px">
        <div class="row justify-content-center text-center">
          <div class="" data-aos="fade-up" style="width:100%; text-align: left;">
            <h2 class="section-heading ml-5">Efficacité du processus :</h2>
          </div>
        </div>
        <div class="row">
          <!--div class="desc"-->
          <div class="col-md-8 ml-5" data-aos="fade-up" data-aos-delay="" style="color:black; font-size:20px">
            <ol style="padding: 20px">
                <li>Un traitement révolutionnaire par l'oreille au laser qui agit directement sur les points d'acupuncture pour réduire les symptômes de sevrage et les envies.</li>
                <li>Notre processus unique et innovant vous permet d'arrêter de fumer, de réduire ou même d’anéantir votre consommation d'alcool ou de sucre en une seule séance.</li>
            </ol>
          </div>
          
        </div>
      </div>
    </div>
    
    </section>
    </div>
  </template>
  <script>
  import img1 from "@/assets/Logo.jpg";
  import img2 from "@/assets/img/im2.jpg";
  export default {
    data() {
      return {
        view: {
          slowShow: false,
          img1: img1,
          img2: img2,
          a1:`ADICTATOR un cabinet anti addiction, qui aide les personnes à surmonter leurs dépendances, un cabinet anti-addiction qui contribue à améliorer la qualité de vie. Cela peut se traduire par une meilleure santé mentale et physique, des relations améliorées avec la famille et les amis, et une plus grande capacité à participer pleinement à la société.`,
          a2:`Adictator Un cabinet anti-addiction qui offre un environnement où les individus peuvent chercher de l'aide en toute confidentialité et sans jugement, ce qui peut être crucial pour ceux qui luttent contre la stigmatisation et la honte souvent associées à la dépendance.`
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
  
  
  
  