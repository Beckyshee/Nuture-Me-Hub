"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const motherController_1 = require("../controllers/motherController");
const mother_router = express_1.default.Router();
mother_router.post("/saveMotherDetails", motherController_1.saveMotherDetails);
mother_router.get("/fetchMotherDetails", motherController_1.getMotherDetails);
mother_router.put("/:motherId", motherController_1.updateMotherDetails);
mother_router.delete("/:motherId", motherController_1.deleteMotherDetails);
exports.default = mother_router;
