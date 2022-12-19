<template>
	<button v-bind="$attrs" class="button">
		<slot></slot>
	</button>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/main";
.button {
	width: 100%;

	border-radius: 4px;
	padding: 10px 8px;

	font-size: 0.9rem;
	font-weight: 600;
	color: $contrast-color;
	text-transform: capitalize;

	background-color: $accent-color;

	@media screen and (min-width: $base-device) {
		border-radius: 6px;
	}
}
</style>
