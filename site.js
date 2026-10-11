// AUSSS School Website - Main JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Update the footer year automatically
    const yearElements = document.querySelectorAll("#year, .current-year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    // Mobile navigation menu
    const menuButton = document.querySelector(
        ".menu-toggle, #menu-toggle, .nav-toggle"
    );

    const navigation = document.querySelector(
        ".nav-links, #nav-links, .navigation-links"
    );

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            const isExpanded =
                menuButton.getAttribute("aria-expanded") === "true";

            menuButton.setAttribute("aria-expanded", String(!isExpanded));
            navigation.classList.toggle("active");
        });

        // Close the menu after selecting a link
        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Highlight the current page in the navigation
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("nav a, .nav-links a").forEach(function (link) {
        const linkPage = link.getAttribute("href");

        if (linkPage && linkPage.split("#")[0] === currentPage) {
            link.classList.add("current-page");
        }
    });

    // Display a friendly message when a contact form is submitted
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert(
                "Thank you for contacting AUSSS! " +
                "Please contact the school directly if your message is urgent."
            );
        });
    }

});
