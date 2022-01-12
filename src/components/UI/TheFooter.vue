<template>
  <div>
    <v-footer dark padless app inset>
      <v-card class="flex" flat tile color="red" :elevation="10">
        <v-card-text class="py-2 white--text text-center" style="font-family: Lato">
          {{ new Date().getFullYear() }} — <strong>MyCinema</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
</style>
