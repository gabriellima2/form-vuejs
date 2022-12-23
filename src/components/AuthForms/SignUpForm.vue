<script lang="ts" setup>
import { reactive, computed } from "vue";

import Form from "../BaseForm/Form.vue";
import NameField from "./components/NameField.vue";
import EmailField from "./components/EmailField.vue";
import PasswordField from "./components/PasswordField.vue";

import type { SignUpFields } from "./@types/Fields";
import useVuelidate from "@vuelidate/core";
import { signUpRules } from "./rules";

const signUpData = reactive<SignUpFields>({
	name: "",
	email: "",
	password: ""
});
const vuelidate = useVuelidate(signUpRules, signUpData);

function handleSubmit() {
	vuelidate.value.$validate();
	if (vuelidate.value.$error) return;

	console.log(signUpData);
}

const nameErrorMessage = computed(() => {
	if (!vuelidate.value.name.$error) return null;

	return vuelidate.value.name.$errors[0].$message as string;
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
		title="Criar Conta"
		:handleSubmit="handleSubmit"
		:buttonDisabled="false"
		:link="{ to: '/', text: 'Já tenho uma conta' }"
		>
		<NameField
			v-model="signUpData.name"
			:error="{ message: nameErrorMessage }"
		/>
		<EmailField
			v-model="signUpData.email"
			:error="{ message: emailErrorMessage }"
		/>
		<PasswordField
			v-model="signUpData.password"
			:error="{ message: passwordErrorMessage }"
		/>
	</Form>
</template>
