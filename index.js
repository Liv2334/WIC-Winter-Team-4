/*** Searchable Dropdown Filter ***/

const dropdownSearch = document.getElementById('dropdown-search');
const dropdownLinks = document.getElementById('dropdown-links');
const noResults = document.getElementById('no-results');
const locationsDropdown = document.getElementById('locations-dropdown');
const locationsMenu = document.getElementById('locations-menu');
const locationsBtn = document.getElementById('locations-btn');

// Open dropdown and focus search on button click (instead of hover-only)
if (locationsBtn) {
    locationsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = locationsMenu.style.display === 'block';
        locationsMenu.style.display = isOpen ? 'none' : 'block';
        if (!isOpen) {
            setTimeout(() => dropdownSearch && dropdownSearch.focus(), 50);
        }
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (locationsDropdown && !locationsDropdown.contains(e.target)) {
        if (locationsMenu) locationsMenu.style.display = 'none';
        if (dropdownSearch) {
            dropdownSearch.value = '';
            filterDropdown('');
        }
    }
});

// Filter logic
function filterDropdown(query) {
    if (!dropdownLinks) return;
    const links = dropdownLinks.querySelectorAll('a');
    const q = query.toLowerCase().trim();
    let visibleCount = 0;

    links.forEach(link => {
        const name = link.getAttribute('data-name') || link.textContent.toLowerCase();
        const matches = name.includes(q);
        link.style.display = matches ? 'block' : 'none';
        if (matches) visibleCount++;
    });

    if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
}

if (dropdownSearch) {
    dropdownSearch.addEventListener('input', (e) => {
        filterDropdown(e.target.value);
    });

    // Prevent dropdown from closing when clicking the search input
    dropdownSearch.addEventListener('click', (e) => e.stopPropagation());

    // Keep dropdown open while typing
    dropdownSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (locationsMenu) locationsMenu.style.display = 'none';
        dropdownSearch.value = '';
        filterDropdown('');
    }
    if (e.key === 'Enter') {
        const visibleLinks = [...dropdownLinks.querySelectorAll('a')]
            .filter(link => link.style.display !== 'none');
        if (visibleLinks.length === 1) {
            window.location.href = visibleLinks[0].href;
        }
    }
});
}

// Override hover behavior — dropdown now controlled by click only
if (locationsMenu) {
    locationsMenu.style.display = 'none';
    locationsMenu.addEventListener('click', (e) => e.stopPropagation());
}


/*** Theme Toggle & Memory ***/

const themeButton = document.getElementById('theme-button');
const bodyElement = document.body;

const savedTheme = localStorage.getItem('site-theme');

if (savedTheme === 'light') {
    bodyElement.classList.add('light-mode');
    if (themeButton) themeButton.textContent = "Dark Mode";
} else {
    if (themeButton) themeButton.textContent = "Light Mode";
}

if (themeButton) {
    themeButton.addEventListener('click', () => {
        bodyElement.classList.toggle('light-mode');
        if (bodyElement.classList.contains('light-mode')) {
            localStorage.setItem('site-theme', 'light');
            themeButton.textContent = "Dark Mode";
        } else {
            localStorage.setItem('site-theme', 'dark');
            themeButton.textContent = "Light Mode";
        }
    });
}


/*** Scroll Animations ***/

let revealableContainers = document.querySelectorAll(".revealable");

const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let current = revealableContainers[i];
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = current.getBoundingClientRect().top;
        let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

        if (topOfRevealableContainer < windowHeight - revealDistance) {
            current.classList.add("active");
        } else {
            current.classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


/*** Form Handling ***/

const connectForm = document.getElementById('connect-form');
let count = 3;

if (connectForm) {
    const addParticipant = (event) => {

        event.preventDefault();

        const data = new FormData(connectForm);

        fetch(connectForm.action, {
            method: connectForm.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                const name = document.getElementById('name').value;
                const fandom = document.getElementById('fandom').value;

                // Create the new participant paragraph
                const newParticipant = document.createElement('p');
                newParticipant.textContent = "✦ " + name + " from " + fandom + " has connected.";

                // Append it to the list
                const participantsDiv = document.querySelector('.connect-participants');
                participantsDiv.appendChild(newParticipant);

                // Remove the old counter
                const oldCounter = document.getElementById('connect-count');
                if (oldCounter) oldCounter.remove();

                // Increase the count
                count = count + 1;

                // Create and append the new counter
                const newCounter = document.createElement('p');
                newCounter.id = 'connect-count';
                newCounter.style.marginTop = '16px';
                newCounter.style.color = '#a08cff';
                newCounter.style.fontWeight = 'bold';
                newCounter.textContent = "⭐ " + count + " travelers have joined our network!";

                participantsDiv.appendChild(newCounter);

                connectForm.reset();
            } else {
                alert("Oops! There was a problem submitting your form.");
            }
        }).catch(error => {
            alert("Oops! There was a problem submitting your form.");
        });
    }

    connectForm.addEventListener('submit', addParticipant);
}