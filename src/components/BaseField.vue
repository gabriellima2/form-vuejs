<script lang="ts" setup>
import { defineProps, InputHTMLAttributes, defineEmits } from "vue";

import Error, { ErrorProps } from "./Error.vue";

export type ModelValue = string | number;

export interface BaseFieldProps extends Omit<InputHTMLAttributes, "value"> {
	labelText: string;
	modelValue: ModelValue;
	error: ErrorProps;
}

const props = defineProps<BaseFieldProps>();
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

		<Error :message="props.error.message" />
	</div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main";
.container {
	width: 100%;
}
.container__label {
	width: 100%;

	display: flex;
	flex-direction: column;

	position: relative;
}
.label {
	& > span {
		transition: all 0.1s ease-in-out;

		position: absolute;
		top: 50%;
		left: 8px;
		transform: translateY(-50%);

		color: #00000085;
		font-size: 0.8rem;
		font-weight: 500;

		background-color: $util-primary-color;

		@media screen and (min-width: $base-device) {
			font-size: 0.9rem;
			left: 10px;
		}
	}
}
.label--move {
	& > span {
		top: -20%;
		left: 5px;
		transform: translateY(0%);

		padding: 0px 4px;
		font-size: 0.7rem;

		@media screen and (min-width: $base-device) {
			font-size: 0.725rem;
		}
	}
}
.container__input {
	width: 100%;

	font-size: 0.9rem;
	color: $font-color;

	padding: 8px 6px;
	border-radius: 4px;
	border: 2px solid #00000015;
	background: none;

	@media screen and (min-width: $base-device) {
		font-size: 1rem;

		border-radius: 6px;
		padding: 10px 8px;
	}
}
</style>
