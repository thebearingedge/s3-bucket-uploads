# s3-bucket-uploads

A sample Express.js server that uploads files to AWS S3.

## Trying it out

- Clone this repository
- Copy the `.env.example` to `.env` and enter your own credentials
- Install dependencies with `npm ci`
- Run the application with `npm run dev`

## Use HTTPie

```shell
http -v -f http://localhost:3000/api/uploads file-to-upload@hanson-arin-image.jpeg
```

## Or the shell script

```shell
sh upload-file.sh
```

## `multer-s3` Docs

https://www.npmjs.com/package/multer-s3
