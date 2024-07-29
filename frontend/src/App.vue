<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>

import axios from 'axios'

axios.get("students").then(response => {
  console.log(response.data)
})

</script>
