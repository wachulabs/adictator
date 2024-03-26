<template>
  <section class="section cta-section">
    <div class="container">
      <div class="row align-items-center"  data-aos="zoom-in" data-aos-once="false">
        <div class="col-md-6 me-auto text-center text-md-start mb-5 mb-md-0">
          <h2>User-friendly Authentication</h2>
        </div>
        <div class="col-md-6">
          <div class="img-wrapper">
            <div class="image">
              <img :src="person1" class="friend friend-img1" alt="" />
            </div>
            <div class="image">
              <img :src="person2" class="friend friend-img2" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import person1 from "@/assets/img/person_1.jpg";
import person2 from "@/assets/img/person_3.jpg";
export default {
  data() {
    return {
      person1: person1,
      person2: person2,
    };
  },
};
</script>
<style>
.img-wrapper {
  position: relative;
}
.image {
  box-shadow: 7px 8px 20px 0px rgb(0 0 0);
  width: 200px;
}
.friend {
  width: 100%;
  height: 100%;
}
.friend-img1 {
  position: absolute;
  width: 200px;
  top: 39px;
  left: 170px;
  box-shadow: 7px 8px 20px 0px rgb(0 0 0);
}
</style>