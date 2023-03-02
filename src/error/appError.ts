interface IAppError {
  message: string;
  statusCode: number;
  statusMessage?: 'error' | 'validation fails';
  details?: {
    [key: string]: string;
  };
}

class AppError extends Error {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly statusMessage: string | undefined;
  public readonly details: object | undefined;

  constructor({ message, details, statusMessage = 'error', statusCode }: IAppError) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.details = details;
    this.statusMessage = statusMessage;
  }
}

export default AppError;
