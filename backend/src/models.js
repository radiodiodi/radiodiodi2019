const monk = require('monk');
const utils = require('./utils');

const statsDatabaseURL = `${process.env.MONGODB_HOST}/${process.env.MONGODB_STATS_DB}`;
const shoutboxDatabaseURL = `${process.env.MONGODB_HOST}/${process.env.MONGODB_SHOUTBOX_DB}`;
const registrationsDatabaseURL = `${process.env.MONGODB_HOST}/${process.env.MONGODB_REGISTRATION_DB}`;

utils.info(`Mongo stats DB: ${statsDatabaseURL}`);
const statsDB = monk(statsDatabaseURL);
statsDB.then(() => {
  utils.info('Statistics database connected successfully.');
}).catch(err => {
  utils.error(err);
});

const listeners = statsDB.get('listeners');
const nowPlaying = statsDB.get('now_playing');

utils.info(`Mongo shoutbox DB: ${shoutboxDatabaseURL}`);
const shoutboxDB = monk(shoutboxDatabaseURL);
shoutboxDB.then(() => {
  utils.info('Shoutbox database connected successfully.');
}).catch(err => {
  utils.error(err);
});

const messages = shoutboxDB.get('messages');
const bans = shoutboxDB.get('bans');
const reserved = shoutboxDB.get('reserved');

utils.info(`Mongo registration DB: ${registrationsDatabaseURL}`);
const registrationDB = monk(registrationsDatabaseURL);
registrationDB.then(() => {
  utils.info('Registration database connected successfully.');
}).catch(err => {
  utils.error(err);
});

const registrations = registrationDB.get('registrations');

module.exports = {
  listeners,
  nowPlaying,
  messages,
  bans,
  reserved,
  registrations,
};
