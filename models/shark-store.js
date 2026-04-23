'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const sharkStore = {

  store: new JsonStore('./models/shark-store.json', {sharkCollection: [] }),
  collection: 'sharkCollection',
  array: 'sharks',

  getAllSharks() {
    return this.store.findAll(this.collection);
  },

  getShark(id) {
    return this.store.findOneBy(this.collection, (shark => shark.id === id));
},

  addShark(id, shark) {
    this.store.addItem(this.collection, id, this.array, shark);
  },

  addCategory(category) {
    this.store.addCollection(this.collection, category);
},


};

export default sharkStore;
