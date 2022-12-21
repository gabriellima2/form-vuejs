<script lang="ts" setup>
import Field, { FieldProps } from "../../Field.vue";

interface NameFieldProps extends
	Omit<FieldProps, "type" | "id" | "name" | "required" | "labelText"> {}

const props = defineProps<NameFieldProps>();
</script>

<template>
	<Field
		v-bind="props"
		type="text"
		id="name"
		name="name"
		required
		labelText="Nome"
	/>
</template>
