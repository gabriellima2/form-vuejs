<script lang="ts" setup>
import { defineProps } from "vue";

export interface ErrorProps {
	message?: string | null;
}

const props = defineProps<ErrorProps>();
</script>

<template>
	<span
		v-if="props.message"
		role="alert"
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
