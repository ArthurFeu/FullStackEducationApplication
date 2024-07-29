export const isValidEmail = (email) => {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const emailLength = email.length >= 5 && email.length <= 255;

	const validation = emailPattern.test(email) && emailLength;
	const errorMessage = 'Informe um email válido entre 5 e 255 caracteres';
	return validation || errorMessage;
};

export const isValidName = (name) => {
	const namePattern = /^[a-zA-Z\s]*$/;
	const nameLength = name.length >= 5 && name.length <= 255;

	const validation = namePattern.test(name) && nameLength;
	const errorMessage = 'Informe um nome válido entre 5 e 255 caracteres';
	return validation || errorMessage;
}

export const isValidRA = (ra) => {
	return !!ra || 'Informe um RA válido';
}

export const isValidCPF = (cpf) => {
	return !!cpf || 'Informe um CPF válido';
}