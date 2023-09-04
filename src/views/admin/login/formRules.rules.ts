export const emailRules = [
  (value: any) => {
    if (value) return true

    return 'E-mail é obrigatório.'
  },
  (value: any) => {
    if (/.+@.+\..+/.test(value)) return true

    return 'E-mail deve ser válido.'
  },
];

export const passwordRules = [
  (value: any) => {
    if (value) return true

    return 'Senha é obrigatória.'
  },
  (value: any) => {
    if (value.length >= 8) return true

    return 'Senha deve ser válida.'
  },
];
