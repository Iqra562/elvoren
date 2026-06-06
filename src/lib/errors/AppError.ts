export type ErrorCode = 
  | 'NOT_FOUND'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'VALIDATION_ERROR'
  | 'CONFLICT'
  | 'INTERNAL_ERROR'
  | 'BAD_REQUEST'

  export class AppError extends Error {
  public readonly statusCode: number
  public readonly code:       ErrorCode
  public readonly isOperational: boolean  

  constructor(message: string, statusCode: number, code: ErrorCode) {
    super(message)
    this.statusCode    = statusCode
    this.code          = code
    this.isOperational = true
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
