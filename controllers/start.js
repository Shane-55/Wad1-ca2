'use strict';

//import logger for debug messages and appStore to access app info
import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";

//runs when user accesses the start page
const start = {
  createView(request, response) {
    logger.info("Start page loading");
    
    //data sent to handlebars includes the title and app info from the store
    const viewData = {
      title: "Shark Species Database",
      info: appStore.getAppInfo()
    };
    
    //renders the start view with the data
    response.render('start', viewData);  
     
  },
};

export default start;
