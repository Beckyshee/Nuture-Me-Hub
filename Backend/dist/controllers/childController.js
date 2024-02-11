"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateChildDetails = exports.fetchChildDetails = exports.saveChildDetails = void 0;
const mssql_1 = __importDefault(require("mssql"));
const sqlConfig_1 = require("../configs/sqlConfig");
const uuid_1 = require("uuid");
// Save child details
const saveChildDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { babyName, dateOfBirth, gender, weightAtBirth, heightAtBirth, bloodType, medicalHistory, allergies, pediatricianName, pediatricianPhone, hospitalOfBirth, deliveryType, apgarScore, birthComplications, vaccinationRecord, growthProgress, } = req.body;
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const babyId = (0, uuid_1.v4)();
        const result = yield pool
            .request()
            .input("babyId", mssql_1.default.VarChar, babyId)
            .input("babyName", mssql_1.default.VarChar, babyName)
            .input("dateOfBirth", mssql_1.default.Date, dateOfBirth)
            .input("gender", mssql_1.default.VarChar, gender)
            .input("weightAtBirth", mssql_1.default.Float, weightAtBirth)
            .input("heightAtBirth", mssql_1.default.Float, heightAtBirth)
            .input("bloodType", mssql_1.default.VarChar, bloodType)
            .input("medicalHistory", mssql_1.default.VarChar, medicalHistory)
            .input("allergies", mssql_1.default.VarChar, allergies)
            .input("pediatricianName", mssql_1.default.VarChar, pediatricianName)
            .input("pediatricianPhone", mssql_1.default.VarChar, pediatricianPhone)
            .input("hospitalOfBirth", mssql_1.default.VarChar, hospitalOfBirth)
            .input("deliveryType", mssql_1.default.VarChar, deliveryType)
            .input("apgarScore", mssql_1.default.Float, apgarScore)
            .input("birthComplications", mssql_1.default.VarChar, birthComplications)
            .input("vaccinationRecord", mssql_1.default.VarChar, vaccinationRecord)
            .input("growthProgress", mssql_1.default.VarChar, growthProgress)
            .execute("saveChildDetails");
        return res.status(200).json({
            message: "Child details saved successfully",
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
});
exports.saveChildDetails = saveChildDetails;
const fetchChildDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const childDetails = yield (yield pool.request().execute("fetchChildDetails")).recordset;
        return res.status(200).json({
            childDetails: childDetails,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
});
exports.fetchChildDetails = fetchChildDetails;
// Update child details
const updateChildDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { babyId, babyName, dateOfBirth, gender, weightAtBirth, heightAtBirth, bloodType, medicalHistory, allergies, pediatricianName, pediatricianPhone, hospitalOfBirth, deliveryType, apgarScore, birthComplications, vaccinationRecord, growthProgress, } = req.body;
        const pool = yield mssql_1.default.connect(sqlConfig_1.sqlConfig);
        const result = yield pool
            .request()
            .input("babyId", mssql_1.default.VarChar, babyId)
            .input("babyName", mssql_1.default.VarChar, babyName)
            .input("dateOfBirth", mssql_1.default.Date, dateOfBirth)
            .input("gender", mssql_1.default.VarChar, gender)
            .input("weightAtBirth", mssql_1.default.Float, weightAtBirth)
            .input("heightAtBirth", mssql_1.default.Float, heightAtBirth)
            .input("bloodType", mssql_1.default.VarChar, bloodType)
            .input("medicalHistory", mssql_1.default.VarChar, medicalHistory)
            .input("allergies", mssql_1.default.VarChar, allergies)
            .input("pediatricianName", mssql_1.default.VarChar, pediatricianName)
            .input("pediatricianPhone", mssql_1.default.VarChar, pediatricianPhone)
            .input("hospitalOfBirth", mssql_1.default.VarChar, hospitalOfBirth)
            .input("deliveryType", mssql_1.default.VarChar, deliveryType)
            .input("apgarScore", mssql_1.default.Float, apgarScore)
            .input("birthComplications", mssql_1.default.VarChar, birthComplications)
            .input("vaccinationRecord", mssql_1.default.VarChar, vaccinationRecord)
            .input("growthProgress", mssql_1.default.VarChar, growthProgress)
            .execute("updateChildDetails");
        return res.status(200).json({
            message: "Child details updated successfully",
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
});
exports.updateChildDetails = updateChildDetails;
// Delete child details
// export const deleteChildDetails;
