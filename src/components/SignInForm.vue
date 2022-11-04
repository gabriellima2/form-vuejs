<script lang="ts" setup>
import { reactive } from "vue";

import SubmitButton from "./Buttons/SubmitButton.vue";
import TextInput from "./Inputs/TextInput.vue";

import type { ModelValue } from "./Inputs/TextInput.vue";

interface SignInFields {
	email: ModelValue;
	password: ModelValue;
}

const signInData = reactive<SignInFields>({
	email: "",
	password: ""
});

function handleClick() {
	console.log(signInData.email);
}
</script>

<template>
	<form>
		<label>Faça login</label>
		<fieldset>
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

			<SubmitButton @click="handleClick">
				Entrar
			</SubmitButton>
		</fieldset>
	</form>
</template>
