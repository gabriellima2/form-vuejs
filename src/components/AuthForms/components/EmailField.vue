<script lang="ts" setup>
import Field, { FieldProps } from "../../Field.vue";

interface EmailFieldProps extends
	Omit<FieldProps, "type" | "id" | "name" | "required" | "labelText"> {}

const props = defineProps<EmailFieldProps>();
</script>

<template>
	<Field
		v-bind="props"
		type="email"
		id="email"
		name="email"
		required
		labelText="Email"
	/>
</template>
