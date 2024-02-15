const express = require('express');
const glob = require('glob');

const route = express.Router();

const getAutoRouted = (cwd) =>
  glob
    .sync('./routes/**/*.js', { cwd })
    .map((x) => x.replaceAll(/.js$/g, ''))
    .map((x) => ({
      path: x,
      route: x.replaceAll(/^.\/routes/g, ''),
    }));

const routeData = getAutoRouted(__dirname);
routeData.forEach((x) => {
  const req = require(x.path);
  if (typeof req === 'function') {
    route.use(x.route, req);
  }
});

module.exports = route;
