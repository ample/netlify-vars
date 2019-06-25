const fetch = require("node-fetch");
const fs = require("fs");

async function getSiteByName(siteName, netlifyApiToken) {
  const url = `https://api.netlify.com/api/v1/sites?filter=all`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${netlifyApiToken}`
    }
  });
  const data = await response.json();
  if (response.status === 422) {
    throw new Error(data.error);
  }
  return data.filter(site => site.name == siteName)[0];
}

async function getEnv({
  siteName = undefined,
  accessToken = process.env.NETLIFY_ACCESS_TOKEN
}) {
  if (!siteName) throw "siteName undefined";
  try {
    const site = await getSiteByName(siteName, accessToken);
    if (!site) throw `Could not find site ${siteName}`;
    for (let [key, value] of Object.entries(site.build_settings.env)) {
      console.log(`${key}=${value}`);
    }
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  getEnv: getEnv,
  getSiteByName: getSiteByName
};
