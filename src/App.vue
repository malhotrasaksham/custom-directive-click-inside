<template>
  <div id="app">
    <div class="content" v-color="color">Sample div in RED</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      color: "#0072bcaa"
    };
  },
  methods: {
    ToggleColor() {
      this.color = this.color ? undefined : "#0072bcaa";
      alert(this.color);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style scoped>
.content {
  padding: 20px;
}
</style>
