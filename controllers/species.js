'use strict';

//import sharkStore to access shark data and logger for debug messages
import sharkStore from "../models/shark-store.js";
import logger from "../utils/logger.js";
import { v4 as uuidv4 } from 'uuid';

//runs when user accesses the species in dashboard
const species = {
  createView(request, response) {

    //gets id of the shark from the url
    const sharkId = request.params.id;
    logger.info("shark id = " + sharkId);

    //finds the shark in the store using the id
    const order = sharkStore.getShark(sharkId);

    const speciesId = request.params.id;
  const orderData = sharkStore.getShark(speciesId);

  let sharks = orderData.sharks;

  const sortField = request.query.sort;
  const orderSort = request.query.order === 'desc' ? -1 : 1;

  if (sortField) {
    sharks = sharks.slice().sort((a, b) => {

      if (sortField === "title") {
        return a.title.localeCompare(b.title) * orderSort;
      }

      if (sortField === "length") {
        return ( parseFloat(a.length) - parseFloat(b.length)) * orderSort;
}

      return 0;
    });
  }

  const viewData = {
    title: "species Details",
      orderSort,
    title: "Species Details",
    order: {
      ...orderData,
      sharks
    },
    titleSelected: request.query.sort === "title",
    lengthSelected: request.query.sort === "length",
    ascSelected: request.query.order === "asc",
    descSelected: request.query.order === "desc"
  };

  response.render("species", viewData);

  },

  addShark(request, response) {
    const sharkId = request.params.id;
    const species = sharkStore.getShark(sharkId);
    const newShark = {
      id: uuidv4(),
      title: request.body.title,
      length: request.body.length,
    };
    sharkStore.addShark(sharkId, newShark);
    response.redirect('/species/' + sharkId);
  },

  deleteShark(request, response) {
    const orderId = request.params.id;
    const sharkId = request.params.sharkId;
    sharkStore.removeShark(orderId, sharkId);
    response.redirect('/species/' + orderId);
  },

  editShark(request, response) {
    const speciesId = request.params.id;
    const sharkId = request.params.sharkId;
    const species = sharkStore.getShark(speciesId);
  const shark = species.sharks.find(s => s.id === sharkId);

  response.render('editShark', {
    title: "Edit Shark",
    species,
    shark
    });
  },

updateShark(request, response) {  
  const speciesId = request.params.id;
  const sharkId = request.params.sharkId;
  const updatedShark = {
    id: sharkId,
    title: request.body.title,
    length: request.body.length
  };

  sharkStore.editItem(speciesId, sharkId, updatedShark);

  response.redirect('/species/' + speciesId);
},
}
;

export default species;