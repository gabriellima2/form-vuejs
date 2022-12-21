<script lang="ts" setup>
import Field, { FieldProps } from "../../Field.vue";

interface PasswordFieldProps extends
	Omit<FieldProps, "type" | "id" | "name" | "required" | "labelText"> {}

const props = defineProps<PasswordFieldProps>();
</script>

<template>
	<Field
		v-bind="props"
		type="password"
		id="password"
		name="password"
		maxlength="8"
		required
		labelText="Senha"
	/>
</template>
