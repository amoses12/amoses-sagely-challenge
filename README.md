# amoses-sagely-challenge

## General Notes for Reviewers

Thank you for taking the time to review this assessment! Here are some general notes about how the project is built, where you'll find pertinent information, and hopefully answer a few questions up front so review goes faster.

### .env

I'm aware that it is terrible practice to commit your environment variables in source control. However, I don't have a direct communication line to pass off needed environment variables so for the sake of ease, I'm including them. There's no sensitive information and everything is dockerized, so there's no security risk for this specific repository.

### Unit Tests

I've included unit tests and stubs for the backend, but there's no business logic on the front end to truly unit test. I understand that you can sort of unit test components, but in my experience it just means that every time a component gets updated (as it should) a unit test update has to follow. And if we're constantly changing our tests, then they don't really show us when we've broken something, only when we've updated something. However if the front end had more business logic, I would include unit tests for those functions.

### Project Architecture

The backend is a dockerized node express app using typescript and typeorm with a postgresql database.
The front end is a react app using create-react-app and uses redux toolkit for state management.

I'm sure the sheer amount of files is overwhelming, but I treated this project as a setup for a project that can be built upon. I feel it's a better demonstration of what a software engineer would be doing day to day. Here's a quick synopsis of the relevent files I'm sure you'll want to look at:

#### /backend

**/src/db** - database.ts houses a configuration for typeorm to connect to a postgres db - lessons-db.ts is the data access layer - seedDB.ts houses a large sql file as a string to seed a local database

**/src/models** - lesson.ts is a typeorm entity/class definition for our data structure

**/src/services** - lesson-service.ts houses the business logic (although there's not much to do here except fetch from the data access layer)

**/src/routers** - lesson.router.ts defines our endpoints

**/src/test** - lessons.seeds.ts houses json objects to return with our mocks/stubs - lessons.stubs.ts contains sinon stubs for testing - lessons.test.ts houses unit tests

The root (/backend) directory houses our main index file as well as docker setup if that's of interest to you

#### /sagely-frontend

All react components consist of a named folder that contains an index.js file and css file

**/src/components** - reusable components. In this case there's one component that shows the detail view for our data

**/src/pages** - page components. In this case, our list page and details page

**/src/slices** - Redux Toolkit slices

**/src/utils** - API. js is our axios client setup

**/store.js** - Redux toolkit store configuration

**/App.js** - Loads our two pages through react-router-dom

**/index.js** - main entrypoint for app

Hopefully everything else is self explanatory or can be ignored for the most part, but these are the pieces that I would probably be looking for if I were reviewing this assignment. Let me know if you have any other questions!

## Running locally

### 1.) Start the backend

    - cd into the backend directory
    - run `npm install`
    - run `docker-compose up --build -d`
        - This create 3 containers. One for our api(localhost:3001), one for our postgres db, and a pgadmin container(localhost:3002) to view the data in the db. The db should be seeded with the content from the provided .csv file if no data exists. There are instructions below on how to connect pgadmin to our postgres db.

### 2.) Start the frontend

It is important that the backend services are up and running before running the front end.

    - cd into the sagely-frontend directory
    - run `npm install`
    - run `npm run start`
    - This should automatically open a browser to localhost:3000

### 3.) Stopping the services

frontend: simple `cmd + c` in the terminal
backend: `cmd + c` in the terminal (if not running in detached mode) followed by `docker-compose down`

## Connecting pgadmin to postgres

    1.) With the backend running, open a browser and navigate to localhost:3002
    2.) Enter the username and password found in the .env under POSTGRES_ADMIN_EMAIL and POSTGRES_ADMIN_PASSWORD (in this case test@test.com and Password1234)
    3.) Click 'Add New Server'
    4.) In the first dialog, add any name you would like to the Name field. Every other field can be left as the default
    5.) In the tabs at the top, click the connection tab.
    6.) Enter the following values for each field:
        - Hostname/Address: host.docker.internal
        - Port: 5432
        - Maintenance database: postgres
        - Username: POSTGRES_USER from .env (in this case 'postgres')
        - Password: POSTGRES_PASSWORD from .env (in this case 'Password1234')
    7.) Click save

## Running unit tests

The backend unit tests can be run by cd'ing into the backend directory and running `npm run test`
