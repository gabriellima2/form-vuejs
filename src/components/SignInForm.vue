<script lang="ts" setup>
import { reactive, ref, watch } from "vue";

import SubmitButton from "./Buttons/SubmitButton.vue";
import TextInput from "./Inputs/TextInput.vue";

import type { ModelValue } from "./Inputs/TextInput.vue";

interface SignInFields {
	email: ModelValue;
	password: ModelValue;
}

const fieldsIsEmpty = ref(true);
const signInData = reactive<SignInFields>({
	email: "",
	password: ""
});

function handleClick() {
	console.log(signInData.email);
}

watch(signInData, (newState) => {
	const isEmpty = !newState.email || !newState.password;

	fieldsIsEmpty.value = isEmpty;
});
</script>

<template>
	<form class="form">
		<label class="form__title">Faça login</label>
		<fieldset class="form__fields">
			<TextInput
				type="email"
				id="email"
				name="email"
				required
				labelText="Email"
				v-model="signInData.email"
				:errorMessage="null"
			/>

			<TextInput
				type="password"
				id="password"
				name="password"
				maxlength="8"
				required
				labelText="Senha"
				v-model="signInData.password"
				:errorMessage="null"
			/>

			<SubmitButton @click="handleClick" :disabled="fieldsIsEmpty">
				Entrar
			</SubmitButton>
		</fieldset>
	</form>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main";
.form {
	@include flex-center(column);

	width: fit-content;

	gap: 12px;
	padding: 12px;
	border-radius: 4px;

	background-color: $util-primary-color;
}

.form__title {
	font-weight: bold;
	text-transform: capitalize;
	font-size: 2rem;
}

.form__fields {
	@include flex-center(column);

	gap: 20px;

	border: none;
}
</style>
