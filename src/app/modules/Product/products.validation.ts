import Joi from 'joi';

// Define the Joi validation schema
const productValidationSchema = Joi.object({
  name: Joi.string().trim().max(30).required().messages({
    'string.base': 'Product name should be a string',
    'string.empty': 'Product name is required',
    'string.max': 'Name cannot be more than 30 characters',
    'any.required': 'Product name is required',
  }),
  description: Joi.string().trim().optional(),
  price: Joi.number().min(1).required().messages({
    'number.base': 'Product price should be a number',
    'number.min': 'Price must be more than 0',
    'any.required': 'Product price is required',
  }),
  category: Joi.string().trim().required().messages({
    'string.base': 'Product category should be a string',
    'string.empty': 'Product category is required',
    'any.required': 'Product category is required',
  }),
  tags: Joi.array().items(Joi.string().trim()).optional(),
  variants: Joi.array()
    .items(
      Joi.object({
        type: Joi.string().trim().required().messages({
          'string.base': 'Variant type should be a string',
          'string.empty': 'Variant type is required',
          'any.required': 'Variant type is required',
        }),
        value: Joi.string().trim().required().messages({
          'string.base': 'Variant value should be a string',
          'string.empty': 'Variant value is required',
          'any.required': 'Variant value is required',
        }),
      }),
    )
    .optional(),
  inventory: Joi.object({
    quantity: Joi.number().min(0).required().messages({
      'number.base': 'Inventory quantity should be a number',
      'number.min': 'Quantity can not be negative',
      'any.required': 'Inventory quantity is required',
    }),
    inStock: Joi.boolean().required().messages({
      'boolean.base': 'Inventory stock status should be a boolean',
      'any.required': 'Inventory stock status is required',
    }),
  }).required(),
});

export default productValidationSchema;
