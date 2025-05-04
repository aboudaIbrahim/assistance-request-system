export const CATEGORIES = ["Technique", "Facturation", "Compte"];
export const URGENCIES = ["Normal", "Urgent", "Critique"];

export const ADD_SUPPORT_REQUEST_INPUTS_CONFIG = {
  title: {
    fieldName: "title",
    label: "Titre",
    rules: { required: "Le titre est requis" },
  },
  description: {
    fieldName: "description",
    label: "Description",
    rules: { required: "La description est requise" },
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
