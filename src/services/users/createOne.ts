export const createOne = async (data: any) => {
  validateData(data) //criar funçãompara validar os dados do usuario
  return await userRepository.createOne(data)
}