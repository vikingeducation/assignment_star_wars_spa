# Star Wars Encyclopedia

## Introduction
The Star Wars Encyclopedia is a simple encyclopedia that uses the Star Wars API to populate a single page application. 

## Technologies Used
React/Redux is the primary workhorse for this project. In addition, react-router is leveraged to provide a fast single page application.

## Getting Started
To run this locally, simply clone the repository, install dependencies with `yarn`/`npm install`, then launch the project with `yarn start`/`npm start`.

## Deployment Link
A deployed version of this project may be found [here.](http://sassy-spoon.surge.sh/)

## Additional Notes
In the beginning of the project, I was caught between wanting to create a catch-all resource container/component with some conditional logic to grab the appropriate fields for each resource, and creating individual containers/components for each resource (films, planets, etc.). I opted to go with the latter to see how it would work. In the end this became more trouble and work than it was worth. Looking back at this project, if I were to do it over again, I would have gone with the former approach, and found ways to use a configuration file/helper to filter through the data appropriately.