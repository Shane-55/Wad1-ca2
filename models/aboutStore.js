'use strict';

import logger from '../utils/logger.js';
import JsonStore from '../json-store.js';

const aboutInfo = {

  store: new JsonStore('../models/about-info.json', { author: {} }),
  collection: 'author',

  getAuthorInfo() {
    return this.store.findAll(this.collection);
  },

};

export default aboutInfo;
