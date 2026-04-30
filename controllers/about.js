'use strict';

//import logger for debug messages
import logger from "../utils/logger.js";
import sharkStore from "../models/shark-store.js";
//runs when user accesses the about page
const about = {
  createView(request, response) {
    logger.info("About page loading");

    const sharkCollection = sharkStore.getAllSharks();
    console.log("Shark Collection:", sharkCollection);
    
    const totalSpecies = sharkCollection.length;
    console.log("Total Shark Species:", totalSpecies);
    
    let totalSharks = 0;
    sharkCollection.forEach(species => {
      totalSharks += species.sharks.length;
    });
    console.log("Total Sharks:", totalSharks);

      //author data used in the about view
      const viewData = {
        title: "About Shark Species Database",
        author: {
          name: "Shane",
          fullname: "Shane Harkin",
          created: 2025,
          job: "student",
          city: "waterford",
          email: "shane@email.com",
          phone: "0871234567"
      }, 
      totalSpecies,
      totalSharks,
      totalUsers: 2,
      mostActiveUser: "Shane"
    };
    //renders the about view with the data
    response.render("about", viewData);
  }
};

export default about;