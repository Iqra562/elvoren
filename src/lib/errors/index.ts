import { forbidden, unauthorized } from "next/navigation";
import { AppError } from "./AppError";


export const Errors = {
    notFound:(msg= 'Resource not found') => new AppError(msg, 404, 'NOT_FOUND'),
    unauthorized : (msg = 'Unauthorized') => new AppError(msg, 401, 'UNAUTHORIZED'),
    forbidden : (msg = 'Forbidden') => new AppError(msg, 403, 'FORBIDDEN'),
    conflict : (msg = 'Already exists') => new AppError(msg, 409, 'CONFLICT'),
    badRequest : (msg= 'Bad request') => new AppError(msg, 400, 'BAD_REQUEST'),
    validation: (msg = 'Validation failed') => new AppError(msg, 422, 'VALIDATION_ERROR'),
    intrnal : (msg = 'Internal error')=> new AppError(msg, 500, 'INTERNAL_ERROR')   
}