<template>
	<v-card-title>Cadastro de Aluno</v-card-title>
	<v-form v-model="valid">
	<v-container>
      <v-row>
        <!-- NAME -->
        <v-col cols="12">
          <v-card>
            <v-row>
				<v-col class="d-flex align-center">
                <v-card-title class="text-center">Nome</v-card-title>
              </v-col>
              <v-col cols="8">
                <v-card-text>
                  <v-text-field
                    variant="outlined"
                    v-model="fullname"
                    :rules="nameRules"
                    label="Informe o nome completo do aluno"
                    hide-details
                    required
                  ></v-text-field>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <!-- EMAIL -->
        <v-col cols="12">
          <v-card>
            <v-row>
              <v-col class="d-flex align-center">
                <v-card-title>Email</v-card-title>
              </v-col>
              <v-col cols="8">
                <v-card-text>
                  <v-text-field
                    variant="outlined"
                    v-model="email"
                    :rules="emailRules"
                    label="Informe um email válido"
                    hide-details
                    required
                  ></v-text-field>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <!-- RA -->
        <v-col cols="12">
          <v-card>
            <v-row>
              <v-col class="d-flex align-center">
                <v-card-title>RA</v-card-title>
              </v-col>
              <v-col cols="8">
                <v-card-text>
                  <v-text-field
                    variant="outlined"
                    v-model="ra"
                    :rules="raRules"
                    label="Informe o Registro Acadêmico"
                    hide-details
                    required
                  ></v-text-field>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <!-- CPF -->
        <v-col cols="12">
          <v-card>
            <v-row>
              <v-col class="d-flex align-center">
                <v-card-title>CPF</v-card-title>
              </v-col>
              <v-col cols="8">
                <v-card-text>
                  <v-text-field
                    variant="outlined"
                    v-model="cpf"
                    :rules="cpfRules"
                    label="Informe o número do documento"
                    hide-details
                    required
                  ></v-text-field>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <div class="d-flex justify-center">
    <v-btn color="primary" @click="submit">Cadastrar</v-btn>
  </div>
</template>

<script>
export default {
name: 'StudentForm',

data: () => ({
	valid: false,
	fullname: '',
	email: '',
	ra: '',
	cpf: '',

	// TODO: Add validation rules

	nameRules: [
		value => !!value,
	],
	emailRules: [
		value => !!value,
	],
	raRules: [
		value => !!value,
	],
	cpfRules: [
		value => !!value,
	],

	}),
}
</script>