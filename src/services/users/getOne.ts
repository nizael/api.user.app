import AppError from "../../error/appError"

type IIdentifier = number | string
export const getOne = async (identifier: IIdentifier) => {
  if (!identifier) throw new AppError({
    message: 'unknown user',
    statusCode: 400
  })
  return await useRepositories.getOne(identifier)
}