<template>
  <v-toolbar flat app>
    <v-toolbar-title class="headline text-uppercase">
      <span>Unesco</span>
      <span class="font-weight-light">Bagger</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <v-btn
        slot="activator"
        flat
      >
        Regions
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(region, index) in regions"
          :key="index"
          router :to ="region.route"
        >
          <v-list-tile-title>{{ region.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-menu offset-y>
      <v-btn
        slot="activator"
        flat
      >
        Sites
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(site, index) in sites"
          :key="index"
          router :to ="site.route"
        >
          <v-list-tile-title>{{ site.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-btn flat>
      <span class="mr-2">Map</span>
      <v-icon>map</v-icon>
    </v-btn>
    <v-btn flat router to="/about">
      <span class="mr-2">About</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      sites: [
        {title: 'Cultural Sites', route: '/cultural'},
        {title: 'Natural Sites', route: '/natural'},
        {title: 'Mixed Sites', route : '/mixed'}
      ],
      regions: [
        {title: 'Africa', route: '/africa'},
        {title: 'Asia', route: '/asia'},
        {title: 'Australia\/Oceania', route: '/australia-oceania'},
        {title: 'Europe', route: '/Europe'},
        {title: 'North America', route: '/north-america'},
        {title: 'South America', route: 'south-america'}
      ]
    }
  }
}
</script>
