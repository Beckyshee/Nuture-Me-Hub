import express from "express";
import {
  saveChildDetails,
  fetchChildDetails,
  updateChildDetails,
} from "../controllers/childController"

const child_router = express.Router();


child_router.post("/saveChildDetails", saveChildDetails);
child_router.get("/fetchChildDetails", fetchChildDetails);
child_router.put("/update/:babyId", updateChildDetails);
// child_router.delete("/delete/:babyId", deleteChildDetails);
export default child_router;
