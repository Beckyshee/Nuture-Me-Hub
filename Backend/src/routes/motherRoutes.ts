import express from "express";
import {
  saveMotherDetails,
  getMotherDetails,
  updateMotherDetails,
  deleteMotherDetails,
} from "../controllers/motherController";


const mother_router = express.Router();


mother_router.post("/saveMotherDetails", saveMotherDetails);
mother_router.get("/fetchMotherDetails", getMotherDetails);
mother_router.put("/:motherId", updateMotherDetails);
mother_router.delete("/:motherId", deleteMotherDetails);



export default mother_router;
