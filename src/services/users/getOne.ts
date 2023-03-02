type IIdentifier = number | string
export const getOne = async (identifier: IIdentifier) => {
  if (!identifier) throw AppErro({
    message: 'unknown user'
  })
  return await useRepositories.getOne(identifier)
}