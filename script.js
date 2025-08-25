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
function toggleDarkLightMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}



