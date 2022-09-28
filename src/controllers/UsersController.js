const UsersRepository = require("../repositories/UsersRepository")
const UsersService = require("../services/UsersService")

class UsersController {
  async create(request, response) {
    
    const {name, email, password} = request.body

    const usersRepository = new UsersRepository()
    const usersService = new UsersService(usersRepository)
    await usersService.create({name, email, password})

    return response.status(201).json()
  }
}

module.exports = UsersController
