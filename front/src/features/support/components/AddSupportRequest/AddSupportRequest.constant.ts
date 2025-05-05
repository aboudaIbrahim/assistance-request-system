export const CATEGORIES = ["Technique", "Facturation", "Compte"];
export const URGENCIES = ["Normal", "Urgent", "Critique"];

export const ADD_SUPPORT_REQUEST_INPUTS_CONFIG = {
  title: {
    fieldName: "title",
    label: "Titre",
    rules: {
      required: "Le titre est requis",
      maxLength: {
        value: 50,
        message: "Le titre ne doit pas dépasser 100 caractères",
      },
      minLength: {
        value: 10,
        message: "Le titre doit contenir au moins 10 caractères",
      },
    },
  },
  description: {
    fieldName: "description",
    label: "Description",
    rules: {
      required: "La description est requise",
      maxLength: {
        value: 255,
        message: "La description ne doit pas dépasser 1000 caractères",
      },
      minLength: {
        value: 10,
        message: "La description doit contenir au moins 10 caractères",
      },
    },
  },
  category: {
    fieldName: "category",
    label: "Catégorie",
    rules: { required: "La catégorie est requise" },
  },
  urgency: {
    fieldName: "urgency",
    label: "Urgence",
    rules: { required: "L'urgence est requise" },
  },
};
