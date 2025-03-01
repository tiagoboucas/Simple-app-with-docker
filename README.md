# Simple-app-with-docker

## Theme Picker Application

The application consists of 2 separate services: frontend (UI) and backend (API). A service is an app that can be shipped as an independent docker container.

You need to have Docker installed on your machine.

### Build command:

`docker-compose up --build`

This command will build the necessary Docker images for the backend and frontend services, and then start containers for both services. The backend service will be accessible on port 4000, and the frontend service will be accessible on port 3000.

### Running Services Separately

You can also execute each service separately. For instructions on how to do this, please refer to the README files inside the frontend and backend directories respectively.
