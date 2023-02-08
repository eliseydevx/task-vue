<template>
  <div class="app">
    <v-table :users_data="USERS" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import vTable from "./components/v-table.vue";

export default {
  name: "app",
  components: {
    vTable,
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters(["USERS"]),
  },
  methods: {
    ...mapActions(["GET_USERS"]),
  },
  mounted() {
    this.GET_USERS();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
