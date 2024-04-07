<template>
  <section class="section" style="margin-top: 100px; margin-bottom: 50px">
    <div class="container">
      <div class="row align-items-center rounded-lg" style="box-shadow: 0 15px 50px 0 rgba(0, 0, 0, 0.3); background-color:#FFFFFF; margin:20px; padding: 10px">
        <div
          class="col-md-4 rounded-lg"
          data-aos="fade-up"
          data-aos-delay=""
          style="margin-bottom: 0px; background-color: black; height: 500px;color:white"
        >
    <h3>Coordonnées</h3>
    </div>
        <div
          class="col-md-8"
          data-aos="fade-up"
          data-aos-delay=""
          style="margin-bottom: 10px"
        >
          <form @submit.prevent="submitForm">
            <input type="text" name="name" v-model="name" />
            <input type="email" name="email" v-model="email" />
            <textarea name="message" v-model="message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
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
          name: this.name,
          email: this.email,
          message: this.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        console.log(result);
      }
    },
  },
};
</script>
