/*
 * AUSSS Graduating Class Gallery
 * Displays class photos and their entrance-examination years.
 *
 * Add your approved class photos to the images folder.
 */

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("graduating-gallery");

    if (!gallery) return;

    const graduatingClasses = [
        {
            year: "2025",
            image: "images/class-2025.jpg",
            alt: "AUSSS graduating class of 2025"
        },
        {
            year: "2026",
            image: "images/class-2026.jpg",
            alt: "AUSSS graduating class of 2026"
        },
        {
            year: "2027",
            image: "images/class-2027.jpg",
            alt: "AUSSS graduating class of 2027"
        }
    ];

    graduatingClasses.forEach(function (item) {
        const card = document.createElement("article");
        card.className = "graduating-card";

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.alt;
        image.loading = "lazy";

        image.onerror = function () {
            card.classList.add("image-not-available");
            image.hidden = true;

            const placeholder = document.createElement("p");
            placeholder.textContent = "Class photo will be added soon.";
            card.appendChild(placeholder);
        };

        const heading = document.createElement("h3");
        heading.textContent = "Graduating Class of " + item.year;

        const caption = document.createElement("p");
        caption.textContent =
            "Entrance examination year: " + item.year;

        card.appendChild(image);
        card.appendChild(heading);
        card.appendChild(caption);

        gallery.appendChild(card);
    });
});
