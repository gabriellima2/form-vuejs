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

input:-webkit-autofill,
input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
}
input[data-autocompleted] {
    background-color: transparent !important;
}

input, button {
	font-family: $font;
}

li {
	list-style: none;
}

button {
	border: none;
	cursor: pointer;
	transition: opacity 0.2s ease-in-out;

	&:hover {
		opacity: 0.8;
	}

	&:disabled {
		pointer-events: none;
		opacity: 0.4;
	}
}
</style>
