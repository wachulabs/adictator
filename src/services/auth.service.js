import api from "./api";
import TokenService from "./token.service";

class AuthService {
  register(data) {
    return api.post("api/users/register", data);
  }

  login(data) {
    return api.post("api/users/login", data).then((response) => {
      console.log(response)
      if (response.data.data.access_Token) {
        TokenService.setUser(response.data.data);
      }
      return response.data;
    },
    err => {
      console.log(err)
    }
    );
  }
  
  verify(data) {
    return api
      .post("api/verify-mail", data)
  }
  
  resend_email(data) {
    return api.get(`api/resend-mail/${data.email}`)
  }
}

export default new AuthService();
