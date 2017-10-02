# Coders Across Disiciplines Website

Website for Coders Across Disiciplines a student orginization at the University
of Texas at Austin.

## Built with

 - [NodeJS][node]
 - [Express][express]
 - [Pug][pug]
 - [Bootstrap][bootstrap]
 - [Less][less]

## Deploying

This [website][cad] currently doesn't have development and productions settings so
everything is constantly in development. Even the current live version (Don't
tell anyone). 

Please install [NodeJS][node] including npm before proceeding. We will also use
[PM2][pm2] to manage the website process. Open a shell and run the following.
```sh
npm install pm2 -g
git clone https://github.com/cadtexas/website cadtexas-website
cd cadtexas-website
npm install
pm2 start --name cadtexas npm -- start
```
Typing pm2 by itself will show you a list of commands. Use these to start and
stop the website when updating nodejs files.

<!-- Links -->
[bootstrap]: http://getbootstrap.com/
[cad]: https://cadtexas.com/
[express]: https://expressjs.com/
[less]: http://lesscss.org/
[node]: https://nodejs.org/
[pm2]: http://pm2.keymetrics.io/
[pug]: https://pugjs.org/
