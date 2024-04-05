<template>
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4 mb-md-0">
          <h3>About Adictator</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea
            delectus pariatur, numquam aperiam dolore nam optio dolorem facilis
            itaque voluptatum recusandae deleniti minus animi.
          </p>
          <p class="social">
            <router-link to="#" class="social-item"
              ><span class="bi bi-twitter"></span
            ></router-link>
            <router-link to="#" class="social-item"
              ><span class="bi bi-facebook"></span
            ></router-link>
            <router-link to="#" class="social-item"
              ><span class="bi bi-instagram"></span
            ></router-link>
            <router-link to="#" class="social-item"
              ><span class="bi bi-linkedin"></span
            ></router-link>
          </p>
        </div>
        <div class="col-md-7 ms-auto">
          <div class="row site-section pt-0">
            <div class="col-md-4 mb-4 mb-md-0">
              <h3>Navigation</h3>
              <ul class="list-unstyled">
                <li><router-link to="#">Pricing</router-link></li>
                <li><router-link to="#">Features</router-link></li>
                <li><router-link to="#">Blog</router-link></li>
                <li><router-link to="#">Contact</router-link></li>
              </ul>
            </div>
            <div class="col-md-4 mb-4 mb-md-0">
              <h3>Services</h3>
              <ul class="list-unstyled">
                <li><router-link to="#">Team</router-link></li>
                <li><router-link to="#">Collaboration</router-link></li>
                <li><router-link to="#">Todos</router-link></li>
                <li><router-link to="#">Events</router-link></li>
              </ul>
            </div>
            <div class="col-md-4 mb-4 mb-md-0">
              <h3>Downloads</h3>
              <ul class="list-unstyled">
                <li>
                  <router-link to="#">Get from the App Store</router-link>
                </li>
                <li>
                  <router-link to="#">Get from the Play Store</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center text-center">
        <div class="col-md-7">
          <p class="copyright">
            &copy; Copyright Adictator. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
.footer {
  padding: 60px 0;
  background: #3caec2;
  color: white;
}
.social-item {
    margin-right: 10px;
}

.social-item:last-child {
    margin-right: 0;
}
</style>