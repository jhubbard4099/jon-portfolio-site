// Portfolio website for Jonathan Hubbard (that's me!)
// This file contains functions/listeners specific to the Projects page


// --------------------- //
//  CONSTANTS & GLOBALS  //
// --------------------- //

var lastProjectType = "";


// ----------- //
//  FUNCTIONS  //
// ----------- //

// TODO: Add animations for adding/removing cards
function filterProjects(projectType)
{
  var allProjects = document.getElementById("projects").children;
  if (DEBUG) console.log(allProjects);

  console.log(projectType);
  console.log(lastProjectType);
  if(projectType !== lastProjectType)
  {
    for(var i = 0; i < allProjects.length; i++)
    {
      var currentProject = allProjects[i];
      console.log(`checking ${currentProject}`)

      if(currentProject.classList.value.includes(projectType))
      {
        currentProject.setAttribute("style", "display:block")
      }
      else
      {
        currentProject.setAttribute("style", "display:none")
      }
    }

    if(DO_ROTATE) rotateElements("project", 4);
  }

  lastProjectType = projectType;
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

const buttonAll = document.getElementById("button-all");
const buttonHardware = document.getElementById("button-hardware");
const buttonSoftware = document.getElementById("button-software");
const buttonWeb = document.getElementById("button-web");
const buttonGame = document.getElementById("button-game");


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
projectCheckers.addEventListener("click", () => 
  applyProjectOverlay(projectCheckers.id)
);
projectButton.addEventListener("click", () => 
  applyProjectOverlay(projectButton.id)
);
projectPortfolio.addEventListener("click", () => 
  applyProjectOverlay(projectPortfolio.id)
);


// ------------------ //
//  BUTTON LISTENERS  //
// ------------------ //

buttonAll.addEventListener("click", () => 
  filterProjects("project")
);
buttonHardware.addEventListener("click", () => 
  filterProjects("hardware")
);
buttonSoftware.addEventListener("click", () => 
  filterProjects("software")
);
buttonWeb.addEventListener("click", () => 
  filterProjects("web-dev")
);
buttonGame.addEventListener("click", () => 
  filterProjects("game-dev")
);

