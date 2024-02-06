import express from "express";
import {
  saveChildRecord,
  getChildRecords,
  updateChildRecord,
  deleteChildRecord,
} from "../controllers/childController"

const child_router = express.Router();


child_router.post("/saveChildDetails", saveChildRecord);
child_router.get("/fetchChildDetails", getChildRecords);
child_router.put("/update/:babyId", updateChildRecord);
child_router.delete("/delete/:babyId", deleteChildRecord);
export default child_router;
