<script lang="ts" setup>
import { defineProps } from "vue";

export interface ErrorProps {
	message?: string | null;
}

const props = defineProps<ErrorProps>();
const hasNoError = !props.message;
</script>

<template>
	<p
		role="alert"
		:hidden="hasNoError"
		:aria-hidden="hasNoError"
	>
		{{ props.message }}
	</p>
</template>
