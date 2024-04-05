<template>
  <section class="section" data-aos="zoom-in" data-aos-once="false">
    <div class="container">
      <div class="row justify-content-center text-center mb-5">
        <div class="col-md-4">
          <h2 class="section-heading">les partenaires</h2>
          <!--p>You are in good company. Join them</p-->
        </div>
      </div>
      <div class="brand-list">
        <div class="brand">
          <img :src="logo1" alt="microsoft" />
        </div>
        <div class="brand">
          <img :src="logo2" alt="nba" />
        </div>
        <div class="brand">
          <img :src="logo3" alt="paramount" />
        </div>
        <div class="brand">
          <img :src="logo4" alt="sony_music" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import logo1 from "@/assets/img/logo/microsoft.png";
import logo2 from "@/assets/img/logo/nba.png";
import logo3 from "@/assets/img/logo/paramount.png";
import logo4 from "@/assets/img/logo/sony_music.png";
export default {
  data() {
    return {
      logo1: logo1,
      logo2: logo2,
      logo3: logo3,
      logo4: logo4,
    };
  },
};
</script>
<style scoped>
.brand-list {
  max-width: 700px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color:#F3F5F6
}
.brand {
  width: 170px;
  padding: 0 10px;
  text-align: center;
}
.brand img {
  max-height: 80px;
}
</style>