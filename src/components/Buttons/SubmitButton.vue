<script lang="ts" setup>
import BaseButton from "./BaseButton.vue";
</script>

<template>
	<BaseButton type="submit" @click.prevent="">
		<slot></slot>
	</BaseButton>
</template>
