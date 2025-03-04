document.addEventListener("DOMContentLoaded", function () {
    const splashScreen = document.getElementById("splash-screen");
    const enterButton = document.getElementById("enter-btn");
    const mainContent = document.getElementById("main-content");
    const header = document.querySelector("header");

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    // Check if the user has visited today
    if (localStorage.getItem("lastVisit") === today) {
        // Skip splash screen and show main content immediately
        splashScreen.style.display = "none";
        mainContent.classList.add("visible");
        header.classList.add("visible"); // Ensure header appears
    } else {
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

        // Auto-fade after 3 seconds if no click
        setTimeout(showMainContent, 3000);
    }
});
