import { createRouter, createWebHashHistory } from "vue-router";
import vTable from "../components/v-table.vue";

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/table/:sortBy/:sortDirection/:filter",
      component: vTable,
      props: true,
    },
  ],
});

export default router;
