
    document.addEventListener("DOMContentLoaded", function () {
        // Smooth scrolling for the back-to-top button
        const scrollToTopBtn = document.querySelector(".flecha-arriba");
        
        if (scrollToTopBtn) {
            scrollToTopBtn.addEventListener("click", function (event) {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }
    
        // Mobile menu toggle
        const menuToggle = document.getElementById("menu-toggle");
        const navLinks = document.querySelector(".nav-links");
    
        menuToggle.addEventListener("change", function () {
            navLinks.style.display = this.checked ? "block" : "none";
        });
    
        // Destination filtering
        const destinations = document.querySelectorAll(".destination");
    
        function filterDestinations(country) {
            destinations.forEach(dest => {
                dest.style.display = dest.classList.contains(country) || country === "all" ? "block" : "none";
            });
        }
    
        // Example: Add a dropdown filter
        const filterContainer = document.createElement("div");
        filterContainer.innerHTML = `
            <label for="destination-filter">Filtrar por país:</label>
            <select id="destination-filter">
                <option value="all">Todos</option>
                <option value="france">Francia</option>
                <option value="uk">Reino Unido isla</option>
                <option value="italy">Italia</option>
                <option value="zurich">Suiza</option>
                 <option value="london">London</option>
            </select>
        `;
        document.querySelector(".destinations").prepend(filterContainer);
    
        document.getElementById("destination-filter").addEventListener("change", function () {
            filterDestinations(this.value);
        });
    });