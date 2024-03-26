<template>
  <header
    id="header"
    class="fixed-top d-flex align-items-center"
    :class="{ 'header-scrolled': !view.topOfPage}"
  >
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo">
        <h1><router-link to="/">Beast API</router-link></h1>
      </div>

      <nav
        id="navbar"
        class="navbar"
        :class="{ 'navbar-mobile': view.menuOpened }"
      >
        <ul >
          <li @click="closeMenuState">
            <router-link to="/" :class="{ active: current_router === '/' }"
              >Home</router-link
            >
          </li>
          <li @click="closeMenuState">
            <router-link
              to="#"
              :class="{ active: current_router === '/features' }"
              >Features</router-link
            >
          </li>
          <li @click="closeMenuState">
            <router-link
              to="#"
              :class="{ active: current_router === '/princing' }"
              >Pricing</router-link
            >
          </li>
          <li @click="closeMenuState">
            <router-link to="#" :class="{ active: current_router === '/blog' }"
              >Blog</router-link
            >
          </li>
          <li class="dropdown" @click="handleDropdown(1)">
            <router-link to="#"
              ><span>Drop Down</span> <i class="bi bi-chevron-down"></i
            ></router-link>
            <ul :class="{ 'dropdown-active': view.dropOpened }">
              <li @click="closeMenuState"><router-link to="#">Drop Down 1</router-link></li>
              <li @click="closeMenuState">
                <router-link to="#">Drop Down 2 </router-link>
              </li>
              <li @click="closeMenuState"><router-link to="#">Drop Down 3</router-link></li>
              <li @click="closeMenuState"><router-link to="#">Drop Down 4</router-link></li>
            </ul>
          </li>
          <li @click="closeMenuState">
            <router-link
              to="#"
              :class="{ active: current_router === '/contactus' }"
              >Contact Us</router-link
            >
          </li>
          <li v-if="!loggedIn" @click="closeMenuState">
            <router-link
              to="/login"
              :class="{ active: current_router === '/login' }"
              >Login</router-link
            >
          </li>
          <li v-if="!loggedIn" @click="closeMenuState">
            <router-link
              class="btn_register"
              :class="{ active: current_router === '/register' }"
              to="/register"
              >Register</router-link
            >
          </li>
          <li v-if="loggedIn" class="dropdown" @click="handleDropdown(2)">
            <router-link to="#"
              ><span>@{{ username }}</span> <i class="bi bi-chevron-down"></i
            ></router-link>
            <ul
              :class="{ 'dropdown-active': view.logoutOpened }"
              class="custom_dropdown"
            >
              <li @click="handleLogout">
                <router-link to="#">Logout</router-link>
              </li>
            </ul>
          </li>
        </ul>
        <i
          class="bi mobile-nav-toggle"
          :class="{ 'bi-list': !view.menuOpened, 'bi-x': view.menuOpened }"
          @click="switchMenuState"
        ></i>
      </nav>
    </div>
  </header>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      view: {
        topOfPage: true,
        menuOpened: false,
        dropOpened: false,
        logoutOpened: false,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapGetters(["username", "loggedIn"]),
    current_router: function () {
      return this.$route.path;
    },
  },
  methods: {
    ...mapMutations(["logout"]),
    handleScroll() {
      console.log(window.pageYOffset)
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
    switchMenuState() {
      this.view.menuOpened = !this.view.menuOpened;
    },
    handleDropdown(value) {
      if (value === 1) {
        this.view.dropOpened = !this.view.dropOpened;
      } else if (value === 2) {
        this.view.logoutOpened = !this.view.logoutOpened;
        this.closeMenuState()
      }
    },
    handleLogout() {
      this.logout();
      this.$router.push("/");
    },
    closeMenuState() {
      if (this.view.menuOpened === true) {
        this.view.menuOpened = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.btn_register {
  background: white;
  color: #3593b5;
  margin-left: 10px;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 600;

  &:hover {
    color: #3593b5;
    text-decoration: none;
    cursor: pointer;
  }

  &:focus {
    background: white;
    color: #3593b5;
    margin-left: 10px;
    padding: 5px 15px;
    border-radius: 20px;
    font-weight: 600;
  }
}
@media screen and (min-width: 992px) {
  .custom_dropdown {
    width: 90px;
  }
}

@media screen and (max-width: 992px) {
  .btn_register {
    margin-left: 0px;
    padding-left: 20px;
    color: #365268;
  }
}
</style>
