<template>
  <div class="button1">
    <button path="Info" variant="danger" @click="increaseCount">+++</button>
    <div class="button2">
      <button variant="warning" @click="toPath">{{ path }}</button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Button",
  props: {
    path: String,
  },
  data() {
    return {};
  },
  methods: {
    increaseCount() {
      console.log(this.path);
      this.path === "Home"
        ? this.$store.commit("increaseCount", "Home")
        : this.$store.commit("increaseCount", "Info");
    },
    toPath() {
      this.$router.push({ name: this.path });
    },
  },
};
</script>

<style scoped>
.button2 {
  position: absolute;
  top: 5%;
  left: -110%;
  width: 30%;
  height: 20%;
}
.button1 {
  position: absolute;
  top: 60%;
  left: 61%;
  width: 35%;
  height: 10%;
}
</style>
