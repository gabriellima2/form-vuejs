<script setup lang="ts">
import Home from "./pages/Home.vue";
</script>

<template>
	<Home />
</template>

<style lang="scss">
@import "./assets/scss/main";
* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

body {
	color: $font-color;
	font-family: $font;
	background-color: $background-color;
}

li {
	list-style: none;
}
</style>
