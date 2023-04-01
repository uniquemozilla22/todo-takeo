import mongoose from "mongoose";
import Users from "./Schema/Users.schema.js";

const connectDatabase = async () => {
  const connection = await mongoose.connect(process.env.DB_CONNECTION_URL);

  if (connection) {
    console.log("database connected");
    const sumitrapokharel = new Users({
      username: "Sumitrapokharel",
      password: "Sumitra1234",
    });
    await sumitrapokharel.save();
  } else {
    console.log("databasse not connected");
  }
};

export default connectDatabase;
