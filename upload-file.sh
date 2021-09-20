#!/bin/sh

[ -f .env ] && . .env

http -v -f "http://localhost:$PORT/api/uploads" file-to-upload@hanson-arin-image.jpeg
