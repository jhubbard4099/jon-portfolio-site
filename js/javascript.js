// Portfolio website for Jonathan Hubbard (that's me!)
// TODO: Dark Mode


// --------------------- //
//  CONSTANTS & GLOBALS  //
// --------------------- //

const DEBUG = true;


// ----------- //
//  FUNCTIONS  //
// ----------- //

function applyProjectOverlay(projectID)
{
  // Build iframe element to overlay
  const iframe = document.createElement("iframe");
  iframe.id="project-overlay";
  iframe.src=`/html/projects/${projectID}.html`;
  iframe.height="100%";
  iframe.width="100%";

  // Apply the overlay
  document.body.appendChild(iframe);
}

// TODO: Only remove when clicking the background
function removeProjectOverlay()
{
  console.log("removing overlay...");
  document.getElementById("project-overlay").remove();
}


// ---------------------- //
//  ELEMENT DECLARATIONS  //
// ---------------------- //

const projectCar = document.getElementById("project-car");
const projectRecord = document.getElementById("project-record");
const projectVending = document.getElementById("project-vending");
const projectCheckers = document.getElementById("project-checkers");
const projectButton = document.getElementById("project-button");
const projectPortfolio = document.getElementById("project-portfolio");


// ------------------ //
//  PROJECT LISTENERS  //
// ------------------ //

projectCar.addEventListener("click", () => 
  applyProjectOverlay(projectCar.id)
);
projectRecord.addEventListener("click", () => 
  applyProjectOverlay(projectRecord.id)
);
projectVending.addEventListener("click", () => 
  applyProjectOverlay(projectVending.id)
);
projectCheckers.addEventListener("click", () => 
  applyProjectOverlay(projectCheckers.id)
);
projectButton.addEventListener("click", () => 
  applyProjectOverlay(projectButton.id)
);
projectPortfolio.addEventListener("click", () => 
  applyProjectOverlay(projectPortfolio.id)
);
