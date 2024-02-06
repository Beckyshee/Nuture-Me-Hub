import { Request, Response } from "express";
import mssql from "mssql";
import { sqlConfig } from "../configs/sqlConfig";
import { v4 } from "uuid";

// Save child record
export const saveChildRecord = async (req: Request, res: Response) => {
  try {
    const {
      babyName,
      dateOfBirth,
      gender,
      weightAtBirth,
      heightAtBirth,
      bloodType,
      medicalHistory,
      allergies,
      pediatricianName,
      pediatricianPhone,
      hospitalOfBirth,
      deliveryType,
      apgarScore,
      birthComplications,
      vaccinationRecord,
      growthProgress,
    } = req.body;

    const pool = await mssql.connect(sqlConfig);
    const babyId = v4()
    const result = await pool
      .request()
      .input("babyName", mssql.VarChar, babyName)
      .input("dateOfBirth", mssql.Date, dateOfBirth)
      .input("gender", mssql.VarChar, gender)
      .input("weightAtBirth", mssql.Float, weightAtBirth)
      .input("heightAtBirth", mssql.Float, heightAtBirth)
      .input("bloodType", mssql.VarChar, bloodType)
      .input("medicalHistory", mssql.VarChar, medicalHistory)
      .input("allergies", mssql.VarChar, allergies)
      .input("pediatricianName", mssql.VarChar, pediatricianName)
      .input("pediatricianPhone", mssql.VarChar, pediatricianPhone)
      .input("hospitalOfBirth", mssql.VarChar, hospitalOfBirth)
      .input("deliveryType", mssql.VarChar, deliveryType)
      .input("apgarScore", mssql.Float, apgarScore)
      .input("birthComplications", mssql.VarChar, birthComplications)
      .input("vaccinationRecord", mssql.VarChar, vaccinationRecord)
      .input("growthProgress", mssql.VarChar, growthProgress)
      .execute("saveChildRecord");

    return res.status(200).json({
      message: "Child record saved successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// fetching child records
export const getChildRecords = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);

    const childRecords = await (
      await pool.request().execute("getChildRecords")
    ).recordset;

    return res.status(200).json({
      childRecords: childRecords,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// Updating child records
export const updateChildRecord = async (req: Request, res: Response) => {
  try {
    const {
      babyName,
      dateOfBirth,
      gender,
      weightAtBirth,
      heightAtBirth,
      bloodType,
      medicalHistory,
      allergies,
      pediatricianName,
      pediatricianPhone,
      hospitalOfBirth,
      deliveryType,
      apgarScore,
      birthComplications,
      vaccinationRecord,
      growthProgress,
    } = req.body;

    const pool = await mssql.connect(sqlConfig);

    const result = await pool
      .request()
      .input("babyName", mssql.VarChar, babyName)
      .input("dateOfBirth", mssql.Date, dateOfBirth)
      .input("gender", mssql.VarChar, gender)
      .input("weightAtBirth", mssql.Float, weightAtBirth)
      .input("heightAtBirth", mssql.Float, heightAtBirth)
      .input("bloodType", mssql.VarChar, bloodType)
      .input("medicalHistory", mssql.VarChar, medicalHistory)
      .input("allergies", mssql.VarChar, allergies)
      .input("pediatricianName", mssql.VarChar, pediatricianName)
      .input("pediatricianPhone", mssql.VarChar, pediatricianPhone)
      .input("hospitalOfBirth", mssql.VarChar, hospitalOfBirth)
      .input("deliveryType", mssql.VarChar, deliveryType)
      .input("apgarScore", mssql.Float, apgarScore)
      .input("birthComplications", mssql.VarChar, birthComplications)
      .input("vaccinationRecord", mssql.VarChar, vaccinationRecord)
      .input("growthProgress", mssql.VarChar, growthProgress)
      .execute("updateChildRecord");

    return res.status(200).json({
      message: "Child record updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// Deleting child records
export const deleteChildRecord = async (req: Request, res: Response) => {
  try {
    const { babyId } = req.params;

    const pool = await mssql.connect(sqlConfig);

    const result = await pool
      .request()
      .input("babyId", mssql.VarChar, babyId)
      .execute("deleteChildRecord");

    return res.status(200).json({
      message: "Child record deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
