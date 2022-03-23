<template>
  <div class="tabela">
    <b-table :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: "MainTable",
  data() {
    return {
      items: [{ HOME: 60, INFO: 45 }],
    };
  },
};
</script>

<style scoped>
.tabela {
  color: rgb(183, 245, 13);
  background: rgb(10, 188, 233);
}
</style>
