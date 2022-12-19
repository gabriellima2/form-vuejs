<script lang="ts" setup>
import { reactive, ref, watch } from "vue";

import Form from "../BaseForm/Form.vue";
import Field from "../Field.vue";

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
		<Field
			type="email"
			id="email"
			name="email"
			required
			labelText="Email"
			v-model="signInData.email"
			:error="{ message: 'Ocorreu um erro!' }"
		/>

		<Field
			type="password"
			id="password"
			name="password"
			maxlength="8"
			required
			labelText="Senha"
			v-model="signInData.password"
			:error="{ message: 'Ocorreu um erro!' }"
		/>
	</Form>
</template>
