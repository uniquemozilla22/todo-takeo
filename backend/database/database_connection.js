import mongoose from "mongoose";

const connectDatabase = async () => {
  const connection = await mongoose.connect(process.env.DB_CONNECTION_URL);

  if (connection) {
    console.log("database connected");
  } else {
    console.log("databasse not connected");
  }
};

export default connectDatabase;
