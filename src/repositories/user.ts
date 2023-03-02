import { PrismaClient, Prisma, Users } from '@prisma/client';
import { PrismaClientOptions } from '@prisma/client/runtime';
import bcrypt from 'bcryptjs'
const prisma = new PrismaClient()

prisma.$use(async (params, next) => {
  if (params.model == 'Users' && params.action == 'create') {
    // Logic only runs for delete action and Post model
    const quantity = Math.floor(Math.random());
    params.args.data.password = await bcrypt.hash(params.args.data.password, quantity);
  }
  return next(params)
})

export default {

  async createOne(data: Prisma.UsersCreateInput) {
    const response = await prisma.users.create({
      data
    })
    return response
  },

  async getOneByNicknameOrEmailOrId(emailOrNicknameOrId: string) {
    return await prisma.users.findFirst({
      where: {
        OR: [
          { nickname: emailOrNicknameOrId },
          { email: emailOrNicknameOrId },
          { id: Number(emailOrNicknameOrId) }
        ]
      }
    })
  }

}


