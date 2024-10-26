export const SuccessMessages = {
  MONGO_CONNECTION_SUCCESS: "MongoDB connected successfully",
};
export const ErrorMessages = {
  MONGO_ENV_NOT_DEFINED: "MONGO_DB_URI environment variable not defined",
  MONGO_CONNECTION_ERROR: "MongoDB connection error: ",
  INVALID_ID: "The ID you entered is invalid.",
  INTERNAL_SERVER_ERROR: "Oops! Something went wrong. Please try again later.",
};

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
}
