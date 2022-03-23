<template>
    <div class="button1">
        <b-button path="Info" variant="danger" @click="increaseCount"
            >+++</b-button
        >
        <div class="button2">
            <b-button variant="warning" @click="toPath"> {{ path }}</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Button",
    props: {
        path: String,
    },
    data() {
        return {};
    },
    methods: {
        increaseCount() {
            this.$store.commit("increaseCount");
            console.log(this.path);
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
