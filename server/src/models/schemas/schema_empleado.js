import { body } from 'express-validator'

export const createEmpleadoSchema = [
  body('nombre_completo')
    .exists()
    .notEmpty().withMessage('El nombre_completo no debe estar vacío.')
    .isString().withMessage('El nombre completo debe ser un string.')
    .isLength({min: 4, max: 70})
    .withMessage('Debe tener  minimo 5 caracteres con un maximo de 70 caracteres'),
  body('edad')
    .exists()
    .notEmpty().withMessage("no debe estar vacio la edad")
    .isNumeric().withMessage("debe ser un numero entero la edad"),
  body('genero')
    .exists()
    .notEmpty()
    .isString()
]
 