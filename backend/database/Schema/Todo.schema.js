import { Schema, model } from "mongoose";

const TodoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const Todos = model("todos", TodoSchema);

export default Todos;
