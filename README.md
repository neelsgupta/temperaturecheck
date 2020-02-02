Temperature-Check-Application
============

# Prerequisites

- nodejs 10.x or higher

# Build

- Build it and install all dependencies by running the following command `npm init -y`
  
# Run locally
- To run it locally please use below command `npm i --save-dev serverless-offline`:
- locally application runs on url : *http://localhost:3000/*

# Run on AWS cloud (using api-gateway & lambda)
- set AWS_ACCESS_KEY_ID=your-key-here
- set AWS_SECRET_ACCESS_KEY=your-secret-key-here
- deploy it using below command to aws: `sls deploy`

# Access the application using below url:
- /currenttempincovilha : to provide current temperature in Covilha, Portugal with current date and time.
-- https://bc906j0snk.execute-api.us-east-1.amazonaws.com/dev/currenttempincovilha

- /avgtempinsfax : to provide avg temperature of sfax.
-- https://bc906j0snk.execute-api.us-east-1.amazonaws.com/dev/avgtempinsfax