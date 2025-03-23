import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const router = express.Router();

router.post("/users", createUser); // create user
router.get("/users", getAllUsers); // get all users
router.get("/users/:id", getUserById); // get user by id
router.put("/users/:id", updateUser); // update user by id
router.delete("/users/:id", deleteUser); // delete user by id

export default router;
