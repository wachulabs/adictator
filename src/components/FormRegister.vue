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

        <h1 class="text-center mb-3">Register</h1>
        <h2 class="text-center mb-4">Welocome to Beast Api</h2>
        <b-form-group id="input-username" label-for="username">
          <b-form-input
            id="username"
            name="username"
            :data-vv-as="'username'"
            class="form-control"
            :class="{ 'is-invalid': submitted && errors.has('username') }"
            v-model="form.username"
            type="text"
            placeholder="Full Name"
            v-validate="'required'"
          ></b-form-input>
          <b-form-invalid-feedback
            v-if="submitted && errors.has('username')"
            id="input-1-live-feedback"
            >{{ errors.first("username") }}</b-form-invalid-feedback
          >
        </b-form-group>

        <b-form-group id="input-email" label-for="email">
          <b-form-input
            id="email"
            name="email"
            :data-vv-as="'email'"
            class="form-control"
            :class="{ 'is-invalid': submitted && errors.has('email') }"
            v-model="form.email"
            type="text"
            placeholder="E-mail"
            v-validate="'required|email'"
          ></b-form-input>
          <b-form-invalid-feedback
            v-if="submitted && errors.has('email')"
            id="input-1-live-feedback"
            >{{ errors.first("email") }}</b-form-invalid-feedback
          >
        </b-form-group>

        <b-form-group id="input-password" label-for="password">
          <b-form-input
            id="password"
            name="password"
            :data-vv-as="'password'"
            class="form-control"
            :class="{ 'is-invalid': submitted && errors.has('password') }"
            v-model="form.password"
            placeholder="Password"
            type="password"
            ref="password"
            v-validate="'required|min:8'"
          ></b-form-input>
          <b-form-invalid-feedback
            v-if="submitted && errors.has('password')"
            id="input-1-live-feedback"
            >{{ errors.first("password") }}</b-form-invalid-feedback
          >
        </b-form-group>

        <b-form-group id="input-confirmpassoword" label-for="confirmpassoword">
          <b-form-input
            id="password_confirmation"
            name="password_confirmation"
            :data-vv-as="'password'"
            class="form-control"
            :class="{
              'is-invalid': submitted && errors.has('password_confirmation'),
            }"
            v-model="form.passwordrepeat"
            placeholder="confirm your password"
            type="password"
            v-validate="'required|confirmed:password'"
          ></b-form-input>
          <b-form-invalid-feedback
            v-if="submitted && errors.has('password_confirmation')"
            id="input-1-live-feedback"
            >{{
              errors.first("password_confirmation")
            }}</b-form-invalid-feedback
          >
        </b-form-group>

        <div class="d-flex justify-content-center mt-3">
          <b-button type="submit" variant="primary" class="btn-login"
            >Register <font-awesome-icon icon="arrow-right" class="arrow"
          /></b-button>
        </div>

        <div class="d-flex justify-content-center flex-wrap mt-4 register">
          <span class="mr-2">Already have an account?</span>
          <a @click="$router.go(-1)" class="loginAccount">Enter</a>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        passwordrepeat: "",
      },
      submitted: false,
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$validator.validate().then((valid) => {
        this.submitted = true;
        if (valid) {
          this.$store
            .dispatch("register", this.form)
            .then((res) => {
              console.log("response",res)
              if (res.status) {
                this.$router.push("verify");
              }
              this.$awn.success(res.message);
            })
            .catch((err) => {
              this.$awn.warning(err.response.data.message);
            });
        }
      });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.username = "";
      this.form.email = "";
      this.form.password = null;
      this.form.confirmpassoword = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      console.log("reset");
      this.$nextTick(() => {
        this.show = true;
      });
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
