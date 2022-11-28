#!/bin/bash

#adetonat@ymail.com

gcloud beta compute instances create bloghost \
--zone=us-central1-a --machine-type=n1-standard-1 --subnet=default \
--metadata=startup-script=apt-get\ update$'\n'apt-get\ install\ apache2\ php\ php-mysql\ -y$'\n'service\ apache2\ restart \
--tags=http-server --image=debian-9-stretch-v20200902 \
--image-project=debian-cloud --boot-disk-size=10GB \
--boot-disk-type=pd-standard --boot-disk-device-name=bloghost

export LOCATION=US

gsutil mb -l $LOCATION gs://$DEVSHELL_PROJECT_ID

gsutil cp gs://cloud-training/gcpfci/my-excellent-blog.png my-excellent-blog.png

gsutil cp my-excellent-blog.png gs://$DEVSHELL_PROJECT_ID/my-excellent-blog.png

gsutil acl ch -u allUsers:R gs://$DEVSHELL_PROJECT_ID/my-excellent-blog.png

gcloud sql instances create blog-db \
--tier=db-n1-standard-2 --zone=us-central1-a \
--database-version=MYSQL_5_7

gcloud sql users set-password root --host=% --instance blog-db \
--password pass1234

gcloud sql connect blog-db2 --user=root --quiet

show databases;
create database sampleDB;
use sample DB;
exit;

gcloud sql users create blogdbuser \
--host=% --instance=blog-db \
--password=pass1234

gcloud sql instances patch blog-db \
--authorized-networks=35.224.39.178/32

gcloud beta compute ssh --zone "us-central1-a" "bloghost" 

sudo touch /var/www/html/index.php

sudo chmod 777 /var/www/html/index.php

sudo cat << EOF >> /var/www/html/index.php
<html>
<head><title>Welcome to my excellent blog</title></head>
<body>
<h1>Welcome to my excellent blog</h1>

<?php
\$dbserver = "35.192.162.183";
\$dbuser = "blogdbuser";
\$dbpassword = "pass1234";
// In a production blog, we would not store the MySQL
// password in the document root. Instead, we would store it in a
// configuration file elsewhere on the web server VM instance.

\$conn = new mysqli(\$dbserver, \$dbuser, \$dbpassword);

if (mysqli_connect_error()) {
        echo ("Database connection failed: " . mysqli_connect_error());
} else {
        echo ("Database connection succeeded.");
}
?>
</body></html>
EOF

sudo service apache2 restart

curel http://bloghost/index.php

sed -i '5i\<img src="https://storage.googleapis.com/qwiklabs-gcp-03-2d1188a512a4/my-excellent-blog.png" />' /var/www/html/index.php

curel http://bloghost/index.php

http://35.192.162.183/index.php
