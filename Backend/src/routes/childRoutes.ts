import express from "express";
import {
  saveChildRecord,
  getChildRecords,
  updateChildRecord,
  deleteChildRecord,
} from "../controllers/childController"

const router = express.Router();


router.post("/", saveChildRecord);
router.get("/", getChildRecords);
router.put("/:babyId", updateChildRecord);
router.delete("/:babyId", deleteChildRecord);
export default router;
