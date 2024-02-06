import Joi from "joi";

export const journalEntryValidationSchema = Joi.object({
  title: Joi.string().required().max(100),
  content: Joi.string().required(),
  date: Joi.date().iso().required(),
});
