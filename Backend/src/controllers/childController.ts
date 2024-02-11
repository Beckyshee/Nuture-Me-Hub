import { Request, Response } from "express";
import mssql from "mssql";
import { sqlConfig } from "../configs/sqlConfig";
import { v4 } from "uuid";

// Save child details
export const saveChildDetails = async (req: Request, res: Response) => {
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
    const babyId = v4();

    const result = await pool
      .request()
      .input("babyId", mssql.VarChar, babyId)
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
      .execute("saveChildDetails");

    return res.status(200).json({
      message: "Child details saved successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

export const fetchChildDetails = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);

    const childDetails = await (
      await pool.request().execute("fetchChildDetails")
    ).recordset;

    return res.status(200).json({
      childDetails: childDetails,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// Update child details
export const updateChildDetails = async (req: Request, res: Response) => {
  try {
    const {
      babyId,
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
      .input("babyId", mssql.VarChar, babyId)
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
      .execute("updateChildDetails");

    return res.status(200).json({
      message: "Child details updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// Delete child details
// export const deleteChildDetails;
