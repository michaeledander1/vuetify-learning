<template>
  <div class='home'>
    <h1>This is home</h1>
    <p class="red">LOTS OF STUFFs</p>
    <p class="pink lighten-4 blue--text">something else</p>
    <h2 class="display-2">Some big text</h2>
    <p class="headline">This is a headline</p>
    <p class="subheading">This is a subheading</p>
    <v-btn class="pink white--text ">Click!</v-btn>
    <v-btn depressed color="pink">Another click</v-btn>
    <v-btn flat color="pink">A 3rd</v-btn>

    <v-btn depressed class="pink white--text"><v-icon left>music_note</v-icon><span>Music</span></v-btn>
    <v-btn fab depressed class="pink white--text"><v-icon left>music_note</v-icon><span>Music</span></v-btn>
  </div>
</template>

<script>
  import Header from '../components/Header'
  export default {
    components: {
    }
  }
</script>
