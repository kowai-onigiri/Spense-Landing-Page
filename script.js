const navMenu = document.getElementById('hambug');
const dropMenu = document.getElementById("sidebar");


navMenu.addEventListener('click', function() {
    
    if (dropMenu.style.display === "none") {
        dropMenu.style.display = "block";
    } else {
        dropMenu.style.display = "none";
    }
});