#!/usr/bin/env node

const { getEnv } = require("../index.js");
getEnv({ siteName: process.argv.slice(2)[0] });
