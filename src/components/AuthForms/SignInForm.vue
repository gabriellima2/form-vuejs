<script lang="ts" setup>
import { reactive, ref, watch } from "vue";

import Form from "../BaseForm/Form.vue";
import EmailField from "./components/EmailField.vue";
import PasswordField from "./components/PasswordField.vue";

interface SignInFields {
	email: string;
	password: string;
}

const fieldsIsEmpty = ref(true);
const signInData = reactive<SignInFields>({
	email: "",
	password: ""
});

function handleSubmit() {
	console.log(signInData.email);
}

watch(signInData, (newState) => {
	const isEmpty = !newState.email || !newState.password;

	fieldsIsEmpty.value = isEmpty;
});
</script>

<template>
	<Form
		class="form"
		title="Faça Login"
		:handleSubmit="handleSubmit"
		:buttonDisabled="false"
	>
		<EmailField
			v-model="signInData.email"
			:error="{ message: '' }"
		/>
		<PasswordField
			v-model="signInData.password"
			:error="{ message: '' }"
		/>
	</Form>
</template>
