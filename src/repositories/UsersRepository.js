const knex = require("../database/knex")

class UsersRepository {
  async create({name, email, hashedPassword}) {
    const user_id = await knex("users").insert({
      name,
      email,
      password: hashedPassword
    })

    return user_id
  }

  async findByEmail({email}) {
    
    const user = await knex("users").where({email}).first()
    console.log(user)
    return user
  } 
}

module.exports = UsersRepository