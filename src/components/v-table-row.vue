<template>
  <div class="v-table-row">
    <div class="row row__place">{{ row_data.place }}</div>
    <div class="row row__login">{{ row_data.email }}</div>
    <div class="row row__success">{{ row_data.successes }}</div>
    <div class="row row__status">{{ row_data.status }}</div>
  </div>
</template>

<script>
export default {
  name: "v-table",
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss">
.v-table-row {
  display: flex;
  justify-content: space-around;
}
.row {
    margin: 10px 0 10px 0;
  flex-basis: 25%;
  text-align: left;
}
</style>
