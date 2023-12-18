import { z } from "zod";

export const recipeFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters")
    .max(400, "Description must be less than 400 characters"),
  imageUrl: z.string().url("Image URL must be a valid URL"),
  prepTime: z.string(),
  totalTime: z.string(),
  categoryId: z.string(),
  allergy: z.string(),
  url: z.string().url(),
});
