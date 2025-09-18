// Portfolio website for Jonathan Hubbard (that's me!)
// This file contains functions used across the various pages
// TODO: Dark Mode


// --------------------- //
//  CONSTANTS & GLOBALS  //
// --------------------- //

const DEBUG = true;
const DO_ROTATE = true;


// ----------- //
//  FUNCTIONS  //
// ----------- //

function random(min, max) 
{
  return (Math.random())*(max-min+1)+min;
}

function rotateElements(rotateClass, range)
{
  var currentElements = document.getElementsByClassName(rotateClass);

  for(j = 0; j < currentElements.length; j++)
  {
    var currentElement = currentElements[j];
    var angle = random(-range, range-1);
    currentElement.style.rotate = `${angle}deg`;
  }
}

function rotateAllElements()
{
  rotateElements("rotatable", 1);
  rotateElements("project", 4);
  rotateElements("timeline-event", 3);
}

function applyProjectOverlay(projectID)
{
  // Build iframe element to overlay
  const iframe = document.createElement("iframe");
  iframe.id="project-overlay";
  iframe.src=`/html/projects/${projectID}.html`;
  iframe.height="100%";
  iframe.width="100%";
  iframe.frameBorder="0";

  // Apply the overlay
  document.body.appendChild(iframe);
}

// TODO: Only remove when clicking the background
function removeProjectOverlay()
{
  if (DEBUG) console.log("removing overlay...");
  document.getElementById("project-overlay").remove();
}

if(DO_ROTATE) rotateAllElements();
