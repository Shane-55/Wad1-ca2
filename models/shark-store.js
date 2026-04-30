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

  removeShark(id, sharkId) {
    this.store.removeItem(this.collection, id, this.array, sharkId);
  },

  removeCollection(collection, category) {
    this.store.removeCollection(collection, category);
  },

  editItem(orderId, sharkId, updatedShark) {
    this.store.editItem(this.collection, orderId, sharkId, this.array, updatedShark);
  },

  search(searchTerm) {
    return this.store.findBy(
      this.collection, 
      (shark) => { species.toLowerCase().includes(searchTerm.toLowerCase()) }
    );
  }


};

export default sharkStore;
