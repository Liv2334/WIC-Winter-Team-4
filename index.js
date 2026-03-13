/*** Dark Mode ***
  Purpose:
  - Use this starter code to add a dark mode feature to your website.
***/


// 1. Find the button and the body
const themeButton = document.getElementById('theme-button');
const bodyElement = document.body;

// 2. Add an "Event Listener" (wait for a click)
themeButton.addEventListener('click', () => {
    // 3. Toggle the 'light-mode' class
    bodyElement.classList.toggle('light-mode');
    
    // 4. Optional: Change the button text
    if (bodyElement.classList.contains('light-mode')) {
        themeButton.textContent = "Toggle Theme";
    } else {
        themeButton.textContent = "Toggle Theme";
    }
});



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