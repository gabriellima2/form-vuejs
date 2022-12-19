<script lang="ts" setup>
import { defineProps } from "vue";

export interface ErrorProps {
	message?: string | null;
}

const props = defineProps<ErrorProps>();
const hasNoError = !props.message;
</script>

<template>
	<span
		role="alert"
		:hidden="hasNoError"
		:aria-hidden="hasNoError"
	>
		{{ props.message }}
	</span>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main";
span {
	color: $error-color;
	font-weight: 500;
	font-size: 0.8rem;

	@media screen and (min-width: $base-device) {
		font-size: 0.9rem;
	}
}
</style>
