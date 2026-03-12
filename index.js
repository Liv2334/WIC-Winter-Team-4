/*** Dark Mode ***
  Purpose:
  - Use this starter code to add a dark mode feature to your website.
***/


// Step 1: Select the theme button
const themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code here
    // This section will run whenever the button is clicked
    document.body.classList.toggle("dark-mode");
}


// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);



/*** Form Handling [PLACEHOLDER] ***/
/*** Form Validation [PLACEHOLDER] ***/
/*** Animations [PLACEHOLDER] ***/
/*** Success Modal [PLACEHOLDER] ***/


/*** Scroll Animations ***
  Purpose:
  - Use this starter code to add scroll animations to your website.
***/


// Step 1: Select all elements with the class 'revealable'.
let revealableContainers = document.querySelectorAll(".revealable");


// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let current = revealableContainers[i];


        // Get current height of container and window
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = current.getBoundingClientRect().top;
        let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);


        // If the container is within range, add the 'active' class to reveal
        if (topOfRevealableContainer < windowHeight - revealDistance) {
            current.classList.add("active");
        }
        // If the container is not within range, hide it by removing the 'active' class
        else {
            current.classList.remove("active");
        }
    }
}


// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener("scroll", reveal);