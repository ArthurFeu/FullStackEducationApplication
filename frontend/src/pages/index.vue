<template>
  <v-app>
    <MenuDrawer />

    <v-main>
      <v-container>
        <div class="d-flex justify-center w-screen h-screen border rounded-lg">
          <div class="d-flex ma-10 flex-column">
            <br>
            <h1>Olá, seja bem-vindo ao Módulo Acadêmico!</h1>
            <br>
            <h3>Por aqui você pode acessar o menu à esquerda para encontrar:</h3>
            <br>
            <ol>
              <li><h4>Alunos</h4></li>
            </ol>
            <br>
            <hr>
            <br>
            <h3>Considerações Pessoais</h3>
            <br>
            <p style="max-width: 800px;">Muito obrigado por me considerar para a posição de Desenvolvedor Full-Stack! Agradeço também pelo seu tempo em me avaliar. Fiz o meu melhor com o tempo disponível e espero que meu teste consiga demonstrar uma parte das minhas habilidades de desenvolvimento. Eu gostei muito de fazer esse desafio e estou ansioso para ouvir o seu feedback!</p>
          </div>
        </div>
      </v-container>
    </v-main>

  </v-app>
</template>

<script setup>
import MenuDrawer from '@/components/MenuDrawer.vue';

</script>
