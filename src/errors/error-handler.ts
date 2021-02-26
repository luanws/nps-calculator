import { NextFunction, Request, Response } from "express"
import AppError from "./app-error"
import { ValidationError } from 'yup'

function errorHandler(error: Error, request: Request, response: Response, _next: NextFunction) {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            error: error.message
        })
    } else if (error instanceof ValidationError) {
        return response.status(400).json(error)
    } else {
        return response.status(500).json({
            status: 'error',
            message: 'Internal server error'
        })
    }
}

export default errorHandler