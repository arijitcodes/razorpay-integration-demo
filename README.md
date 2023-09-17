# Razorpay Payment Gateway Integration [ Demo ]

## About Author

Author : [Arijit Banerjee](https://www.github.com/ArijitCodes)

About : Full Stack Web Developer | Cyber Security Enthusiast | Actor

Social Media : &nbsp;
[![Instagram](https://i.ibb.co/4t76vTc/insta-transparent-14px.png) Instagram](https://www.instagram.com/arijit.codes)
&nbsp;
[![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/arijitban)
&nbsp;
[![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/ArijitCodes)
&nbsp;
[![Website](https://i.ibb.co/wCV57xR/Internet-1.png) Website](https://iamarijit.dev)

Email: arijit.codes@gmail.com

<hr>

## Technologies Used

`Technologies Used` : NodeJS, ExpressJS, ReactJS

`Details` : It is a Demo Implementation of the Razorpay Payment Gateway in NodeJS and ReactJS. We are using Node & Express as Backend API Tech. And We have used ReactJS as our frontend for the WebApp.

<hr>

## Setup

<div>

First thing to do is clone this repo, and get into the project folder.

Next, there are two ways this demo can be ran -

- #### Docker
- #### Mannual Node Build and Run using NPM Scripts

But, a primary setup is needed for both. You need to check the .env.sample file and setup the environment variables in your ENV. Or, make a .env file and setup those variables and their values. The two main ENV Variabled you will need are - RAZORPAY_KEY_ID & RAZORPAY_KEY_SECRET.

NOTE:

- If you are running using Docker - it is set to run in Production Mode and on localhost:5000 is the URL you can access the webapp.
- If you are running it manually, then the system will run on Dev Mode (unless you change the NODE_ENV on the ENvironment Variables) and the Frontend can be accessed at localhost:3000 & Backend will be at localhost:5000

<br />

#### Run by Docker

##### Make sure your Docker is running & run the following commands

- Build the Docker Image - `docker build --no-cache -t razorpay-integration-test .`
- Create and Run a Docker Container with ports etc: `docker run -p 5000:5000 --name razorpay-integration-test razorpay-integration-test`

\*\*\* We are mapping internal and external ports both at 5000. Just remember, the internal port needs to be 5000 - as we have set it in ENV Variables (you can change the code if you want to). But you can map the external port to whatever you want.

<br />

#### Run by Mannual Node Scripts

- Create a file named .env in the root. You can use the .env.sample file as a reference for the ENV Variables that are needed for the app.
- Set Up the required Env Variables to be used in the app.
- Run `run npm install` on the root.
- Run `npm start` to start the server.
- Open a new terminal and change directory into the client folder of the repo - `cd <repo_location>/client`, and run `npm install`
- Run `npm start` on both Server and Client folder on two different terminals.

\*\*\* The Frontend will be available at Port 3000, and the backend will be running on Port 5000.

</div>
<hr>
