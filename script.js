// Run when page loads
window.onload = function() {
    showSection("home"); // Default to home
};

// Function to show only the selected section
function showSection(id) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = "none";
    });

    // Show the clicked one
    document.getElementById(id).style.display = "block";

    // Highlight active navbar link
    document.querySelectorAll('.menu ul li a').forEach(link => {
        link.classList.remove("active");
    });
    document.querySelector(`.menu ul li a[href="#${id}"]`).classList.add("active");
}

// Attach click event to menu links
document.querySelectorAll('.menu ul li a').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // Stop default jump
        let sectionId = this.getAttribute("href").substring(1); // remove #
        showSection(sectionId);
    });
});
