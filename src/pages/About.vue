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
                <h1 data-aos="fade-up" style="color: #0f172a">
                  <span style="color: #38b44a">About Adictator</span>
                </h1>

                <p
                  class="mb-5"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  :class="{ 'aos-init aos-animate': view.slowShow }"
                  style="color: black"
                >
                  {{ view.a2 }}
                  <br />
                  {{ view.a1 }}
                </p>
                <p
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-offset="-500"
                  :class="{ 'aos-init aos-animate': view.slowShow }"
                >
                  <router-link
                    style="color: black; background-color: #38b44a"
                    to="#"
                    class="btn btn-outline-dark-green"
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
                  style="height: 400px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container rounded-lg">
        <div
          class="rounded-lg"
          style="
            margin: 10px;
            box-shadow: -5px -5px 5px 5px #888888;
            padding: 20px;
          "
        >
          <div class="row justify-content-center text-center">
            <div
              class=""
              data-aos="fade-up"
              style="width: 100%; text-align: left"
            >
              <h2 class="section-heading ml-5">Mission :</h2>
            </div>
          </div>
          <div class="row">
            <!--div class="desc"-->
            <div
              class="col-md-11 ml-5"
              data-aos="fade-up"
              data-aos-delay=""
              style="color: black; font-size: 20px"
            >
              <ol style="padding: 20px">
                <li>
                  vous libérer, de vos addictions, vivez une vie saine et
                  épanouissante.
                </li>
                <li>
                  Notre mission est de vous aider à retrouver votre liberté face
                  à vos addictions et à prendre le contrôle de votre vie.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div class="container rounded-lg mt-5">
        <div
          class="rounded-lg"
          style="
            margin: 10px;
            box-shadow: -5px -5px 5px 5px #888888;
            padding: 20px;
          "
        >
          <div class="row justify-content-center text-center">
            <div
              class=""
              data-aos="fade-up"
              style="width: 100%; text-align: left"
            >
              <h2 class="section-heading ml-5">Valeurs :</h2>
            </div>
          </div>
          <div class="row">
            <!--div class="desc"-->
            <div
              class="col-md-11 ml-5"
              data-aos="fade-up"
              data-aos-delay=""
              style="color: black; font-size: 20px"
            >
              <ol style="padding: 20px">
                <li>
                  Engagement : Nous sommes dévoués à votre succès et à votre
                  bien-être.
                </li>
                <li>
                  Respect : Nous traitons chaque individu avec respect,
                  compassion et confidentialité.
                </li>
                <li>
                  Excellence : Nous nous engageons à fournir des services de
                  haute qualité et des résultats durables.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div class="container rounded-lg mt-5">
        <div
          class="rounded-lg"
          style="
            margin: 10px;
            box-shadow: -5px -5px 5px 5px #888888;
            padding: 20px;
          "
        >
          <div class="row justify-content-center text-center">
            <div
              class=""
              data-aos="fade-up"
              style="width: 100%; text-align: left"
            >
              <h2 class="section-heading ml-5">Efficacité du processus :</h2>
            </div>
          </div>
          <div class="row">
            <!--div class="desc"-->
            <div
              class="col-md-11 ml-5"
              data-aos="fade-up"
              data-aos-delay=""
              style="color: black; font-size: 20px"
            >
              <ol style="padding: 20px">
                <li>
                  Un traitement révolutionnaire par l'oreille au laser qui agit
                  directement sur les points d'acupuncture pour réduire les
                  symptômes de sevrage et les envies.
                </li>
                <li>
                  Notre processus unique et innovant vous permet d'arrêter de
                  fumer, de réduire ou même d’anéantir votre consommation
                  d'alcool ou de sucre en une seule séance.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div class="container rounded-lg mt-5">
        <div
          class="rounded-lg"
          style="
            margin: 10px;
            box-shadow: -5px -5px 5px 5px #888888;
            padding: 20px;
          "
        >
          <div class="row justify-content-center text-center">
            <div
              class=""
              data-aos="fade-up"
              style="width: 100%; text-align: left"
            >
              <h2 class="section-heading ml-5">
                Une Approche Complète pour Surmonter les Addictions :
              </h2>
            </div>
          </div>
          <div class="row">
            <div
              class="col-md-11 ml-5"
              data-aos="fade-up"
              data-aos-delay=""
              style="color: black; font-size: 20px"
            >
              <ol style="padding: 20px">
                <li>
                  <b>Efficacité en Une Seule Séance :</b> Notre approche unique
                  et intensive permet aux individus de s'attaquer à leurs
                  addictions en une seule séance, ce qui est à la fois pratique
                  et rentable.
                </li>
                <li>
                  <b>Gamme d'Addictions :</b> Nous traitons une gamme
                  d'addictions, y compris la dépendance à la nicotine, au
                  cannabis et au sucre. Cela signifie que nous pouvons aider un
                  large éventail de personnes à améliorer leur santé et leur
                  qualité de vie.
                </li>
                <li>
                  <b>Approche Personnalisée :</b> Bien que notre séance soit
                  unique, elle est entièrement personnalisée pour répondre aux
                  besoins spécifiques de chaque individu. Nous prenons en compte
                  les antécédents personnels, les déclencheurs de l'addiction et
                  les objectifs de rétablissement de chaque personne.
                </li>
                <li>
                  <b>Support Post-Séance :</b> Même après la séance, nous
                  offrons un soutien continu pour aider les individus à
                  maintenir leur nouvelle liberté face à l'addiction. Cela peut
                  inclure des ressources d'apprentissage, des conseils pour
                  gérer les envies et un suivi pour assurer le succès à long
                  terme.
                </li>
                <li>
                  <b>Amélioration de la Santé Globale :</b> En surmontant leur
                  addiction, les individus peuvent améliorer leur santé globale,
                  augmenter leur longévité et améliorer leur bien-être physique
                  et mental. C'est un investissement dans une vie plus saine et
                  plus heureuse.
                </li>
                <li>
                  <b>Confidentialité et Respect :</b> Nous assurons un
                  environnement sûr, confidentiel et respectueux pour tous nos
                  clients. Nous comprenons que faire face à une addiction est un
                  défi personnel et privé, et nous nous engageons à respecter la
                  dignité et l'intimité de chaque individu.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div class="container rounded-lg mt-5">
        <div
          class="rounded-lg"
          style="
            margin: 10px;
            box-shadow: -5px -5px 5px 5px #888888;
            padding: 20px;
          "
        >
          <div class="row justify-content-center text-center">
            <div
              class=""
              data-aos="fade-up"
              style="width: 100%; text-align: left"
            >
              <h2 class="section-heading ml-5">
                Vers une Vie Sans Tabac : Notre Approche Complète pour Vous
                Aider à Arrêter de Fumer :
              </h2>
            </div>
          </div>
          <div class="row">
            <div
              class="col-md-11 ml-5"
              data-aos="fade-up"
              data-aos-delay=""
              style="color: black; font-size: 20px"
            >
              <ol style="padding: 20px">
                <li>
                  <b>Expertise spécialisée :</b> Notre cabinet anti-addiction
                  dispose d'une équipe de professionnels expérimentés dans le
                  traitement de la dépendance au tabac. Ils sont formés pour
                  comprendre les mécanismes de l'addiction et mettre en place
                  des stratégies personnalisées pour vous aider à arrêter de
                  fumer.
                </li>
                <li>
                  <b>Approche holistique :</b> Nous adoptons une approche
                  holistique pour vous aider à arrêter de fumer. En plus de vous
                  aider à surmonter la dépendance physique à la nicotine, nous
                  travaillons également sur les aspects émotionnels,
                  comportementaux et psychologiques de l'addiction. Cela vous
                  donne une meilleure chance de réussir à long terme.
                </li>
                <li>
                  <b>Suivi personnalisé :</b> Chaque personne est unique, c'est
                  pourquoi nous offrons un suivi personnalisé à nos clients.
                  Nous vous aidons à identifier les déclencheurs qui vous
                  poussent à fumer et nous vous donnons les outils nécessaires
                  pour les surmonter. Nous sommes là pour vous soutenir tout au
                  long de votre parcours vers un mode de vie sans tabac.
                </li>
                <li>
                  <b>Méthodes éprouvées :</b> Notre cabinet utilise des méthodes
                  de traitement éprouvées et basées sur des preuves pour vous
                  aider à arrêter de fumer. Nous nous appuyons sur des
                  techniques telles que la thérapie cognitivo-comportementale,
                  l'acupuncture, l'hypnothérapie et d'autres approches
                  complémentaires pour maximiser vos chances de succès.
                </li>
                <li>
                  <b>Réseau de soutien :</b> En rejoignant notre cabinet
                  anti-addiction, vous devenez membre d'un réseau de soutien
                  bienveillant. Vous aurez l'opportunité de partager votre
                  expérience avec d'autres personnes qui traversent la même
                  épreuve et d'obtenir des conseils et des encouragements de
                  personnes qui comprennent ce que vous vivez.
                </li>
                <li>
                  <b>Amélioration de la santé :</b> Arrêter de fumer présente de
                  nombreux avantages pour votre santé. Vous réduirez
                  considérablement les risques de maladies cardiovasculaires, de
                  cancer et d'autres problèmes de santé liés au tabagisme. Notre
                  cabinet vous accompagne dans cette transformation positive
                  pour votre bien-être global.
                </li>
                <li>
                  <b>Gain financier :</b> Outre les bienfaits pour la santé,
                  arrêter de fumer peut également vous aider à réaliser des
                  économies significatives. En cessant d'acheter des paquets de
                  cigarettes, vous pourrez économiser de l'argent que vous
                  pourrez consacrer à d'autres projets ou à des activités qui
                  vous tiennent à cœur.
                </li>
              </ol>
            </div>
          </div>
          <div
            class="row"
            data-aos="fade-down"
            style="box-shadow: inset 0 0 10px 5px red; padding: 20px"
          >
            <h3
              data-aos="fade-left"
              style="width: 100%; text-align: center; color: #3da94f"
            >
              Clause de non-responsabilité
            </h3>
            <div
              class="col-md-11 ml-5"
              data-aos="fade-up"
              data-aos-delay=""
              style="color: black; font-size: 20px"
            >
              N'oubliez pas que chaque personne est différente et que les
              résultats peuvent varier. Cependant, en choisissant notre cabinet
              anti-addiction, vous vous donnez les meilleures chances
              d'atteindre votre objectif d'arrête de fumer.
            </div>
          </div>
        </div>
      </div>
      <div class="container rounded-lg mt-5">
        <div
          class="rounded-lg"
          style="
            margin: 10px;
            box-shadow: -5px -5px 5px 5px #888888;
            padding: 20px;
          "
        >
          <div class="row justify-content-center text-center">
            <div
              class=""
              data-aos="fade-up"
              style="width: 100%; text-align: left"
            >
              <h2 class="section-heading ml-5">Notre installation</h2>
            </div>
          </div>
          <div class="row">
            <div
              class="col-md-11"
              data-aos="fade-up"
              data-aos-delay=""
              style="color: black; font-size: 20px"
            >
              <div class="row justify-content-center text-center">
                <div
                  class=""
                  data-aos="fade-up"
                  style="width: 100%; text-align: left"
                >
                  <h2 class="section-headin ml-5">Emplacement</h2>
                </div>
              </div>
              <div class="row">
                <div
                  class="col-md-6 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay=""
                >
                  <img
                    :src="view.img2"
                    style="width: inherit"
                    class="rounded-lg"
                  />
                </div>
                <div
                  class="col-md-6"
                  data-aos="fade-up"
                  data-aos-delay=""
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <p style="color: black; text-align: center">
                    Specialisé en auriculothérapie, Adictator offre des
                    solutions innovantes pour le traitement des addictions.
                    Situé au Centre Ambroise Paré, au 68 rue Aristide Briand à
                    Les Mureaux, cet établissement jouit d'un emplacement
                    stratégique au cœur de la communauté locale. Grâce à son
                    expertise en auriculothérapie et à son approche holistique,
                    Adictator aide les individus à surmonter leurs addictions et
                    à retrouver un mode de vie sain et équilibré. Avec une
                    équipe de professionnels expérimentés et un environnement
                    accueillant, Adictator s'engage à fournir des soins de
                    qualité et un soutien personnalisé à chaque client.
                  </p>
                </div>
              </div>
              <div class="row justify-content-center text-center">
                <div
                  class=""
                  data-aos="fade-up"
                  style="width: 100%; text-align: left"
                >
                  <h2 class="section-headin ml-5">Notre galerie</h2>
                </div>
              </div>
              <div class="row" data-aos="fade-down">
                <div class="col-md-6">
                  <img :src="img3" style="width: inherit" class="rounded-lg" />
                </div>
                <div class="col-md-6 mb-5">
                  <img :src="img4" style="width: inherit" class="rounded-lg" />
                </div>
                <div class="col-md-12 mb-5">
                  <img :src="img5" style="width: inherit" class="rounded-lg" />
                </div>
                <div class="col-md-12 mb-5">
                  <video width="320" height="240" controls style="width:inherit" class="rounded-lg">
                    <source :src="img6" type="video/mp4" />
                    <!--source src="movie.ogg" type="video/ogg" /-->
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import img1 from "@/assets/Logo.jpg";
import img2 from "@/assets/img/loc.jpg";
import img3 from "@/assets/img/im1 (5).jpg";
import img4 from "@/assets/img/im1 (6).jpg";
import img5 from "@/assets/img/im1 (7).jpg";
import img6 from "@/assets/img/im1 (1).mp4";
export default {
  data() {
    return {
      img3,
      img4,
      img5,
      img6,
      view: {
        slowShow: false,
        img1: img1,
        img2: img2,
        a1: `ADICTATOR un cabinet anti addiction, qui aide les personnes à surmonter leurs dépendances, un cabinet anti-addiction qui contribue à améliorer la qualité de vie. Cela peut se traduire par une meilleure santé mentale et physique, des relations améliorées avec la famille et les amis, et une plus grande capacité à participer pleinement à la société.`,
        a2: `Adictator Un cabinet anti-addiction qui offre un environnement où les individus peuvent chercher de l'aide en toute confidentialité et sans jugement, ce qui peut être crucial pour ceux qui luttent contre la stigmatisation et la honte souvent associées à la dépendance.`,
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
