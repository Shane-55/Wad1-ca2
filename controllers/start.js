'use strict';

//import logger for debug messages and appStore to access app info
import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";
import sharkStore from "../models/shark-store.js";

//runs when user accesses the start page
const start = {
  createView(request, response) {
    logger.info("Start page loading");
    
    const sharkCollection = sharkStore.getAllSharks();
    console.log("Shark Collection:", sharkCollection);
    
    const totalSpecies = sharkCollection.length;
    console.log("Total Shark Species:", totalSpecies);

    let totalSharks = 0;
    sharkCollection.forEach(species => {
      totalSharks += species.sharks.length;
    });
    console.log("Total Sharks:", totalSharks);
     
    //data sent to handlebars includes the title and app info from the store
    const viewData = {
      title: "Shark Species Database",
      info: appStore.getAppInfo(),
      totalSpecies, 
      totalSharks
    };
  
    
    //renders the start view with the data
    response.render('start', viewData);  
  },


};

export default start;
