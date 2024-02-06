"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const childController_1 = require("../controllers/childController");
const child_router = express_1.default.Router();
child_router.post("/saveChildDetails", childController_1.saveChildRecord);
child_router.get("/fetchChildDetails", childController_1.getChildRecords);
child_router.put("/update/:babyId", childController_1.updateChildRecord);
child_router.delete("/delete/:babyId", childController_1.deleteChildRecord);
exports.default = child_router;
