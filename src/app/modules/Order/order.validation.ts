import Joi from 'joi';

// Define the Joi validation schema for an order
const orderValidationSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': 'Email should be a string',
    'string.email': 'Email must be a valid email address',
    'any.required': 'Email is necessary to identify customer',
  }),
  productId: Joi.string().required().messages({
    'string.base': 'Product ID should be a string',
    'any.required': 'Product ID is necessary to identify product',
  }),
  quantity: Joi.number().min(1).required().messages({
    'number.base': 'Quantity should be a number',
    'number.min': 'Order quantity must be at least 1',
    'any.required': 'Quantity is required for order',
  }),
});

export default orderValidationSchema;
