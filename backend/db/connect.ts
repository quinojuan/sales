import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGODB_URL) {
    throw Error("Falta la variable de entorno de MONGODB_URL");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Successfull connection to DB!");
  } catch (error) {
    console.log({ message: error });
  }
};

export default connectDB;
