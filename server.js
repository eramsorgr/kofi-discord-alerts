/*
================================================================================
    MIT License

    Copyright (c) 2020 Nicholas S.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.


================================================================================


    For support, issues and more check my github here: https://github.com/EramsorGR/kofi-discord-alerts
    Support me on Ko-Fi here: https://ko-fi.com/eramsorgr 

    Please excuse junky or undocumented code!
    Made with <3 from Greece
*/


//Calling out modules
const express = require("express");
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const { Webhook, MessageBuilder } = require('discord-webhook-node');
const config = require('./config.json');

if(!config) {
    console.error('Config file not found.');
    process.exit(1);
};
if(!config.webhook_link || !config.server_port) {
    console.error('Config file missing items. Please regenerate');
    process.exit(1);
};

const webhook = new Webhook(config.webhook_link); //Declaring the Webhook here

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', async function(req, res) {
    res.json({message: "Ko-Fi Server is online!"});
    return;
  });

const httpServer = http.createServer(app); //Setting up the server
httpServer.listen(config.server_port, function() {
  console.log(`Ko-Fi Server online`);
});