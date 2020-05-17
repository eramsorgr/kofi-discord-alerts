# Ko-Fi Discord Alerts Server

A simple NodeJS server to accept requests from Ko-Fi Webhook service and translate them into a Discord embed!

# Installation

 - You need NodeJS v12.16.2! Get it [here](https://nodejs.org/en/download/)
 - You need to install the dependecies, to do that open a terminal inside the installation folder and run `npm install`
 - After the installation has complemeted, configure the server by copying the config.template.json, naming it to `config.json` and editing the values inside it.
 - To start the server, run `node server.js`!

 *Check out [pm2](https://www.npmjs.com/package/pm2) or [forever](https://www.npmjs.com/package/forever) to have your server running 24/7!*

 **NOTE** You will require a domain and an SSL certificate to run the service (as of todays webhook API Ko-Fi has)
 
[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Z8Z81PVKJ)