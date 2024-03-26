<template>
  <section class="section">
    <div class="container">
      <div class="row align-items-center" data-aos="zoom-in" data-aos-once="false">
        <div class="col-md-4 me-auto text-center">
          <h2 class="mb-4">Easy-to-use API</h2>
          <p class="mb-4">
            We agitate over the complex abstractions so your teams don’t need to
            stitch together disparate systems or spend months figuring out how
            to get things working.
          </p>
          <p>
            <router-link to="#" class="btn btn-primary"
              >Documentation</router-link
            >
          </p>
        </div>
        <div class="col-md-6">
          <code-highlight language="javascript">
            <pre>
              import type { GoogleParameters } from "serpapi";
              import { getJson } from "serpapi";

              const params = {
                q: "Coffee",
                location: "Austin, Texas, United States",
                hl: "en",
                gl: "us",
                google_domain: "google.com",
                api_key: "secret_api_key"
              } satisfies GoogleParameters;

              // Show result as JSON
              const response = await getJson("google", params);
              console.log(response);
            </pre>
          </code-highlight>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

export default {
  components: {
    CodeHighlight,
  },
};
</script>