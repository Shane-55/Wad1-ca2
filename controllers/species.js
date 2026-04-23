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

    //data thats sent to handlebars, includeds shark details & title
    const viewData = {
      title: "species Details",
      order: order
    };

    //renders the species view with the data
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

};

export default species;