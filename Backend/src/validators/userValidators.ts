import joi from "joi";

// Register validation
export const userRegisterValidationSchema = joi.object({
  fullName: joi.string().required().min(2).max(30),
  email: joi.string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ["ke", "com"],
    },
  }),
  password: joi
    .string()
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9!@#%$&*()]{0,30}$")),
  phone: joi.string().required(),
});

// Login validation
export const userLoginValidationSchema = joi.object({
  email: joi.string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ["ke", "com"],
    },
  }),
  password: joi
    .string()
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9!@#%$&*()]{0,30}$")),
});

// Password reset request validation
export const passwordResetRequestValidationSchema = joi.object({
  email: joi.string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ["ke", "com"],
    },
  }),
});

// Password reset validation
export const passwordResetValidationSchema = joi.object({
  email: joi.string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ["ke", "com"],
    },
  }),
  newPassword: joi
    .string()
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9!@#%$&*()]{0,30}$")),
  token: joi.string().required().min(2).max(300),
});
