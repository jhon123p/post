/* eslint-disable prettier/prettier */
<template>
  <div class="info">
    <Button path="Home"></Button>
    <Logo></Logo>
    <Number />
    <NumberIn />
    <Tabela />
    <div class="par">
      <p>DESAFIO FRONT</p>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import Logo from "../components/Logo.vue";
import Number from "../components/Number.vue";
import Tabela from "../components/tabela.vue";
import NumberIn from "../components/NumberIn.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Info",
  components: {
    Button,
    Logo,
    Number,
    Tabela,
    NumberIn,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increaseCount() {
      this.count++;
    },
    toPath() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.info {
  width: 100vw;
  height: 100vh;
}
.tabela {
  background: rgb(3, 147, 243);
}

.par {
  color: rgb(253, 0, 0);
  font: 50px;
  top: 20px;
  height: 50px;
  padding: 10px;
}
</style>
