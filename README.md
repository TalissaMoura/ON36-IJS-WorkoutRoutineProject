# ON36-IJS-WorkoutRoutineProject

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/TalissaMoura/ON36-IJS-WorkoutRoutineProject/deploy.yml)
![GitHub last commit](https://img.shields.io/github/last-commit/TalissaMoura/ON36-IJS-WorkoutRoutineProject)
![GitHub package.json version](https://img.shields.io/github/package-json/v/TalissaMoura/ON36-IJS-WorkoutRoutineProject)
<img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nestjs.svg" />
<img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/amazonwebservices.svg" />
<img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/docker.svg" />
<img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlegemini.svg" />
<img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/langchain.svg" />

This project uses the NestJS and LangChain frameworks to construct an API that indicates workout routines based on 
user inputs ("city","gender","is_on_period","begineer","height","weight","goal","age") and weather conditions in the city. 


## Endpoints
 The project is live at "http://54.198.70.246/". The endpoints are:
 - GET exercise-routine/health: Return an object to indicate if the application is health.
 - GET exercise-routine/: Get all the saved exercises routines in Database.
 - GET exercise-routine/<uuid>: Return just the exercise routine for this <uuid>
 - POST exercise-routine: Generates a new exercise-routine and save in database.
    - Body params: {"city","gender","on_period","begineer","height","weight","goal","age"}


## How to run this project locally?
 1. Setup environment variables: For development you will need to have the .env file with api keys and database credentials.
    - Api keys: get the [weather api](https://www.weatherapi.com/) key and [google gemini](https://aistudio.google.com/) key to generate the exercise routine prompt.
    - Database credentials: For this project, we are using the [RDS Postgres instance](). If you want to setup a new 
    database, edit the docker-compose file. 
        > Pay attention with [RDS database](https://aws.amazon.com/rds/): if you choose this, you need to generate a rds-ca-cert.pem file. Run the command: "openssl req -x509 -newkey rsa:4096 -keyout ca-key.pem -out ca-cert.pem -days 365 -nodes -subj "/CN=localhost""
 
 2. After all this been done, run the command `npm install` e `docker-compose up nestjs-app-dev`

 ## How to prepare this project for production?
 1. Setup the EC2: Go to [EC2](https://aws.amazon.com/ec2/) and if needed it create a new instance. When launch the new instance generate as ED25519 and download the .pem key pair file, also, if you are using RDS, don't forget to connect your EC2 machine with RDS.
 2. In EC2, you will need to create a ˜./update_container.sh script that pulls the image from docker hub and construct a simple docker_compose for production and run the 
 container. A template for this is at ./template_task_for_ec2.sh
 3. After you done this, go to your github settings and add new secrets: EC2_HOST, EC2_USER, EC2_PRIVATE_KEY, DOCKER_HUB_USERNAME, DOCKER_HUB_ACESS_TOKEN and DOCKER_PASSWORD. Pay attention, in the .github/workflow to change the docker image for the correct docker_hub repo.
 4. Finaly, when you give a merge in the main, the github workflow will run and deploy your project in a EC2 instance o/. 

 ## Futher improvements
 - Remove Typeorm and use only the AWS SDK.
 - Add Swagger. 
 - Add tests.
