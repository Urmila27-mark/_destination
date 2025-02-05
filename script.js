document.addEventListener('DOMContentLoaded', function () {
    // More functionality
    const moreLink = document.getElementById('more');

    moreLink.addEventListener('click', function (e) {
        e.preventDefault();

        const additionalDestinations = ['Safari Adventure', 'Tropical Islands', 'Desert Escape'];
        const dropdown = document.querySelector('.dropdown-menu');

        // Add new destinations to the dropdown
        additionalDestinations.forEach(dest => {
            const newDest = document.createElement('li'); // Create an <li> for each destination
            const newDestLink = document.createElement('a');
            newDestLink.href = '#';
            newDestLink.textContent = dest;
            newDestLink.classList.add('dropdown-item'); // Add the dropdown-item class
            newDest.appendChild(newDestLink);
            dropdown.appendChild(newDest);
        });

        moreLink.style.display = 'none'; // Hide the "More" link after adding new items
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const packageCards = document.querySelectorAll('.card'); // Ensure the correct class is selected for your cards

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();

        packageCards.forEach(card => {
            const packageName = card.querySelector('.card-title').textContent.toLowerCase(); // Get package name from card title

            // Check if the package name matches the query
            card.style.display = packageName.includes(query) ? 'block' : 'none';
        });
    });

    // Package data
    const packages = [
        {
            name: "Beach Gateway",
            price: "$1000",
            duration: "5 days and 4 Nights",
            discount: "20% off",
            hotelBooking: "Included",
            majorAttractions: ["Bali Safari and Marine Park", "Uluwatu Temple", "Sacred Monkey Forest Sanctuary"],
            popularPlaces: ["Kuta Beach", "Nusa Dua", "Seminyak"],
            restaurants: ["Jimbaran Bay Seafood", "Mamasan Bali", "La Lucciola"]
        },
        {
            name: "Mountain Adventure",
            price: "$1500",
            duration: "7 days and 6 Nights",
            discount: "10%",
            hotelBooking: "Not Included",
            majorAttractions: ["Mount Everest Base Camp", "Bhaktapur Durbar Square", "Pashupatinath Temple"],
            popularPlaces: ["Kathmandu", "Pokhara", "Chitwan National Park"],
            restaurants: ["The Rum Doodle", "Madhuban Restaurant", "Thamel House Restaurant"]
        },
        {
            name: "City Life Experience",
            price: "$3000",
            duration: "4 days and 3 Nights",
            discount: "15%",
            hotelBooking: "Included",
            majorAttractions: ["Statue of Liberty", "Central Park", "Times Square"],
            popularPlaces: ["Broadway", "Brooklyn Bridge", "Fifth Avenue"],
            restaurants: ["Le Bernardin", "The Spotted Pig", "Katz's Delicatessen"]
        }
    ];

    // Get "Book Now" buttons and modal body
    const bookNowButtons = document.querySelectorAll('.book-now');
    const modalBody = document.querySelector('#tripDetails');

    // Event listener to populate the modal with the package details
    bookNowButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const package = packages[index];

            modalBody.innerHTML = `
                <p><strong>Price:</strong> ${package.price}</p>
                <p><strong>Duration:</strong> ${package.duration}</p>
                <p><strong>Discount:</strong> ${package.discount}</p>
                <p><strong>Hotel Booking:</strong> ${package.hotelBooking}</p>
                
                <h6><strong>Major Attractions:</strong></h6>
                <ul>
                    ${package.majorAttractions.map(attraction => `<li>${attraction}</li>`).join('')}
                </ul>
                
                <h6><strong>Popular Visiting Places:</strong></h6>
                <ul>
                    ${package.popularPlaces.map(place => `<li>${place}</li>`).join('')}
                </ul>
                
                <h6><strong>Famous Restaurants:</strong></h6>
                <ul>
                    ${package.restaurants.map(restaurant => `<li>${restaurant}</li>`).join('')}
                </ul>
            `;
        });
    });

    // Country Codes Data for the booking form
    const countryCodes = [
        { code: "+1", name: "USA" },
        { code: "+1", name: "Canada" },
        { code: "+52", name: "Mexico" },
        { code: "+852", name: "Hong Kong" },
        { code: "+44", name: "UK" },
        { code: "+33", name: "France" },
        { code: "+49", name: "Germany" },
        { code: "+66", name: "Thailand" },
        { code: "+84", name: "Vietnam" },
        { code: "+91", name: "India" },
        { code: "+27", name: "South Africa" },
        { code: "+61", name: "Australia" },
        { code: "+64", name: "New Zealand" },
        { code: "+971", name: "UAE" },
        { code: "+81", name: "Japan" },
        { code: "+82", name: "South Korea" },
        { code: "+39", name: "Italy" },
        { code: "+30", name: "Greece" },
        { code: "+90", name: "Turkey" },
        { code: "+55", name: "Brazil" },
        { code: "+54", name: "Argentina" },
        { code: "+56", name: "Chile" },
        { code: "+86", name: "China" },
    ];

    // Populate country codes in the form (Prevent duplicate options)
    const countryCodeSelect = document.getElementById('countryCode');
    countryCodes.forEach(country => {
        // Check if the country code is already present in the dropdown
        if (![...countryCodeSelect.options].some(option => option.value === country.code)) {
            const option = document.createElement('option');
            option.value = country.code;
            option.textContent = `${country.name} (${country.code})`;
            countryCodeSelect.appendChild(option);
        }
    });

    // Booking Form Validation
    document.getElementById('bookingForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const phone = document.getElementById('phone').value;
        const birthday = new Date(document.getElementById('birthday').value);
        const age = new Date().getFullYear() - birthday.getFullYear();

        // Validate phone number and age
        if (phone.length !== 10 || isNaN(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }
        if (age < 18) {
            alert("You must be at least 18 years old.");
            return;
        }

        alert("Thanks for your interest! Our tour experts will get back to you shortly.");
    });
});
