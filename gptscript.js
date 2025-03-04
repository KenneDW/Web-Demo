document.addEventListener("DOMContentLoaded", function () {
    const splashScreen = document.getElementById("splash-screen");
    const enterButton = document.getElementById("enter-btn");
    const mainContent = document.getElementById("main-content");
    const header = document.querySelector("header");


    // First visit today: Show splash screen
    function showMainContent() {
        splashScreen.style.opacity = "0";

        setTimeout(() => {
            splashScreen.style.display = "none";
            mainContent.classList.add("visible");
            header.classList.add("visible"); // Ensure header appears

            // Store today's date as last visit
            localStorage.setItem("lastVisit", today);
        }, 1000);
    }

    // User clicks "Enter" → fade out splash & fade in main content
    enterButton.addEventListener("click", showMainContent);

});
