'use strict';

//import logger for debug messages and sharkStore to access shark data
import logger from "../utils/logger.js";
import sharkStore from "../models/shark-store.js";
import { v4 as uuidv4 } from 'uuid';

const dashboard = {
  //runs when user visits the dashboard page, logs the event and prepares data for rendering
  createView(request, response) {
    logger.info("Dashboard loading");

    //data thats sent to handlebars view, includes list of shark species & title from the store
    const viewData = {
      title: "Shark Dashboard",
      species: sharkStore.getAllSharks()
    };

    //renders the dashboard view with the data
    response.render("dashboard", viewData);
  },
  addCategory(request, response) {
    const newCategory = {
      id: uuidv4(),
      title: request.body.title,
      sharks: [],
    };
    sharkStore.addCategory(newCategory);
    response.redirect('/dashboard');
},

deleteCategory(request, response) {
  const id = request.params.id;
  const category = sharkStore.getShark(id);
  logger.debug('Deleting category ${id}');
  sharkStore.removeCollection("sharkCollection", category);
  response.redirect('/dashboard');


},

search(request, response) {
  const query = request.query.query.toLowerCase();
  const sharkCollection = sharkStore.getAllSharks();
  const filteredCollection = sharkCollection.map(species => {
    const filteredSharks = species.sharks.filter(shark =>
      shark.title.toLowerCase().includes(query)
    );

    return {
      ...species,
      sharks: filteredSharks
    };
  }).filter(species => species.sharks.length > 0);

  const viewDataSearch = {
    title: "Dashboard Search Results",
    species: filteredCollection
  };

  response.render('dashboard', viewDataSearch);
},

}
export default dashboard;

