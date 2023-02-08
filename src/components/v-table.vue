<template>
  <div class="v-table">
    <div class="v-table__header">
      <p @click="sortByPlace">
        Место
        <i> &#8597 </i>
      </p>
      <p @click="sortByEmail">
        Логин
        <i> &#8597 </i>
      </p>
      <p @click="sortByOrder">
        Подтвержденные заказы
        <i> &#8597 </i>
      </p>
      <p @click="sortByStatus">
        Статус
        <i> &#8597 </i>
      </p>
    </div>

    <div class="v-table__body">
      <v-table-row
        v-for="row in users_data"
        :key="row.palace"
        :row_data="row"
      />
    </div>
  </div>
</template>

<script>
import vTableRow from "./v-table-row.vue";

export default {
  name: "v-table",
  components: {
    vTableRow,
  },
  props: {
    users_data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      sortDirection: "asc",
      sortBy: null,
    };
  },
  methods: {
    sortByPlace() {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      this.sortBy = "place";
      this.users_data.sort((a, b) => {
        if (this.sortDirection === "asc") {
          return a.place - b.place;
        }
        return b.place - a.place;
      });
      this.$router.push({
        path: `/table/${this.sortBy}/${this.sortDirection}/:filter`,
        params: {
          sortBy: this.sortBy,
          sortDirection: this.sortDirection,
        },
      });
    },

    sortByEmail() {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      this.sortBy = "email";
      this.users_data.sort((a, b) => {
        if (this.sortDirection === "asc") {
          return a.email.localeCompare(b.email);
        }
        return b.email.localeCompare(a.email);
      });
    },

    sortByOrder() {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      this.sortBy = "successes";
      this.users_data.sort((a, b) => {
        if (this.sortDirection === "asc") {
          return a.successes - b.successes;
        }
        return b.successes - a.successes;
      });
    },
    sortByStatus() {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      this.sortBy = "status";
      this.users_data.sort((a, b) => {
        if (this.sortDirection === "asc") {
          return a.status.localeCompare(b.status);
        }
        return b.status.localeCompare(a.status);
      });
      this.$router.push({
        path: `/table/${this.sortBy}/${this.sortDirection}/:filter`,
        params: {
          sortBy: this.sortBy,
          sortDirection: this.sortDirection,
        },
      });
    },
  },
};
</script>

<style lang="scss">
.v-table {
  max-width: 900px;
  margin: 0 auto;
}
.v-table__header {
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px #000;

  & p {
    flex-basis: 25%;
    text-align: left;
    align-items: center;
    cursor: pointer;
    & i {
      font-size: 18px;
      margin-left: 5px;
    }
  }
}
</style>
