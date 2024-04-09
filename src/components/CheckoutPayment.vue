<template>
  <div>
    <div v-if="!paid" id="paypal-button-container"></div>
    <div v-else id="confirmation">Order complete!</div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';

export default {
  name: 'PayPalIntegration',
  props: {
    cartTotal: {
      type: Number,
      default: 0.01,
    },
  },
  setup(props) {
    const paid = ref(false);
    const CLIENT_ID = 'ATIdY94uYrYHuKzDOyEHgiB_WFzVsWdm4NXxqf6UQam63rpMGc5L8CidxGyUti4mQQjNlc9CWud2dvht';

    onBeforeMount(() => {
      loadPaypalScript(CLIENT_ID);
    });

    const loadPaypalScript = (clientId) => {
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=EUR&locale=fr_FR`;
      script.async = true;
      script.onload = () => {
        window.paypal
          .Buttons({
            createOrder: createOrder,
            onApprove: onApprove,
          })
          .render('#paypal-button-container');
      };
      document.body.appendChild(script);
    };

    const createOrder = (data, actions) => {
      console.log('Creating order...');
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: props.cartTotal,
            },
          },
        ],
      });
    };

    const onApprove = (data, actions) => {
      console.log('Order approved...');
      return actions.order.capture().then(() => {
        paid.value = true;
        console.log('Order complete!');
      });
    };

    return { paid };
  },
};
</script>

<style>
#paypal-button-container {
  width: 100%;
  margin: 30px 0;
}

#confirmation {
  color: green;
  margin-top: 1em;
  font-size: 2em;
}
</style>
