// Header Responsive Sidebar Control 
    // Show the sidebar by adding the "active" class
    // (Triggers the CSS transition that slides the sidebar into view)
    function showSidebar() {
        const sidebar = document.querySelector('.sidebar'); // Select sidebar element
        sidebar.classList.add('active'); // Add "active" class → visible
    }
    // Hide the sidebar by removing the "active" class
    // (Triggers the CSS transition that slides the sidebar out of view)
    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar'); // Select sidebar element
        sidebar.classList.remove('active'); // Remove "active" class → hidden
        }



// Toggle dark and light mode
// Get current mode from localStorage
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('themeswitch');

// Enable dark mode
const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

// Disable dark mode
const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.removeItem('darkmode');
}

// Apply dark mode if previously active
if(darkmode === "active") enableDarkmode();

// Toggle on click
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});






