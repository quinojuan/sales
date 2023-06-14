import mongoose from "mongoose";
import UserModel from "../models/user";

const connectDB = async () => {
  if (!process.env.MONGODB_URL) {
    throw Error("Falta la variable de entorno de MONGODB_URL");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Successfull connection to DB!");
    // const newUser = new UserModel({
    //   firstname: "juan",
    //   lastname: "quino",
    //   email: "quinojuan@gmail.com",
    //   login_code: "123456",
    //   roles: {
    //     admin: true,
    //   },
    // });

    // const newUser2 = new UserModel({
    //   firstname: "jaime",
    //   lastname: "perez",
    //   email: "perezjaime@gmail.com",
    //   login_code: "111111",
    //   roles: {
    //     seller: true,
    //   },
    // });
    // await newUser.save();
    // await newUser2.save();

    // console.log({ newUser, newUser2 });
  } catch (error) {
    console.log({ message: error });
  }
};

export default connectDB;
