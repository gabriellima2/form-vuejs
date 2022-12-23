import { required, minLength, email, maxLength, helpers } from "@vuelidate/validators";
import type { SignInFields, SignUpFields } from "../@types/Fields";

// eslint-disable-next-line @typescript-eslint/ban-types
export const defaultRules: Record<keyof SignInFields, {}> = {
	email: {
		required: helpers.withMessage("Campo email é obrigatório", required),
		email: helpers.withMessage("Digite um email inválido", email)
	},
	password: {
		required: helpers.withMessage("Campo senha é obrigatório", required),
		minLength: helpers.withMessage("Senha com minímo de 8 caracteres", minLength(8)),
		maxLength: helpers.withMessage("Senha com máximo de 16 caracteres", maxLength(16))
	}
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const signUpRules: Record<keyof SignUpFields, {}> = {
	...defaultRules,
	name: {
		required: helpers.withMessage("Campo nome é obrigatório", required)
	},
};
