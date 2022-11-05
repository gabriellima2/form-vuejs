<template>
	<button v-bind="$attrs" class="button">
		<slot></slot>
	</button>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/main";

.button {
	width: 100%;

	border-radius: 6px;
	padding: 8px;

	font-size: 1rem;
	font-weight: 600;
	color: $contrast-color;
	text-transform: capitalize;

	background-color: $accent-color;
}
</style>
