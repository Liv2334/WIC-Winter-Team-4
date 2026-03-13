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


/*** Form Handling [PLACEHOLDER] ***/
/*** Form Validation [PLACEHOLDER] ***/
/*** Form Handling ***
  Purpose:
  - When the user submits the form, the name and universe they
    entered should be added to the list of participants.
***/

// Step 1: Add your query for the submit button here
const submitBtn = document.getElementById('connect-button');
let count = 3;

const addParticipant = (event) => {
    // Step 2: Write your code to manipulate the DOM here
    event.preventDefault();

    // Get the inputs (ignoring email for privacy as instructed)
    const name = document.getElementById('name').value;
    const fandom = document.getElementById('fandom').value;

    // Create a new <p> element for the participant
    const newParticipant = document.createElement('p');
    newParticipant.textContent = "✦ " + name + " from " + fandom + " has connected.";

    // Find the connect-participants div and append the new element
    const participantsDiv = document.querySelector('.connect-participants');
    participantsDiv.appendChild(newParticipant);

    // --- Counter Logic ---
    
    // Find and remove the old counter
    const oldCounter = document.getElementById('connect-count');
    oldCounter.remove();

    // Add 1 to the count
    count = count + 1;

    // Create a new counter HTML p tag
    const newCounter = document.createElement('p');
    newCounter.id = 'connect-count';
    newCounter.style.marginTop = '16px';
    newCounter.style.color = '#a08cff';
    newCounter.style.fontWeight = 'bold';
    newCounter.textContent = "⭐ " + count + " travelers have joined our network!";

    // Append this counter to the bottom of the participants div
    participantsDiv.appendChild(newCounter);

    // Clear the form after submission
    document.getElementById('connect-form').reset();
}

// Step 3: Add a click event listener to the submit button here
submitBtn.addEventListener('click', addParticipant);

/*** Animations [PLACEHOLDER] ***/
/*** Success Modal [PLACEHOLDER] ***/


