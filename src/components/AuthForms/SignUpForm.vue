<script lang="ts" setup>
import { reactive } from "vue";

import Form from "../BaseForm/Form.vue";
import NameField from "./components/NameField.vue";
import EmailField from "./components/EmailField.vue";
import PasswordField from "./components/PasswordField.vue";

interface SignUpFields {
	name: string
	email: string;
	password: string;
}

const signUpData = reactive<SignUpFields>({
	name: "",
	email: "",
	password: ""
});

function handleSubmit() {
	console.log(signUpData);
}
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
			:error="{ message: '' }"
		/>
		<EmailField
			v-model="signUpData.email"
			:error="{ message: '' }"
		/>
		<PasswordField
			v-model="signUpData.password"
			:error="{ message: '' }"
		/>
	</Form>
</template>
