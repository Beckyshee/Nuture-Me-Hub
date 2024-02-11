CREATE OR ALTER PROCEDURE saveChildDetails
    @babyId VARCHAR(255),
    @babyName VARCHAR(255),
    @DateOfBirth DATE,
    @Gender VARCHAR(10),
    @WeightAtBirth FLOAT,
    @HeightAtBirth FLOAT,
    @BloodType VARCHAR(10),
    @MedicalHistory VARCHAR(1000),
    @Allergies VARCHAR(500),
    @PediatricianName VARCHAR(255),
    @PediatricianPhone VARCHAR(20),
    @HospitalOfBirth VARCHAR(255),
    @DeliveryType VARCHAR(100),
    @ApgarScore FLOAT,
    @BirthComplications VARCHAR(500),
    @VaccinationRecord VARCHAR(1000),
    @GrowthProgress VARCHAR(1000)
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO BabyDetails (
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
        growthProgress
    )
    VALUES (
        @babyId,
        @babyName,
        @DateOfBirth,
        @Gender,
        @WeightAtBirth,
        @HeightAtBirth,
        @BloodType,
        @MedicalHistory,
        @Allergies,
        @PediatricianName,
        @PediatricianPhone,
        @HospitalOfBirth,
        @DeliveryType,
        @ApgarScore,
        @BirthComplications,
        @VaccinationRecord,
        @GrowthProgress
    );
END;

-- CREATE OR ALTER PROCEDURE updateChildDetails
--     @babyId VARCHAR(255),
--     @babyName VARCHAR(255),
--     @dateOfBirth DATE,
--     @gender VARCHAR(10),
--     @weightAtBirth FLOAT,
--     @heightAtBirth FLOAT,
--     @bloodType VARCHAR(10),
--     @medicalHistory VARCHAR(1000),
--     @allergies VARCHAR(500),
--     @pediatricianName VARCHAR(255),
--     @pediatricianPhone VARCHAR(20),
--     @hospitalOfBirth VARCHAR(255),
--     @deliveryType VARCHAR(100),
--     @apgarScore FLOAT,
--     @birthComplications VARCHAR(500),
--     @vaccinationRecord VARCHAR(1000),
--     @growthProgress VARCHAR(1000)
-- AS
-- BEGIN
--     SET NOCOUNT ON;

--     UPDATE BabyDetails
--     SET 
--         babyName = @babyName,
--         dateOfBirth = @dateOfBirth,
--         gender = @gender,
--         weightAtBirth = @weightAtBirth,
--         heightAtBirth = @heightAtBirth,
--         bloodType = @bloodType,
--         medicalHistory = @medicalHistory,
--         allergies = @allergies,
--         pediatricianName = @pediatricianName,
--         pediatricianPhone = @pediatricianPhone,
--         hospitalOfBirth = @hospitalOfBirth,
--         deliveryType = @deliveryType,
--         apgarScore = @apgarScore,
--         birthComplications = @birthComplications,
--         vaccinationRecord = @vaccinationRecord,
--         growthProgress = @growthProgress
--     WHERE 
--         babyId = @babyId;
-- END;


-- CREATE OR ALTER PROCEDURE getAllChildDetails
-- AS
-- BEGIN
--     SET NOCOUNT ON;

--     SELECT * FROM BabyDetails;
-- END;


-- CREATE OR ALTER PROCEDURE getChildDetailById
--     @babyId VARCHAR(255)
-- AS
-- BEGIN
--     SET NOCOUNT ON;

--     SELECT * FROM BabyDetails WHERE babyId = @babyId;
-- END;








