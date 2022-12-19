<script lang="ts" setup>
import { defineProps } from "vue";

export interface ErrorProps {
	errorMessage?: string | null;
}

const props = defineProps<ErrorProps>();
const hasNoError = !props.errorMessage;
</script>

<template>
	<p
		role="alert"
		:hidden="hasNoError"
		:aria-hidden="hasNoError"
	>
		{{ props.errorMessage }}
	</p>
</template>
