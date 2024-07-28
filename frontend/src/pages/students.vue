<template>
	<v-app>
	<MenuDrawer />
	<br>
	<v-main>
		<v-container>
			<div class="justify-center w-screen h-screen">
				<div class="d-flex justify-space-between">
					<!-- SEARCH BAR -->
					<div class="d-flex justify-center w-75">
						<v-text-field label="Pesquisar Alunos" variant="outlined"></v-text-field>
					</div>
					<!-- NEW STUDENT BUTTON -->
					<div class="">
						<v-btn color="primary" dark class="h-75" to="createStudent">Cadastrar Aluno</v-btn>
					</div>
				</div>
				<br>
				<!-- RECORDS TABLE -->
				<div class="d-flex justify-center w-auto h-auto border rounded-lg">
					<v-table>
					<tbody style="text-align: center;">
							<tr style="font-weight: bold;">
								<td>Registro Acadêmico</td>
								<td>Nome</td>
								<td>CPF</td>
								<td>Ações</td>
							</tr>
							<tr>
								<td>21.1.8017</td>
								<td>Arthur Mendonça Feu</td>
								<td>123.456.789-10</td>
								<td>
									<v-btn color="primary" text>Editar</v-btn>
									&nbsp; <!-- Add a small space here -->
									<v-btn color="error" text>Excluir</v-btn>
								</td>
							</tr>
					</tbody>
					</v-table>
				</div>
			</div>
		</v-container>
	</v-main>
  
	</v-app>
  </template>
  
<script setup>
  import MenuDrawer from '@/components/MenuDrawer.vue';
</script>
  