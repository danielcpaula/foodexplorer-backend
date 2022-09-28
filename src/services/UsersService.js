const { hash } = require("bcryptjs")
const AppError = require('../util/appError')

class UsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository
  }

  async create({name, email, password}) {
    if(!name) {
      throw new AppError("Nome está vazio")
    }

    if(!email) {
      throw new AppError("email está vazio")
    }

    if(!password) {
      throw new AppError("password está vazio")
    }
    const checkUserExists = await this.usersRepository.findByEmail({email})

    if(checkUserExists) {
      throw new AppError("este e-mail já está em uso")
    }
  
    const hashedPassword = await hash(password, 8)

    const userCreated = await this.usersRepository.create({name, email, hashedPassword})

    return userCreated
  }
}

module.exports = UsersService