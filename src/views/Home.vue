/* eslint-disable prettier/prettier */
<template>
  <div class="home">
    <Button path="Info"></Button>
    <Logo></Logo>
    <Number />
    <Tabela />
    <NumberIn />
    <div class="par">
      <p>DESAFIO FRONT</p>
    </div>
  </div>
  
</template>

<script>
import Button from "../components/Button.vue";
import Logo from "../components/Logo.vue";
import Number from "../components/Number.vue"
import NumberIn from "../components/NumberIn.vue"
import Tabela from "../components/tabela.vue"
export default {
  name: "Home",
  components: {
    Button,
    Logo,
    Tabela,
    Number,
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
      this.$router.push({ name: "Info" });
    },
  },
};
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
}
.par{
  color: rgb(243, 0, 0);
  font: 50px;
  top: 20px;
  height: 50px;
  padding: 10px;
}

</style>
