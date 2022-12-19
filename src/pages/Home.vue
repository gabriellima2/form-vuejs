<script lang="ts" setup>
import SignInForm from "../components/SignInForm.vue";
</script>

<template>
	<main class="container">
		<SignInForm />
	</main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main";
.container {
	@include flex-center(column);

	width: 100vw;
	height: 100vh;
}
</style>
