import express from "express";
import {
  saveMotherDetails,
  getMotherDetails,
  updateMotherDetails,
  deleteMotherDetails,
} from "../controllers/motherController";


const mother_router = express.Router();


mother_router.post("/mother", saveMotherDetails);
mother_router.get("/mother", getMotherDetails);
mother_router.put("/mother/:motherId", updateMotherDetails);
mother_router.delete("/mother/:motherId", deleteMotherDetails);



export default mother_router;
