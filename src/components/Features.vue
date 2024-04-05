<template>
  <section class="section">
    <div class="container rounded-lg" style="background-color: #34B64A">
      <div class="row justify-content-center text-center mb-5">
        <div class="" data-aos="fade-up">
          <h2 class="">SERVICES QUE NOUS PROPOSONS</h2>
        </div>
      </div>

      <div class="row" style="justify-content:center; padding: 20px">
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="">
          <div class="feature-1 text-center rounded-lg" style="background-color:#a5a6a5; display: flex; flex-direction: column-reverse; padding: 20px; margin-bottom: 20px">
            <div class="wrap-icon icon-1">
              <img :src="vaporizer" class="service-image"/>
            </div>
            <h3 class="mb-3 service-name-red">Vaporisateur</h3>
            <p style="color:black">
              Apprenez à arrêter de vapoter pour vous aider à réaliser le sevrage en 1 séance.
            </p>
          </div>
        </div>
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="100">
          <div class="feature-1 text-center rounded-lg" style="background-color:white; padding: 20px; margin-bottom: 20px">
            <div class="wrap-icon icon-1">
              <img :src="tobacco" class="service-image"/>
            </div>
            <h3 class="mb-3 service-name-red">le tabac</h3>
            <p style="color:black">
              Arrêt du tabac avec notre programme et suivi personnalisé
            </p>
          </div>
        </div>
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="200">
          <div class="feature-1 text-center rounded-lg" style="background-color:#a5a6a5; display: flex; flex-direction: column-reverse; padding: 20px; margin-bottom: 20px">
            <div class="wrap-icon icon-1">
              <img :src="can" class="service-image"/>
            </div>
            <h3 class="mb-3 service-name-red">Cannabis</h3>
            <p style="color:black">
              Sevrer des drogues douces avec notre programme anti-addiction.
            </p>
          </div>
        </div>
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="">
          <div class="feature-1 text-center rounded-lg" style="background-color:white; padding: 20px; margin-bottom: 20px">
            <div class="wrap-icon icon-1">
              <img :src="sugar" class="service-image"/>
            </div>
            <h3 class="mb-3 service-name-red">Sucre</h3>
            <p style="color:black">
              Régulez votre consommation de sucre avec notre méthode.
            </p>
          </div>
        </div>
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="100">
          <div class="feature-1 text-center rounded-lg" style="background-color:#a5a6a5; display: flex; flex-direction: column-reverse; padding: 20px; margin-bottom: 20px">
            <div class="wrap-icon icon-1">
              <img :src="stress" class="service-image"/>
            </div>
            <h3 class="mb-3 service-name-other">Stresser</h3>
            <p style="color:black">
              Gagnez en sérénité avec notre programme contre le stress et l'anxiété.
            </p>
          </div>
        </div>
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="">
          <div class="feature-1 text-center rounded-lg" style="background-color:white; padding: 20px; margin-bottom: 20px">
            <div class="wrap-icon icon-1">
              <img :src="pain" class="service-image"/>
            </div>
            <h3 class="mb-3 service-name-other">Douleur</h3>
            <p style="color:black">
              Supprimer la douleur avec notre méthode est possible.
            </p>
          </div>
        </div>
        <div class="col-md-3" data-aos="fade-up" data-aos-delay="200">
          <div class="feature-1 text-center rounded-lg" style="background-color:#a5a6a5; display: flex; flex-direction: column-reverse; padding: 20px; margin-bottom: 20px">
            <div class="wrap-icon icon-1">
              <img :src="pain" class="service-image"/>
            </div>
            <h3 class="mb-3 service-name-other">Poids</h3>
            <p style="color:black">
              Prenez le contrôle de votre poids avec notre accompagnement personnalisé.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import tobacco from "@/assets/img/IconCategorie-2-2048x2048.png"
import sugar from "@/assets/img/IconCategorie-4-2048x2048.png"
import stress from "@/assets/img/Taterapi-Icon-1-2048x2048.png"
import pain from "@/assets/img/pain.png"
import weight from "@/assets/img/weight.png"
import vaporizer from "@/assets/img/11.png"
import can from "@/assets/img/IconCategorie-1-2048x2048.png"
export default {
  data() {
    return {
      tobacco:tobacco,
      sugar:sugar,
      pain: pain,
      vaporizer,
      can,
      stress,
      weight
    };
  },
};
</script>

<style scoped>
.service-image{
  width: 120px
}

.service-name-red{
  color:#f21e1e;
  font-size: 30px;
  text-decoration: bold;
}
.service-name-other{
  color:#25652f;
  font-size: 30px;
  text-decoration: bold;
}
</style>