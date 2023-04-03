import mongoose from "mongoose";
import Users from "./Schema/Users.schema.js";

const connectDatabase = async () => {
  const connection = await mongoose.connect(
    `mongodb+srv://bhattaraiyogesh007:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER_NAME}.mongodb.net/?retryWrites=true&w=majority`
  );

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
