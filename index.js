require('dotenv/config')
const express = require('express')
const uploadsMiddleware = require('./uploads-middleware')

const app = express()


app.post('/api/uploads', uploadsMiddleware, (req, res, next) => {

  console.log('req.file:', req.file) // https://www.npmjs.com/package/multer-s3#file-information

  const fileUrl = req.file.location // The S3 url to access the uploaded file later



  /* "logic" */



  res.end() // this is just here so my request doesn't hang
})


app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({
    error: 'an unexpected error occurred (check the server terminal)'
  })
})


app.listen(process.env.PORT, () => {
  console.log('express server listening on port', process.env.PORT)
})
