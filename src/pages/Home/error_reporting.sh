#!/bin/bash

#adetonat@ymail.com

mkdir appengine-hello

cd appengine-hello

gsutil cp gs://cloud-training/archinfra/gae-hello/* 

dev_appserver.py $(pwd)

exit

gcloud app deploy app.yaml

gcloud app browse

exit

cat main.py

sed -i -e 's/webapp2/webapp22/' main.py

cat main.py

gcloud app deploy app.yaml --quiet

gcloud app browse

exit

gcloud beta error-reporting events report --service=SERVICE_NAME --message-file=ERROR_MESSAGE.EXT

gcloud app browse

gcloud beta error-reporting events report --help

sed -i -e 's/webapp22/webapp2/' main.py

gcloud app deploy app.yaml --quiet

gcloud app browse