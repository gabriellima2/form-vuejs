import type { RouteRecordRaw } from "vue-router";

const Home = () => import("../pages/Home.vue");
const CreateAccount = () => import("../pages/CreateAccount.vue");

export const routes: RouteRecordRaw[] = [
	{ path: "/", name: "home", component: Home },
	{ path: "/criar-conta", name: "create-account", component: CreateAccount }
];
