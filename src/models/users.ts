import { Schema, model } from "mongoose";

// create interface to represent document in mongodb
interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt?: Date;
}

// create user schema
const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// create user model
const User = model<IUser>("User", userSchema);

export { User, IUser };
