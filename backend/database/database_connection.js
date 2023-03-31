import mongoose from "mongoose";
import Todos from "./Schema/Todo.schema.js";

export const connectDatabase = async () => {
  const connection = await mongoose.connect(process.env.DATABASE_URL);
  if (connection) {
    console.log("database connected");
    // const todo = new Todos({
    //   id: 2,
    //   title: "title2",
    //   description: "hey again",
    //   completed: false,
    // });
    // await todo.save();
  } else {
    console.log("databasse not connected");
  }
};
