import AuthService from "@/services/auth.service";
const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: {} };

export const auth = {
  state: initialState,
  getters: {
    username: (state) => {
      return state.user ? state.user.username : null;
    },
    email: (state) => {
      return state?.email;
    },
    loggedIn: (state) => {
      return state.status.loggedIn;
    },
    remember: (state) => {
      return state.status.remember;
    },
  },
  actions: {
    register({ commit }, user) {
      return AuthService.register(user).then(
        (response) => {
          commit("registerSuccess", user);
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("registerFailure");
          return Promise.reject(error);
        }
      );
    },
    login({ commit }, user) {
      return AuthService.login(user).then(
        (user) => {
          commit("loginSuccess", user.data);
          return Promise.resolve(user);
        },
        (error) => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },
    remember({ commit }, data) {
      commit("set_remember", data);
    },
    refreshToken({ commit }, access_token) {
      commit("refreshToken", access_token);
    },
    logout({ commit }) {
      commit("logout");
    },
    verify({ commit }, data) {
      return AuthService.verify(data).then(
        (res) => {
          commit("verifySuccess");
          return Promise.resolve(res);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    resend_email({commit },data) {
      return AuthService.resend_email(data).then(
        (res) => {
          commit("resendSuccess")
          return Promise.resolve(res);
        },
        (err) => {
          return Promise.reject(err);
        }
      );
    },
  },
  mutations: {
    registerSuccess(state, user) {
      state.status.loggedIn = false;
      state.email = user.email;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    set_remember: (state, data) => {
      state.status.remember = data;
    },
    logout: (state) => {
      state.user = null;
      state.status.loggedIn = false;
    },
    refreshToken: (state, access_token) => {
      state.status.loggedIn = true;
      state.user = { ...state.user, accessToken: access_token };
    },
    verifySuccess: (state) => {
      state.status.loggedIn = false;
    },
    resendSuccess: state => {
      state.status.loggedIn = false;
    }
  },
};
