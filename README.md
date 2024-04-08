# nodejs docker app

sources: 
- https://www.youtube.com/watch?v=nH47lsxvY9c
- https://github.com/gabboraron/Play_with_Docker_Classroom


Commands:
1. `docker build . -t gabboraron/nodewebapp:v1`
2. `docker images`
3. `>docker run -d -p 8001:8080 gabboraron/nodewebapp:v1`
4. open the link in browser: http://localhost:8001
5. stop it with `docker stop <CONTAINER ID>`
6. start again with `docker start <CONTAINER ID>`
7. to use the system of docker what we created and log in use `docker exec -it <docker container ID> /bin/sh`
8. to exit from the container just use `exit`
9. to mount the current directory to the docker use `docker rm <container ID>` to remove the container name from your docker and use `docker run -d -p 8001:8080 -v %cd%:/app --name <containername> gabboraron/nodewebapp:v1` to bind it to the live docker image.

