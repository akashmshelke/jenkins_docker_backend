#!/bin/bash

# download the node modules
# npm install

# remove the container if exists or running 
if [ $(docker container ls -q -a --filter name=my_backend_container) != '' ]; then
    docker container stop my_backend_container
    docker container rm my_backend_container
fi

# remove the image if exists
if [ $(docker image ls -q --filter reference=my_backend) != '' ]; then
    docker image rm my_backend
fi

# build the image
docker build -t my_backend .

# start the container
docker run -itd -p 3000:3000 --name my_backend_container my_backend
