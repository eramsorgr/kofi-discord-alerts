# Ko-Fi Discord Alerts Server

A simple NodeJS server to accept requests from Ko-Fi Webhook service and translate them into a Discord embed!

[![GitHub issues](https://img.shields.io/github/issues/EramsorGR/kofi-discord-alerts)](https://github.com/EramsorGR/kofi-discord-alerts/issues)
[![GitHub license](https://img.shields.io/github/license/EramsorGR/kofi-discord-alerts)](https://github.com/EramsorGR/kofi-discord-alerts/blob/master/LICENSE)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/EramsorGR/kofi-discord-alerts.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/EramsorGR/kofi-discord-alerts/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/EramsorGR/kofi-discord-alerts.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/EramsorGR/kofi-discord-alerts/context:javascript)

# Installation

 - You need NodeJS v12.16.2! Get it [here](https://nodejs.org/en/download/)
 - You need to install the dependecies, to do that open a terminal inside the installation folder and run `npm install`
 - After the installation has complemeted, configure the server by copying the config.template.json, naming it to `config.json` and editing the values inside it.
 - To start the server, run `node server.js`!

 *Check out [pm2](https://www.npmjs.com/package/pm2) or [forever](https://www.npmjs.com/package/forever) to have your server running 24/7!*

 You can optionally use CloudFlare or simply your server IP address, for instance http://123.456.789:SERVERPORTHERE/post as the webhook link and it will work like a charm!

 Check out Glitch.com if you would like your server to be hosted for free rather than paying for VPS or Dedicated server!

# Usage

 Go to https://ko-fi.com/manage/webhooks and enter your server IP/domain and add `/post` to the end. For example, `http://example.com/post`, hit **Update** and you are ready to roll! As long as your server is running, you will receive notifications automatically to the webhook you have provided in the configuration file! Enjoy :)



# Issues and Contributors

Feel free to submit issues, ideas and others as well as contribute to the project! 
 
[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Z8Z81PVKJ)