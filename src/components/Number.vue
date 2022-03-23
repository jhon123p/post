<template>
    <div class="viewNumber">{{ countHome }}</div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: "Number",
    data() {
        return {};
    },
    computed: {
        ...mapState(["countHome"]),
    },
};
</script>

<style scoped>
.viewNumber {
    position: absolute;
    left: 77%;
    top: 48%;
    font-weight: 600;
    color: white;
    font-size: 16px;
    background-color: green;
    padding: 13px;
}
</style>
