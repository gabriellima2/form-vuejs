<script lang="ts" setup>
import { defineProps } from "vue";

import SubmitButton from "./components/SubmitButton.vue";

interface BaseFormProps {
	title: string;
	handleSubmit: () => void;
	buttonDisabled?: boolean
}

const props = defineProps<BaseFormProps>();
</script>

<template>
	<form class="form">
		<label class="form__title">Faça login</label>
		<div class="content">
			<fieldset class="content__fields">
				<slot></slot>
			</fieldset>
			<SubmitButton @click="props.handleSubmit" :disabled="props.buttonDisabled">
					Entrar
			</SubmitButton>
		</div>
	</form>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/main";
.form {
	@include flex-center(column);

	width: fit-content;

	gap: 24px;
	padding: 12px;
	border-radius: 4px;

	background-color: $util-primary-color;
}

.content {
	@include flex-center(column);
	gap: 24px;
}

.form__title {
	font-weight: bold;
	text-transform: capitalize;
	font-size: 2rem;
}

.content__fields {
	@include flex-center(column);

	gap: 20px;

	border: none;
}
</style>
