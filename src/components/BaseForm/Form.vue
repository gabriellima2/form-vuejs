<script lang="ts" setup>
import { defineProps, FormHTMLAttributes } from "vue";

import SubmitButton from "./components/SubmitButton.vue";

interface BaseFormProps extends FormHTMLAttributes {
	title: string;
	handleSubmit: () => void;
	buttonDisabled?: boolean
}

const props = defineProps<BaseFormProps>();
</script>

<template>
	<form class="form" v-bind="$attrs">
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

	width: 100%;

	gap: 24px;
	padding: 12px;
	border-radius: 6px;

	background-color: $util-primary-color;

	@media screen and (min-width: $base-device) {
		max-width: 360px;

		border-radius: 8px;
		padding: 16px;
	}
}
.content {
	@include flex-center(column);

	width: 100%;
	gap: 24px;
}
.form__title {
	font-weight: 600;
	text-transform: capitalize;
	font-size: 1.250rem;

	@media screen and (min-width: $base-device) {
		font-size: 1.4rem;
	}
}
.content__fields {
	@include flex-center(column);

	width: 100%;
	gap: 12px;
	border: none;

	@media screen and (min-width: $base-device) {
		gap: 20px;
	}
}
</style>
