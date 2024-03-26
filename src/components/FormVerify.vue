<template>
  <div>
    <b-card id="cardLogin" class="scale-in-bl">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" id="formLogin">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          class="blob"
        >
          <path
            fill="#274180"
            d="M66.2,-49.1C81.5,-33.5,86.8,-6.2,79.8,15.6C72.7,37.5,53.3,53.9,30.9,65.1C8.5,76.2,-16.9,81.9,-36.2,73.3C-55.5,64.7,-68.8,41.7,-70.8,19.9C-72.8,-2,-63.6,-22.7,-49.9,-37.8C-36.2,-53,-18.1,-62.7,3.6,-65.6C25.4,-68.5,50.8,-64.6,66.2,-49.1Z"
            transform="translate(100 100)"
          />
        </svg>

        <h1 class="text-center mb-3">Verify your account</h1>
        <h2 class="text-center mb-4">Input your verify code.</h2>

        <b-form-group id="input-group-1" label-for="code">
          <b-form-input
            id="code"
            name="code"
            class="form-input"
            :class="{ 'is-invalid': submitted && errors.has('code') }"
            v-model="code"
            type="text"
            placeholder="Verify Code"
          ></b-form-input>
        </b-form-group>

        <div class="d-flex justify-content-center mt-3">
          <b-button type="submit" variant="primary" class="btn-login"
            >Resend <font-awesome-icon icon="arrow-right" class="arrow"
          /></b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      code: "",
      show: true,
      submitted: false,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      let param = {
        email: this.$store.getters.email,
      };
      this.$store
        .dispatch("resend_email", param)
        .then((res) => {
          if (res.data.status) {
            this.$awn.success("You have sent verify code again successfully");
          }
        })
        .catch((err) => {
          this.$awn.warning(err.response.data.message);
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.code = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    handleVerify: function () {
      let param = {
        code: this.code,
        email: this.$store.getters.email,
      };
      this.$store
        .dispatch("verify", param)
        .then((res) => {
          if (res !== undefined) {
            if (res.data.status) {
              this.$awn.success(res.data.message);
              this.$router.push({ path: "/login" });
            } else {
              this.$awn.warning(res.data.message);
            }
          } else {
            this.$awn.warning(
              "Verification code provided is Invalid. Please look in your mail for the code"
            );
          }
        })
        .catch((err) => {
          this.$awn.warning(err.response.data.message);
        });
    },
  },
  watch: {
    code: function () {
      if (this.code.length >= 8) {
        this.handleVerify();
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/animations.scss";
@import "../assets/scss/variables.scss";
@import "../assets/scss/fonts.scss";

body {
  font-family: $OpenSans !important;
}

#cardLogin {
  border-radius: 15px;
  box-shadow: 0px 0px 10px $gray;

  #formLogin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    position: relative;

    h1 {
      color: $primary;
      font-weight: 700;
      font-family: $Poppins;
    }

    h2 {
      font-size: 1.2rem;
      color: $lightBlack;
      font-weight: 600;
      font-family: $Poppins;
    }

    .other-account {
      color: $gray;
    }

    .icons {
      width: 30px;
      cursor: pointer;
    }

    .input {
      border-radius: 10px;
    }

    .remember {
      color: $lightBlack;
    }

    .blob {
      position: absolute;
      top: -15%;
      left: -12%;
      width: 150px;
      opacity: 0.2;
    }
  }

  .forgotPassword {
    color: $gray;
    text-decoration: none;

    &:hover {
      color: $primary;
      transition: 0.5s ease-in-out;
    }
  }

  .arrow-btn {
    width: 100px;
    border-radius: 15px;
    background: $primary;
    color: #fff;
    font-size: 60px;
    padding: 5px;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover {
      background: $secondary;
      transition: 0.5s ease-in-out;
      box-shadow: none;
    }
  }

  .register {
    span {
      color: $lightBlack;
    }

    .loginAccount {
      color: $primary;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
