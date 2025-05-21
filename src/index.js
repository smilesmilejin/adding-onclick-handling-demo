// // make a function to run when it occurs
// const addCrab = () => {
//   // Create a span element that will contain our new crab
//   const newCrab = document.createElement('span');
//   const crabContainer = document.querySelector('#crabContainer');
//   newCrab.textContent = '🦀';
//   crabContainer.appendChild(newCrab);
// };

// // Select the HTML elemtn the event will occur on
// const registerEventHandlers = () => {
//   const crabButton = document.querySelector('#addCrabButton');
//   crabButton.addEventListener('click', addCrab);
// };

// // Register that fucntion as 'even listener'
// document.addEventListener('DOMContentLoaded', registerEventHandlers);


// The Event Object
// When we introduced the addEventListener function, 
// we mentioned that the event-handling callback function we passed in 
// could accept an event argument.

const addCrab = (event) => {
  console.log('in addCrab:', event);
  // ... other addCrab functionality
    // Create a span element that will contain our new crab
  const newCrab = document.createElement('span');
  const crabContainer = document.querySelector('#crabContainer');
  newCrab.textContent = '🦀';
  crabContainer.appendChild(newCrab);
};

const registerEventHandlers = (event) => {
  console.log('in registerEventHandlers:', event);
  const crabButton = document.querySelector('#addCrabButton');
  crabButton.addEventListener('click', addCrab);
};

// Register that fucntion as 'even listener'
document.addEventListener('DOMContentLoaded', registerEventHandlers);