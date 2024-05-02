<template>
  <section class="section" id="" style="margin-top: 100px; margin-bottom: 50px">
    <div class="container">
      <div class="row alight-items-center rounded-lg">
        <div class="col-12 rounded-lg" style="
            margin: 10px;
            box-shadow: 0 15px 50px 0 rgba(0, 0, 0, 0.3);
            padding: 20px;
          ">
          <div class="row justify-content-center text-center mb-5">
            <div class="" data-aos="fade-up" style="width: 100%">
              <h2 class="section-heading" style="text-align: left">
                Entreprise
              </h2>
            </div>
          </div>
          <div class="row" style="padding: 20px; font-size: 20px; color: black">

            Un business rentable et simple a démarrer avec Adictator

            Si vous êtes venu jusqu'à cette page, c’est que vous aimez, le business, accessible nouveau et rentable. Ne
            bougez pas. Vous êtes au bon endroit.
            Le groupe Adictator, renforcé du Professeur Laurent Conrad pour la méthode Conradictator c’est bientôt :
            -des cabinets partout en France et en Europe, -des cabinets partenaires,
            des cabinets franchisés
            mais aussi
            -des milliers de conseillers commerciaux en Addictologie travaillant à leur compte en développant, leur
            propre business

            Pour les passionnés de thérapie,
            Pour ceux qui aiment rendre service
            Pour ceux qui veulent faire la guerre aux addictions
            Pour ceux qui cherchent un business rentable qui a beaucoup d’avenir

            Vous gagnez votre vie, en changeant celle des autres

            Rejoignez-nous
            En partenariat, si vous avez déjà un cabinet
            En franchise, si vous comptez ouvrir un cabinet
            En free-lance si vous voulez travailler en autonomie indépendante

            Vous bénéficierez de pack de démarrage complet formation suivie conseil, support publicitaire, site
            Internet, matériel de haute qualité et assurance.
            Ce qui se fait de mieux en France
            Accompagnement juridique et fiscal
            Vous êtes au courant de toutes les nouveautés
            vous intégrez un groupe de grande renommée et vous bénéficiez de sa notoriété et de sa sécurité
            N’attendez plus: pour un business où une personne sur trois est addicte, où vous avez 13 millions de fumeurs
            en France
            Vous contribuez à améliorer la vie des autres tout en gagnant la vôtre .
            Rentabilité : vous n’avez aucun consommable juste notre méthodologie votre savoir et votre laser qui se
            recharge comme un téléphone . Je ne vais pas vous dénombrer tous les intérêts que vous avez à travailler
            avec Adictator c’est votre bonne fibre commerciale qui vous le dira
            Mais n’attendez pas trop pour vous positionner car les secteurs seront attribués et qu’on ne peut faire de
            l’auto concurrence sur le même périmètre
            Les prix des franchises augmenteront aussi à l’avenir donc profitez de signer au plus vite.
            La course vient juste de commencer. Entrez dans la meilleure team anti addiction
            Adictator

            A vos business partez

            envoyiez nous. vous demandez en précisant bien votre situation
            Si vous avez un cabinet ?
            Si vous souhaitez en ouvrir un ?
            Ou si vous voulez travailler à votre compte ?
          </div>
        </div>
      </div>
      <div class="row align-items-center rounded-lg">
        <div class="col-12 rounded-lg" style="
            margin: 10px;
            box-shadow: 0 15px 50px 0 rgba(0, 0, 0, 0.3);
            padding: 20px;
          ">
          <div class="row justify-content-center text-center mb-5">
            <div class="" data-aos="fade-up" style="width: 100%">
              <h2 class="section-heading" style="text-align: left">
                Devenir un partenaire
              </h2>
            </div>
          </div>

          <div class="row" style="padding: 20px; font-size: 20px">
            <p style="color: black">
              Vous souhaitez devenir franchisé Adictator Contactez-nous
              rapidement. Nous vous offrons formation Materiel vous intégrer un
              réseau dynamique innovant à l’avenir très prometteur
            </p>
          </div>
          <div class="row align-items-center rounded-lg" style="
              box-shadow: 0 15px 50px 0 rgba(0, 0, 0, 0.3);
              background-color: #ffffff;
              margin: 20px;
              padding: 10px;
            ">
            <div class="col-md-4 rounded-lg" data-aos="fade-up" data-aos-delay="" style="
                margin-bottom: 0px;
                background-color: black;
                height: 500px;
                color: white;
                justify-content: space-between;
                display: flex;
                flex-direction: column;
              ">
              <h3 style="
                  color: white;
                  padding: 10px;
                  text-align: center;
                  width: 100%;
                  margin: 10px;
                ">
                Coordonnées
              </h3>
              <p>
                Envoyez-nous un message et nous vous répondrons dans les plus
                brefs délais !
              </p>
              <div style="
                  align-items: flex-start;
                  display: flex;
                  flex-direction: column;
                  justify-content: left;
                  margin: 30px 0px;
                ">
                <p>
                  <i class="bi bi-telephone-x" style="color: #38b44a"></i>
                  0782218188
                </p>
                <p>
                  <i class="bi bi-envelope" style="color: #38b44a"></i>
                  adictatorfrance@gmail.com
                </p>
                <p>
                  <i class="bi bi-geo-alt-fill" style="color: #38b44a"></i>
                  Centre Ambroise Paré 68 rue Aristide Briand 78130 Les Mureaux
                </p>
              </div>
              <p class="social" style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                ">
                <router-link to="#" class="social-item"><span class="bi bi-twitter"></span></router-link>
                <router-link to="#" class="social-item"><span class="bi bi-facebook"></span></router-link>
                <router-link to="#" class="social-item"><span class="bi bi-instagram"></span></router-link>
                <router-link to="#" class="social-item"><span class="bi bi-linkedin"></span></router-link>
              </p>
            </div>
            <div class="col-md-8" data-aos="fade-up" data-aos-delay="" style="margin-bottom: 10px">
              <form @submit.prevent="submitForm">
                <div class="in">
                  <div style="display: flex; flex-direction: column">
                    <label>Prénom</label>
                    <input type="text" name="firstname" v-model="firstname" placeholder="Entrez votre prénom" />
                  </div>
                  <div style="display: flex; flex-direction: column">
                    <label>nom de famille</label>
                    <input type="text" name="lastname" v-model="lastname" placeholder="Entrez votre deuxième nom" />
                  </div>
                </div>
                <div class="in">
                  <div style="display: flex; flex-direction: column">
                    <label>E-mail</label>
                    <input type="email" name="email" v-model="email" placeholder="Entrez votre Email" />
                  </div>
                  <div style="display: flex; flex-direction: column">
                    <label>Téléphone</label>
                    <input type="tel" name="phone" v-model="phone" placeholder="Téléphone" />
                  </div>
                </div>
                <!--div style="padding: 20px 20px 20px 30px">
              <b-form-group
                label="Sélectionnez le sujet"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-radio-group
                  id="radio-slots"
                  v-model="selected"
                  :options="options"
                  :aria-describedby="ariaDescribedby"
                  name="radio-options-slots"
                  button-variant="outline-success"
                  radios
                >
                </b-form-radio-group>
              </b-form-group>

              <div class="mt-3">
                Selected: <strong>{{ selected }}</strong>
              </div>
            </div-->
                <div style="
                    display: flex;
                    flex-direction: column;
                    padding: 20px;
                    padding-left: 30px;
                  ">
                  <label>Message</label>
                  <textarea name="message" v-model="message" style="
                      outline: none;
                      border: none;
                      border-bottom: 1px solid;
                      resize: none;
                      border-color: rgba(164, 164, 201, 0.7);
                    "></textarea>
                </div>
                <div style="display: flex; justify-content: end; margin: 10px">
                  <button type="submit" style="
                      padding: 20px;
                      border: none;
                      background-color: #38b44a;
                    " class="rounded-lg">
                    Devenez partenaire
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row align-items-center rounded-lg">
        <div class="col-12 rounded-lg" style="padding: 20px">
          <Map></Map>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import img1 from "@/assets/img/im1.jpg";
import img2 from "@/assets/img/im2.jpg";
import Map from "@/components/Map.vue";
const WEB3FORMS_ACCESS_KEY = "6daffa6e-f826-44ca-9d8d-5e89ee282369";
export default {
  components: {
    Map,
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      message: "",
      selected: "Enquête générale",
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
    async submitForm() {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          FirstName: this.firstname,
          LastName: this.lastname,
          Email: this.email,
          Phone: this.phone,
          Subject: this.selected,
          Message: this.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.message = "";
        this.phone = "";
        this.$awn.success("Demande envoyée avec succès.");
        this.selected = "Enquête générale";
        console.log(result);
      }
    },
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

.social-item {
  margin-right: 10px;
  background-color: #38b44a;
}

.in {
  display: flex;
  padding: 20px;
}

.in div {
  margin: 10px;
  width: 50%;
}

.in input {
  outline: none;
  border: none;
  border-bottom: 1px solid;
  border-color: rgba(164, 164, 201, 0.7);
  padding: 10px 0px;
}

@media screen and (max-width: 768px) {
  .in {
    flex-direction: column;
  }

  .in div {
    width: 100%;
  }
}
</style>
