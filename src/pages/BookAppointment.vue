<template>
  <section class="section" style="margin-top: 100px; margin-bottom: 50px">
    <div class="container">
      <div class="row justify-content-center text-center mb-5">
            <div class="" data-aos="fade-up" style="width:100%">
              <h2 class="section-heading" style="">Prendre rendez-vous</h2>
            </div>
          </div>
      <div
        class="row align-items-center rounded-lg"
        style="
          box-shadow: 0 15px 50px 0 rgba(0, 0, 0, 0.3);
          background-color: #ffffff;
          margin: 20px;
          padding: 10px;
        "
      >
        <div
          class="col-md-4 rounded-lg"
          data-aos="fade-up"
          data-aos-delay=""
          style="
            margin-bottom: 0px;
            background-color: inherit;
            height: 500px;
            color: white;
            justify-content: space-between;
            display: flex;
            flex-direction: column;
          "
        >
        <date-picker v-model="time1" valueType="format" type="datetime" placeholder="sélectionner l'heure du rendez-vous" :confirm="true" :open="true" :show-second="false" :show-time-header="true" prefix-class="mx"></date-picker>

        </div>
        <div
          class="col-md-8"
          data-aos="fade-up"
          data-aos-delay=""
          style="margin-bottom: 10px"
        >
          <form @submit.prevent="submitForm">
            <div class="in">
              <div style="display: flex; flex-direction: column">
                <label>Prénom</label>
                <input
                  type="text"
                  name="firstname"
                  v-model="firstname"
                  placeholder="Entrez votre prénom"
                />
              </div>
              <div style="display: flex; flex-direction: column">
                <label>nom de famille</label>
                <input
                  type="text"
                  name="lastname"
                  v-model="lastname"
                  placeholder="Entrez votre deuxième nom"
                />
              </div>
            </div>
            <div class="in">
              <div style="display: flex; flex-direction: column">
                <label>E-mail</label>
                <input
                  type="email"
                  name="email"
                  v-model="email"
                  placeholder="Entrez votre Email"
                />
              </div>
              <div style="display: flex; flex-direction: column">
                <label>Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  v-model="phone"
                  placeholder="Téléphone"
                />
              </div>
            </div>
            <div style="padding: 20px 20px 20px 30px">
              <b-form-group
                label="Service"
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

              <!--div class="mt-3">
                Selected: <strong>{{ selected }}</strong>
              </div-->
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                padding: 20px;
                padding-left: 30px;
              "
            >
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Informations Complémentaires"
                v-model="message"
                style="
                  outline: none;
                  border: none;
                  border-bottom: 1px solid;
                  resize: none;
                  border-color: rgba(164, 164, 201, 0.7);
                "
              ></textarea>
            </div>
            <div style="display: flex; justify-content: end; margin: 10px">
              <button
                type="submit"
                style="padding: 20px; border: none; background-color: #38b44a"
                class="rounded-lg"
              >
              Prendre rendez-vous
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const WEB3FORMS_ACCESS_KEY = "6daffa6e-f826-44ca-9d8d-5e89ee282369";
import 'vue2-datepicker/locale/fr';
import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';

export default {
  components: { DatePicker },
  data() {
    return {
      firstname: "",
      lastname: "",
      phone: "",
      datetime:"datetime",
      email: "",
      message: "",
      ss:false,
      selected: "Traitement de la dépendance à l'alcool",
      waterMarkText: "Select a date and time",
      time1:"",
      options: [
        { text: "Traitement de la dépendance à l'alcool", value: "Traitement de la dépendance à l'alcool" },
        { text: "Traitement de la dépendance au jeu", value: "Traitement de la dépendance au jeu" },
        { text: "Traitement de la dépendance au sucre", value: "Traitement de la dépendance au sucre" },
        { text: "amélioration de la libido", value: "amélioration de la libido" },
        { text: "Traitement de la dépendance au cannabis", value:"Traitement de la dépendance au cannabis"},
        { text: "Traitement de la dépendance au tabac", value: "Traitement de la dépendance au tabac"}
      ],
    };
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
          Prénom: this.firstname,
          "Nom de famille": this.lastname,
          Email: this.email,
          Phone: this.phone,
          Service: this.selected,
          "Informations Complémentaires": this.message,
          "Time":this.time1
        }),
      });
      const result = await response.json();
      if (result.success) {
        this.$awn.success("Rendez-vous pris avec succès.");
        this.firstname = ""
        this.lastname = ""
        this.email =  ""
        this.message = ""
        this.phone= ""
        this.selected = "Traitement de la dépendance à l'alcool"
        console.log(result);
      }
    },
  },
};
</script>
<style scoped>
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
