'use strict';

import logger from "../utils/logger.js";

const facts = {

  // This function runs when the /facts route is visited
  createView(request, response) {

    logger.info("Facts page loading");

    // Data sent to the Handlebars page
    const viewData = {
      title: "Shark Facts"
    };

    // Render facts.hbs
    response.render("facts", viewData);
  }

};

export default facts;