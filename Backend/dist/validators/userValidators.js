"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordResetValidationSchema = exports.passwordResetRequestValidationSchema = exports.userLoginValidationSchema = exports.userRegisterValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// Register validation
exports.userRegisterValidationSchema = joi_1.default.object({
    fullName: joi_1.default.string().required().min(2).max(30),
    email: joi_1.default.string().email({
        minDomainSegments: 2,
        tlds: {
            allow: ["ke", "com"],
        },
    }),
    password: joi_1.default
        .string()
        .required()
        .pattern(new RegExp("^[a-zA-Z0-9!@#%$&*()]{0,30}$")),
    phone: joi_1.default.string().required(),
});
// Login validation
exports.userLoginValidationSchema = joi_1.default.object({
    email: joi_1.default.string().email({
        minDomainSegments: 2,
        tlds: {
            allow: ["ke", "com"],
        },
    }),
    password: joi_1.default
        .string()
        .required()
        .pattern(new RegExp("^[a-zA-Z0-9!@#%$&*()]{0,30}$")),
});
// Password reset request validation
exports.passwordResetRequestValidationSchema = joi_1.default.object({
    email: joi_1.default.string().email({
        minDomainSegments: 2,
        tlds: {
            allow: ["ke", "com"],
        },
    }),
});
// Password reset validation
exports.passwordResetValidationSchema = joi_1.default.object({
    email: joi_1.default.string().email({
        minDomainSegments: 2,
        tlds: {
            allow: ["ke", "com"],
        },
    }),
    newPassword: joi_1.default
        .string()
        .required()
        .pattern(new RegExp("^[a-zA-Z0-9!@#%$&*()]{0,30}$")),
    token: joi_1.default.string().required().min(2).max(300),
});
