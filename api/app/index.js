const { askClient } = require('./clients/chatgpt-client');
const { browserClient } = require('./clients/chatgpt-browser');
const { askBing } = require('./clients/bingai');
const titleConvo = require('./titleConvo');
const titleConvoBing = require('./titleConvoBing');
const getCitations = require('../lib/parse/getCitations');
const citeText = require('../lib/parse/citeText');

module.exports = {
  askClient,
  browserClient,
  askBing,
  titleConvo,
  titleConvoBing,
  getCitations,
  citeText
};
