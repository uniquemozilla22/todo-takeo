const mongoose = require("mongoose");

const connect_to_database = async () => {
  const connection = await mongoose.connect(
    `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER_NAME}.gnmc5j9.mongodb.net/?retryWrites=true&w=majority`
  );
  if (connection) {
    console.log("database connected");
  } else {
    console.log("databasse not connected");
  }
};

module.exports = connect_to_database;
