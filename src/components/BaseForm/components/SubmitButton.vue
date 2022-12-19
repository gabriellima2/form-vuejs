<script lang="ts" setup>
import BaseButton from "../../Buttons/BaseButton.vue";
</script>

<template>
	<BaseButton type="submit" @click.prevent="">
		<slot></slot>
	</BaseButton>
</template>
