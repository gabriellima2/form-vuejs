<script lang="ts" setup>
import BaseField, { BaseFieldProps } from "../../BaseField.vue";

interface PasswordFieldProps extends
	Omit<BaseFieldProps, "type" | "id" | "name" | "required" | "labelText"> {}

const props = defineProps<PasswordFieldProps>();
</script>

<template>
	<BaseField
		v-bind="props"
		type="password"
		id="password"
		name="password"
		maxlength="8"
		required
		labelText="Senha"
	/>
</template>
