#UI TESTING ASSIGNMENT
Repository which contains the front end Test scripts for Bynder portal.
http://wave-trial.getbynder.com/

SCENARIOS:
1- Positive Login Test
Login with valid cridentials and add url assertion and Login Page web elements assertions 

2- Negative Login Test
Login with Invalid cridentials and add Assertion for the error message thrown.

3- Dashboard UI Test
Verified all the UI Web element visibility for Dashboard page.

4- Logout Test
Verified successful logout happend or not.


**STEP 1 Install Cypress**
Run > npm init
Run > npm install cypress — save-dev
Run > npm install

**STEP 2 Install Cucumber**
Run > npm install — save-dev cypress-cucumber-preprocessor

**STEP 3 Adding depedency and configuration**
Add required depedency in package file and add configurations in config file

**STEP 4 create feature file and step definition block**
/e2e/features/*
/support/step_definitions/*

#DOCKER SETUP
**STEP 1 Install docker**
Install docker based on your OS version.

**STEP 2 Create Docker File in root folder and build**
Create docker file in the root folder and start adding, Pull image, create directory and copy cypress code from host to container.
And build them using 
command >> docker build -t bynderportaltest .

**STEP 3 Run them as container**
Once build is successful docker image is created and test can be executed with required browsers and verify the result in console or docker logs

command >> docker run -i -t bynderportaltest cypress run --spec cypress/e2e/features/* --browser chrome



NOTE: Test scenarios With and Without cucumber is covered.
With cucumber file path:
e2e/features/*
support/step_definitions/*

Without cuccumber file path:
e2e/*
