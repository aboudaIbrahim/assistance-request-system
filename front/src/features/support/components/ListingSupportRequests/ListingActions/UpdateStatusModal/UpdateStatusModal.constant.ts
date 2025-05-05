export const COMMENT_INPUT_CONFIG = {
  fieldName: "comment",
  label: "Commentaire",
  rules: {
    required: false,
    maxLength: {
      value: 200,
      message: "Le commentaire ne doit pas dépasser 200 caractères",
    },
    minLength: {
      value: 10,
      message: "Le commentaire doit contenir au moins 10 caractères",
    },
  },
};
