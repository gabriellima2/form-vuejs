import { createRouter, createWebHistory } from "vue-router";

import { routes } from ".";

export const router = createRouter({
	history: createWebHistory(),
	routes
});
