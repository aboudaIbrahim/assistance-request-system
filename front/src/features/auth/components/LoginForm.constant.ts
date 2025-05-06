const EmailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const LOGIN_FORM_INPUTS_CONFIG = {
  email: {
    fieldName: "email",
    label: "Email",
    rules: {
      required: "L'email est requis",
      pattern: {
        value: EmailRegex,
        message: "L'email n'est pas valide",
      },
    },
  },
  password: {
    fieldName: "password",
    label: "Mot de passe",
    rules: {
      required: "Le mot de passe est requis",
      minLength: {
        value: 8,
        message: "Le mot de passe doit contenir au moins 8 caractères",
      },
    },
  },
};
