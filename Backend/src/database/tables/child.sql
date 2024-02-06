CREATE TABLE BabyDetails (
    babyId VARCHAR(255) PRIMARY KEY,
    babyName VARCHAR(255) NOT NULL,
    dateOfBirth DATE,
    gender VARCHAR(10),
    weightAtBirth FLOAT,
    heightAtBirth FLOAT,
    bloodType VARCHAR(10),
    medicalHistory VARCHAR(1000),
    allergies VARCHAR(500),
    pediatricianName VARCHAR(255),
    pediatricianPhone VARCHAR(20),
    hospitalOfBirth VARCHAR(255),
    deliveryType VARCHAR(100),
    apgarScore VARCHAR(10),
    birthComplications VARCHAR(500),
    vaccinationRecord VARCHAR(1000),
    growthProgress VARCHAR(1000)
);
DROP TABLE BabyDetails;