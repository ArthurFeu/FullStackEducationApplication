<template>
  <div class="justify-center w-screen h-screen">
    <div class="d-flex justify-center w-auto h-auto border rounded-lg">
      <v-table>
        <tbody style="text-align: center;">
          <tr style="font-weight: bold;">
            <td>Registro Acadêmico</td>
            <td>Nome</td>
            <td>CPF</td>
            <td>Ações</td>
          </tr>
          <tr v-for="student in students" :key="student.id">
            <td>{{ student.ra }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.cpf }}</td>
            <td>
              <v-btn color="primary" text @click="editStudent(student.id)">Editar</v-btn>
              &nbsp;
              <StudentDelete :studentId="student.id" />
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import StudentDelete from '@/components/StudentDelete.vue';
import { useRouter } from 'vue-router';
import { getAllStudents } from '@/service/studentService';

const students = ref([]);
const router = useRouter();

const fetchStudents = async () => {
  try {
    students.value = getAllStudents();
  } catch (error) {
    console.error('There was an error fetching the students:', error);
  }
};

const editStudent = (studentId) => {
  router.push({ name: 'EditStudent', params: { studentId } });
};

onMounted(() => {
  fetchStudents();
});
</script>
