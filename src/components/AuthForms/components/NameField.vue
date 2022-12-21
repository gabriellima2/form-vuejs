<script lang="ts" setup>
import BaseField, { BaseFieldProps } from "../../BaseField.vue";

interface NameFieldProps extends
	Omit<BaseFieldProps, "type" | "id" | "name" | "required" | "labelText"> {}

const props = defineProps<NameFieldProps>();
</script>

<template>
	<BaseField
		v-bind="props"
		type="text"
		id="name"
		name="name"
		required
		labelText="Nome"
	/>
</template>
