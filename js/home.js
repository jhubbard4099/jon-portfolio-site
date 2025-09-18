// Portfolio website for Jonathan Hubbard (that's me!)
// This file contains functions/listeners specific to the Home page


// ----------- //
//  FUNCTIONS  //
// ----------- //


// ---------------------- //
//  ELEMENT DECLARATIONS  //
// ---------------------- //

const projectCar = document.getElementById("project-car");
const projectRecord = document.getElementById("project-record");
const projectVending = document.getElementById("project-vending");


// ------------------- //
//  PROJECT LISTENERS  //
// ------------------- //

projectCar.addEventListener("click", () => 
  applyProjectOverlay(projectCar.id)
);
projectRecord.addEventListener("click", () => 
  applyProjectOverlay(projectRecord.id)
);
projectVending.addEventListener("click", () => 
  applyProjectOverlay(projectVending.id)
);
