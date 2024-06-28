# finn-pokerhanden

# Local Development Setup

## Server Setup

1. **Start Docker Desktop**: Ensure Docker Desktop is running on your machine.

2. **Start the Server**: - Navigate to the server directory:
   `cd server` - Pull the latest MongoDB Community Server Docker image:
   `docker pull mongodb/mongodb-community-server:latest` - Start the services defined in `docker-compose.yml` file:
   `docker-compose up`

## Client Setup

1. **Install Dependencies**: Navigate to the client directory and install the necessary npm packages.
   `npm install`

2. **Start the Client**:
   `npm run start`
