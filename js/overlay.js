// Portfolio website for Jonathan Hubbard (that's me!)
// This file is responsible for handling functionality related to the project overlays


// --------------------- //
//  CONSTANTS & GLOBALS  //
// --------------------- //

const DEBUG = true;


// ----------- //
//  FUNCTIONS  //
// ----------- //

function removeProjectOverlay()
{
  parent.removeProjectOverlay();
}


// ---------------------- //
//  ELEMENT DECLARATIONS  //
// ---------------------- //

const overlayBody = document;


// ------------------ //
//  PROJECT LISTENERS  //
// ------------------ //

overlayBody.addEventListener("click", () => 
  removeProjectOverlay()
);
