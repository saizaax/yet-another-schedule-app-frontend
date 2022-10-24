# Frontend — Yet Another Schedule App

[![React.js](https://img.shields.io/badge/React.js-282C34?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?logo=docker&logoColor=white)](https://www.docker.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)](https://github.com/features/actions)

### Run develop build

* Download [Node.js](https://nodejs.org/en/download/)

* Clone this repository
    ```bash
    git clone https://github.com/saizaax/yet-another-schedule-app-frontend
    ```

* Open terminal and navigate to repository directory
    ```bash
    cd yet-another-schedule-app-frontend
    ```

* Install the packages required for the project
    ```bash
    npm i
    ```

* Start the project with npm
    ```bash
    npm run dev
    ```

* Open in web-browser
    ```bash
    http://localhost:3000/
    ```

<br>

### Build

* Open terminal and navigate to repository directory
    ```bash
    cd yet-another-schedule-app-frontend
    ```

* Install the packages required for the project
    ```bash
    npm i
    ```

* Make production build with npm
    ```bash
    npm run build
    ```

<br>

### Run in Docker container

* Download & Install [Docker / Docker Desktop](https://www.docker.com/products/docker-desktop)

* Open terminal and navigate to repository directory
    ```bash
    cd yet-another-schedule-app-frontend
    ```

* Build Docker image
    ```bash
    docker build -f Dockerfile -t yet-another-schedule-app-frontend .
    ```

* Run Docker container
    ```bash
    docker run -d -p 80:80 --name yet-another-schedule-app-frontend yet-another-schedule-app-frontend
    ```

* Open in web-browser
    ```bash
    http://localhost:80/
    ```