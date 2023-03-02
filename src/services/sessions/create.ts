interface ISessionCreate {
  login: string
  password: string
}
export const create = async (data: ISessionCreate) => {
  const { login, password } = data
  if (!login || !password) throw AppError({
    message: 'insufficient data'
  })
  return await sessionRepository.create(data)
}
