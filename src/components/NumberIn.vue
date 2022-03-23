<template>
  <div class="viewNumber">
    {{ countInfo }}
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "NumberIn",
  data() {
    return {};
  },
  computed: {
    ...mapState(["countInfo"]),
  },
};
</script>

<style scoped>
.viewNumber {
  position: absolute;
  left: 26%;
  top: 48%;
  font-weight: 600;
  color: white;
  font-size: 20px;
  background-color: green;
  padding: 10px;
}
</style>
