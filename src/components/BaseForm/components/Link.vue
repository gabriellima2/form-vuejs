<script lang="ts" setup>
import { RouterLink, RouterLinkProps } from "vue-router";

export interface LinkProps extends Omit<RouterLinkProps, "class"> {}

const props = defineProps<LinkProps>();
</script>

<template>
	<RouterLink v-bind="props" class="link">
		<slot></slot>
	</RouterLink>
</template>

<style lang="scss" scoped>
@import "../../../assets/scss/main";
.link {
	width: 100%;

	border: 2px solid $accent-color;
	border-radius: 4px;
	padding: 10px 8px;

	text-align: center;
	font-size: 0.9rem;
	font-weight: 500;
	color: $font-color;
	text-decoration: none;

	transition: all 0.2s ease-in-out;

	&:hover {
		color: $contrast-color;
		background-color: $accent-color;
	}
}
</style>
