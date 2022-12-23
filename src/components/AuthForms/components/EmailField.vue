<script lang="ts" setup>
import BaseField, { BaseFieldProps } from "../../BaseField.vue";

interface EmailFieldProps extends
	Omit<BaseFieldProps, "type" | "id" | "name" | "required" | "labelText"> {}

const props = defineProps<EmailFieldProps>();
console.log(props.error);
</script>

<template>
	<BaseField
		v-bind="props"
		type="email"
		id="email"
		name="email"
		required
		labelText="Email"
	/>
</template>
