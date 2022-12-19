<script lang="ts" setup>
import { defineProps, InputHTMLAttributes, defineEmits } from "vue";

import Error, { ErrorProps } from "./Error.vue";

export type ModelValue = string | number;

export interface FieldProps extends Omit<InputHTMLAttributes, "value"> {
	labelText: string;
	modelValue: ModelValue;
	error: ErrorProps;
}

const props = defineProps<FieldProps>();
const emit = defineEmits<{
	(e: "update:modelValue", value: ModelValue): void
}>();

const CLASSNAME_MOVE_LABEL = "label--move";

function getLabel(target: EventTarget | null) {
	return (target as HTMLInputElement).parentElement;
}

function handleFocus({ target }: Event) {
	const label = getLabel(target);

	if (!label) return;

	label.classList.add(CLASSNAME_MOVE_LABEL);
}

function handleBlur({ target }: Event) {
	const label = getLabel(target);
	const inputValue = (target as HTMLInputElement).value;

	if (!label || inputValue) return;

	label.classList.remove(CLASSNAME_MOVE_LABEL);
}

console.log(props.error.message);
</script>

<template>
	<div class="container">
		<label class="label container__label">
			<span>{{ props.labelText }}</span>
			<input
				v-bind="$attrs"
				:value="props.modelValue"
				class="container__input"
				@input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
				@focus="handleFocus"
				@blur="handleBlur"
			/>
		</label>

		<Error :message="props.error.message" class="container__error" />
	</div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main";
.container__label {
	display: flex;
	flex-direction: column;

	position: relative;

	font-size: 0.8rem;
}
.label {
	& > span {
		transition: all 0.1s ease-in-out;

		position: absolute;
		top: 50%;
		left: 10px;
		transform: translateY(-50%);

		font-size: 0.8rem;

		background-color: $util-primary-color;
	}
}
.label--move {
	& > span {
		top: -20%;
		left: 5px;
		transform: translateY(0%);

		padding: 0px 4px;
		font-size: 0.725rem;
	}
}
.container__input {
	font-size: 1rem;
	color: $font-color;

	padding: 10px 8px;
	border-radius: 6px;
	border: 1px solid $accent-color;
	background: none;
}
</style>
