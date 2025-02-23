// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get references to DOM elements
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const clearButton = document.getElementById("clear-button");
    const recommendationsDiv = document.getElementById("recommendations");

    // Check if elements exist before adding event listeners
    if (!searchInput || !searchButton || !clearButton || !recommendationsDiv) {
        console.error("One or more elements not found in DOM!");
        return;
    }

    // Load travel recommendations JSON
    fetch("travel_recommendation_api.json")
        .then(response => response.json())
        .then(data => {
            console.log("Fetched travel data:", data);

            // Event listener for search
            searchButton.addEventListener("click", function () {
                const query = searchInput.value.trim().toLowerCase();
                filterResults(query, data);
            });

            // Clear button functionality
            clearButton.addEventListener("click", function () {
                searchInput.value = "";
                recommendationsDiv.innerHTML = "";
            });
        })
        .catch(error => console.error("Error fetching data:", error));


        
    // Function to filter and display recommendations
    function filterResults(query, data) {
        recommendationsDiv.innerHTML = ""; // Clear previous results
    
        let results = [];
    
        if (query.includes("beach")) {
            results = data.beaches;
        } else if (query.includes("temple")) {
            results = data.temples;
        } else {
            results = data.countries
                .filter(country => country.name.toLowerCase().includes(query))
                .flatMap(country => country.cities);
        }
    
        if (results.length > 0) {
            results.slice(0, 2).forEach(place => {
                const recommendationContainer = document.createElement("div");
                recommendationContainer.classList.add("recommendation-container"); // CSS class for positioning
                
                // Create image element
                const imageElement = document.createElement("img");
                imageElement.src = `images/${place.imageUrl}`;
                imageElement.alt = place.name;
                imageElement.classList.add("recommendation-image");
    
                // Create text container
                const textContainer = document.createElement("div");
                textContainer.classList.add("recommendation-text");
                textContainer.innerHTML = `
                    <h3>${place.name}</h3>
                    <p>${place.description}</p>
                    <button class="visit-btn">Visit</button>
                `;
    
                // Append elements
                recommendationContainer.appendChild(imageElement);
                recommendationContainer.appendChild(textContainer);
                recommendationsDiv.appendChild(recommendationContainer);
            });
        } else {
            recommendationsDiv.innerHTML = "<p>No results found. Try another keyword.</p>";
        }
    }
    
});
