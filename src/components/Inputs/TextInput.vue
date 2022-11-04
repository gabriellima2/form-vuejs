<script lang="ts" setup>
import { defineProps, InputHTMLAttributes } from "vue";

import Error from "../Error.vue";
import type { ErrorProps } from "../Error.vue";

export type ModelValue = string | number

interface Props extends ErrorProps, InputHTMLAttributes {
	labelText: string;
	modelValue: ModelValue
}

const props = defineProps<Props>();
const emit = defineEmits<{
	(e: "update:modelValue", value: ModelValue): void
}>();
</script>

<template>
	<div>
		<label>
			{{ props.labelText }}
			<input
				v-bind="$attrs"
				:value="props.modelValue"
				@input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
			/>
		</label>

		<Error :errorMessage="props.errorMessage" />
	</div>
</template>
