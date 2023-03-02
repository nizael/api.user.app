import AppError from "../../error/appError"

interface ISessionCreate {
  login: string
  password: string
}
export const create = async (data: ISessionCreate) => {
  const { login, password } = data
  if (!login || !password) throw new AppError({
    message: 'insufficient data',
    statusCode: 400
  })
  return await sessionRepository.create(data)
}
