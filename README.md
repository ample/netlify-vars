# netlify-vars

This project extracts environment variables from your Netlify site.

This can be helpful if you've got lots of variables defined in the Netlify UI that you'd like to backup and/or sync to your local development environment.

You'll need to create a [personal access token](https://app.netlify.com/user/applications) to grab data from the Netlify API. Once you've got your token, just export that value as an environment variable called `NETLIFY_ACCESS_TOKEN`. You can also pass your token on the command, as shown below).

Install the script...

```
$ npm install ample/netlify-vars -g
```

When calling the script, just pass the name of your Netlify site and it will return the goods to standard-out. You can then pipe that output to a file, if you're feeling frisky.

```
$ NETLIFY_ACCESS_TOKEN=your-token-here netlify-vars <your-site-name>
```
