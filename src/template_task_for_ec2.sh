## Setup the env variables 
## export DATABASE_USER=<USERNAME>

# Pull the latest image
## docker pull <IMAGENAME>

# Create or update the docker-compose.yml file
## Exemple for production
# cat << EOF > ~/docker-compose.yml
# services:
#   nestjs-app-prod:
#     image: talissamoura/workout-routine-project:latest
#     ports:
#       - "80:3000"
#     environment:
#       NODE_ENV: production
#       DATABASE_HOST: ${DATABASE_HOST}
#       DATABASE_PORT: 5432
#       DATABASE_USER: ${DATABASE_USER}
#       DATABASE_PASSWORD: ${DATABASE_PASSWORD}
#       DATABASE_NAME: ${DATABASE_NAME}
#       TYPEORM_SYNCHRONIZE: 'false'
#       GEMINI_API_KEY: ${GEMINI_API_KEY}
#       WEATHER_API_KEY: ${WEATHER_API_KEY}
# EOF

# Stop the existing containers and remove them
## docker-compose -f ~/docker-compose.yml down

# Start the new container
## docker-compose -f ~/docker-compose.yml up -d