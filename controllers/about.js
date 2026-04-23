'use strict';

//import logger for debug messages
import logger from "../utils/logger.js";

//runs when user accesses the about page
const about = {
  createView(request, response) {
    logger.info("About page loading");
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
      }
    };
    //renders the about view with the data
    response.render("about", viewData);
  }
};

export default about;