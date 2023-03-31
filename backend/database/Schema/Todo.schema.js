import { model, Schema } from "mongoose";

const TodoSchema = new Schema({
  id: Number,
  title: String,
  description: String,
  completed: Boolean,
});

const Todos = model("todos", TodoSchema);

export default Todos;
