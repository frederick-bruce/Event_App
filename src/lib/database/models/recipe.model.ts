import { Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  ingredients?: string;
  prepTime?: string;
  totalTime?: string;
  allergy?: string;
  createdAt?: Date;
  imageUrl: string;
  url?: string;
  category: { _id: string; name: string };
  author: { _id: string; firstName: string; lastName: string };
}

const RecipeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  ingredients: { type: String },
  prepTime: { type: String },
  totalTime: { type: String },
  allergy: { type: String },
  createdAt: { type: Date, default: Date.now() },
  imageUrl: { type: String, required: true },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  author: { type: Schema.Types.ObjectId, ref: "User" },
});

const Recipe = models.Event || model("Recipe", RecipeSchema, "recipes");

export default Recipe;
