<template>
	<v-app-bar color="primary" elevation="0">
		<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
		<v-toolbar-title>Grupo A</v-toolbar-title>
	</v-app-bar>
  
	<v-navigation-drawer v-model="drawer" color="primary" class="align-center">
		<v-list-item link title="Home" to="/"></v-list-item>
		<v-list-item link title="Alunos" to="/students"></v-list-item>
		<v-list-item link title="Cursos"></v-list-item>
		<v-list-item link title="Escolas"></v-list-item>
	</v-navigation-drawer>
</template>


<script>
import { ref } from 'vue';

export default {
	name: 'MenuDrawer',
	props: {},
	setup() {
		const drawer = ref(false);
		return {
			drawer
		};
	}
}
</script>