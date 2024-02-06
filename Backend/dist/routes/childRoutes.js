"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const c_1 = require("../controllers/c");
const router = express_1.default.Router();
// Routes for Child
router.post("/", c_1.saveChildRecord); // Save child record
router.get("/", c_1.getChildRecords); // Get all child records
router.put("/:babyId", c_1.updateChildRecord); // Update child record
router.delete("/:babyId", c_1.deleteChildRecord); // Delete child record
exports.default = router;
