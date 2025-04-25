document.addEventListener('DOMContentLoaded', function() {
    // App data
    const apps = [
        { name: "Rummy Master", bonus: "₹51", withdrawal: "₹100", tag: "safe", badge: "popular", featured: true },
        { name: "Rummy Bharath", bonus: "₹41", withdrawal: "₹200", tag: "safe", badge: "", featured: true },
        { name: "Rummy Noble", bonus: "₹100", withdrawal: "₹300", tag: "safe", badge: "", featured: true },
        { name: "Rummy Mars", bonus: "₹50", withdrawal: "₹150", tag: "safe", badge: "new" },
        { name: "Rummy Most", bonus: "₹60", withdrawal: "₹100", tag: "safe", badge: "popular" },
        { name: "Rummy Nabob", bonus: "₹75", withdrawal: "₹250", tag: "safe", badge: "" },
        { name: "Teen Patti Joy", bonus: "₹80", withdrawal: "₹200", tag: "safe", badge: "new" },
        { name: "334.com", bonus: "₹45", withdrawal: "₹100", tag: "safe", badge: "" },
        { name: "66rummy", bonus: "₹55", withdrawal: "₹150", tag: "safe", badge: "popular" },
        { name: "Rummy A1", bonus: "₹65", withdrawal: "₹100", tag: "safe", badge: "" },
        { name: "Rummy Ares", bonus: "₹70", withdrawal: "₹200", tag: "safe", badge: "new" },
        { name: "Rummy Gold", bonus: "₹40", withdrawal: "₹100", tag: "safe", badge: "" },
        { name: "Rummy Grand", bonus: "₹90", withdrawal: "₹300", tag: "safe", badge: "" },
        { name: "Rummy Perfect", bonus: "₹85", withdrawal: "₹250", tag: "safe", badge: "popular" },
        { name: "Rummy Glee", bonus: "₹95", withdrawal: "₹200", tag: "safe", badge: "new" }
    ];

    // Filter buttons functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            filterApps(filter);
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        filterApps('all', searchTerm);
    });

    // Function to filter apps
    function filterApps(filter, searchTerm = '') {
        const appContainer = document.getElementById('appContainer');
        appContainer.innerHTML = '';
        
        apps.forEach((app, index) => {
            // Skip featured apps (they're shown separately)
            if (app.featured) return;
            
            // Apply filters
            if (filter === 'new' && app.badge !== 'new') return;
            if (filter === 'popular' && app.badge !== 'popular') return;
            
            // Apply search
            if (searchTerm && !app.name.toLowerCase().includes(searchTerm)) return;
            
            // Create app card
            const appCard = document.createElement('div');
            appCard.className = 'app-card';
            appCard.innerHTML = `
                ${app.badge ? `<div class="app-badge">${app.badge === 'new' ? 'NEW' : 'HOT'}</div>` : ''}
                <img src="https://via.placeholder.com/60" alt="${app.name}" class="app-icon">
                <h3>${app.name}</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="${index % 2 ? 'fas fa-star-half-alt' : 'far fa-star'}"></i>
                </div>
                <div class="app-tag ${app.tag}">Safe & Secure</div>
                <div class="app-info">
                    <span>Bonus: ${app.bonus}</span>
                    <span>Min Withdrawal: ${app.withdrawal}</span>
                </div>
                <button class="download-btn">Download</button>
            `;
            
            appContainer.appendChild(appCard);
        });
    }

    // Initial load - show all apps
    filterApps('all');

    // Add click event to all download buttons (including dynamically added ones)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('download-btn')) {
            const appName = e.target.closest('.app-card').querySelector('h3').textContent;
            alert(`Download link for ${appName} will be added soon!`);
            // You can replace this with actual download functionality later
        }
    });
});