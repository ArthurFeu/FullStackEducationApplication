<template>
<v-dialog max-width="500">
  <template v-slot:activator="{ props: activatorProps }">
    <v-btn
      v-bind="activatorProps"
      color="error"
      text="Excluir"
      variant="flat"
    ></v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Confirmação">
      <v-card-text>
        Você tem certeza que deseja excluir o cadastro do aluno?
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text="Sim, desejo excluir."
          @click="deleteStudent"
        ></v-btn>
        <v-btn color="error"
          text="Cancelar"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toastification';


export default {
  name: 'StudentDelete',
  props: {
    studentId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const dialog = ref(false);
    const toast = useToast();

    const deleteStudent = async () => {
      try {
        await axios.delete(`students/${props.studentId}`);
        dialog.value = false;
        toast.success('Estudante excluído com sucesso!');
        await new Promise(resolve => setTimeout(resolve, 2500));
        window.location.reload();
      } catch (error) {
        console.error('There was an error deleting the student:', error);
        toast.error('Ocorreu um erro ao excluir o estudante.');
      }
    };

    return {
      dialog,
      deleteStudent,
    };
  },
};
</script>
