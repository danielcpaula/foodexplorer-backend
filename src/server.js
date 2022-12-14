require("express-async-errors")
require("dotenv/config")
const AppError = require("./util/appError")


const cors = require("cors")
const express = require('express');
const routes = require("./routes")

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use((error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.error(error)

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})


const port = 3333

app.listen(port, () => console.log(`Server is running on port ${port}`));