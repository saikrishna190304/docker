# 1.Created a simple node.js app
A basic webserver made with express runs on port 5001 and shows a message when you open it on browser.
# 2.Created a package.json file
This is the blueprint for node js app
# 3.Dockerized the application
wrote a docker file on how node js app is built into docker image
# 4.Built the docker image
build the docker image using the below cmd
cmd:docker build -t saireddie45/rohit45:latest1 .   
# 5.Running the container
cmd:docker run -p 5001:5001 saireddie45/rohit45:latest1
# 6.Login into docker hub
cmd:docker login
# 7.Push the Image to Docker Hub
cmd:docker push saireddie45/rohit45:latest1
# 8.Pull the Image from Docker Hub
cmd:docker run -it -p 5001:5001 saireddie45/rohit45:latest1
