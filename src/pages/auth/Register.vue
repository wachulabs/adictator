<template>
  <div class="auth-container">
    <b-container id="mainContainer" align-v="center">
      <BlobBg class="md-d-none" />
      <b-row align-v="center" align-h="center">
        <b-col md="6">
          <FormRegister />
        </b-col>
        <b-col md="6" class="md-d-none">
          <b-img
            :src="img"
            fluid
            class="businessImg scale-in-bottom"
            center
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
  
  <script>
import FormRegister from "@/components/FormRegister";
import BlobBg from "@/components/BlobBg";
import img from "@/assets/img/business-like.png"

export default {
  components: {
    FormRegister,
    BlobBg,
  },
  data(){
    return {
        img: img
    }
  }
};
</script>
  
  <style lang="scss">
#mainContainer {
  width: 100%;
  height: auto;
  position: relative;
}
</style>
  