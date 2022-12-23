<script lang="ts" setup>
import { reactive, ref, watch, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";

import Form from "../BaseForm/Form.vue";
import EmailField from "./components/EmailField.vue";
import PasswordField from "./components/PasswordField.vue";

import type { SignInFields } from "./@types/Fields";
import { defaultRules } from "./rules";

const fieldsIsEmpty = ref(true);
const signInData = reactive<SignInFields>({
	email: "",
	password: ""
});
const vuelidate = useVuelidate(defaultRules, signInData);

function handleSubmit() {
	vuelidate.value.$validate();
	if (vuelidate.value.$error) return;

	console.log(signInData);
}

watch(signInData, (newState) => {
	const isEmpty = !newState.email || !newState.password;

	fieldsIsEmpty.value = isEmpty;
});

const emailErrorMessage = computed(() => {
	if (!vuelidate.value.email.$error) return null;

	return vuelidate.value.email.$errors[0].$message as string;
});

const passwordErrorMessage = computed(() => {
	if (!vuelidate.value.password.$error) return null;

	return vuelidate.value.password.$errors[0].$message as string;
});
</script>

<template>
	<Form
		class="form"
		title="Faça Login"
		:handleSubmit="handleSubmit"
		:buttonDisabled="false"
		:link="{ to: 'criar-conta', text: 'Criar uma conta' }"
	>
		<EmailField
			v-model="signInData.email"
			:error="{ message: emailErrorMessage }"
		/>
		<PasswordField
			v-model="signInData.password"
			:error="{ message: passwordErrorMessage  }"
		/>
	</Form>
</template>
