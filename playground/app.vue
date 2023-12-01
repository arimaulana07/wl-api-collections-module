<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup>
// const { data } = await useFetch('/api/token', {
//   method: 'POST'
// });
const { data: departure, error } = await useFetch('/api/reservation/departure', {
  method: 'GET'
});

const { data: destination, error: errorDestination } = await useFetch('/api/reservation/destination', {
  method: 'GET',
  params: {
    outletasal: 10
  }
});

// console.log('api/request-token', data.value);
console.log('api/reservasi/departure', JSON.parse(departure.value), error.value);
console.log('api/reservasi/destination', JSON.parse(destination.value), errorDestination.value);
</script>
