<script lang="ts" setup>
import { defineProps } from "vue";

export interface ErrorProps {
	errorMessage: string | null;
}

const props = defineProps<ErrorProps>();

const hasError = !props.errorMessage;
</script>

<template>
	<p
		role="alert"
		:hidden="hasError"
		:aria-hidden="hasError"
	>
		{{ props.errorMessage }}
	</p>
</template>
