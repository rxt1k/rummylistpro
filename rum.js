document.addEventListener('DOMContentLoaded', function() {
    // App data with images (just filenames) and download links
    const apps = [
        { 
            name: "Rummy Master", 
            image: "rummymaster.jpg",
            bonus: "₹51", 
            withdrawal: "₹100", 
            tag: "safe", 
            badge: "popular", 
            featured: true,
            link: "https://rummy.starsfast.xyz/agent-142-3079945" 
        },
        { 
            name: "Rummy Bharath", 
            image: "image_search_1745604377574.webp",
            bonus: "₹41", 
            withdrawal: "₹200", 
            tag: "safe", 
            badge: "", 
            featured: true,
            link: "https://www.rich-games.com/fmdgdlt9UEJ7" 
        },
        { 
            name: "Rummy Noble", 
            image: "rummynoble.jpg",
            bonus: "₹100", 
            withdrawal: "₹300", 
            tag: "safe", 
            badge: "", 
            featured: true,
            link: "https://rummynobleb.com?from_gameid=10160960&channelCode=2880326" 
        },
        { 
            name: "Rummy Mars", 
            image: "rummymars.jpg",
            bonus: "₹50", 
            withdrawal: "₹150", 
            tag: "safe", 
            badge: "new",
            link: "https://rummymarsz.com?from_gameid=17269033&channelCode=4279744" 
        },
        { 
            name: "Rummy Most", 
            image: "rummymost.jpg",
            bonus: "₹60", 
            withdrawal: "₹100", 
            tag: "safe", 
            badge: "popular",
            link: "https://rummymost.net?from_gameid=6306617&channelCode=100000" 
        },
        { 
            name: "Rummy Nabob", 
            image: "rummynabob.jpg",
            bonus: "₹75", 
            withdrawal: "₹250", 
            tag: "safe", 
            badge: "",
            link: "https://rummyae.com/?from_gameid=56128936&channelCode=100000" 
        },
        { 
            name: "Teen Patti Joy", 
            image: "3pattijoy.jpg",
            bonus: "₹80", 
            withdrawal: "₹200", 
            tag: "safe", 
            badge: "new",
            link: "https://rummyjc.com/?from_gameid=38783510&channelCode=100000" 
        },
        { 
            name: "334.com", 
            image: "rummy344com.jpg",
            bonus: "₹45", 
            withdrawal: "₹100", 
            tag: "safe", 
            badge: "",
            link: "https://334app.com/?code=12480140" 
        },
        { 
            name: "66rummy", 
            image: "66rummy.jpg",
            bonus: "₹55", 
            withdrawal: "₹150", 
            tag: "safe", 
            badge: "popular",
            link: "https://share.66rummy.xyz?pid=503491781&pkg=com.rummy66.app" 
        },
        { 
            name: "Rummy A1", 
            image: "a1rummy.jpg",
            bonus: "₹65", 
            withdrawal: "₹100", 
            tag: "safe", 
            badge: "",
            link: "https://www.rummya1.vip/share/5T_dJxy" 
        },
        { 
            name: "Rummy Ares", 
            image: "rummyares.jpg",
            bonus: "₹70", 
            withdrawal: "₹200", 
            tag: "safe", 
            badge: "new",
            link: "https://rummyao.com/?from_gameid=8965763&channelCode=4486837" 
        },
        { 
            name: "Rummy Gold", 
            image: "rummygold.jpg",
            bonus: "₹40", 
            withdrawal: "₹100", 
            tag: "safe", 
            badge: "",
            link: "https://rummygolds.com/?from_gameid=34500990&channelCode=4279744" 
        },
        { 
            name: "Rummy Grand", 
            image: "grandrummy.jpg",
            bonus: "₹90", 
            withdrawal: "₹300", 
            tag: "safe", 
            badge: "",
            link: "https://rummygrand.cc?from_gameid=12675683&channelCode=100000" 
        },
        { 
            name: "Rummy Perfect", 
            image: "rummyperfect.jpg",
            bonus: "₹85", 
            withdrawal: "₹250", 
            tag: "safe", 
            badge: "popular",
            link: "https://rummy78.com/?code=26115714" 
        },
        { 
            name: "Rummy Glee", 
            image: "rummyglee.jpg",
            bonus: "₹95", 
            withdrawal: "₹200", 
            tag: "safe", 
            badge: "new",
            link: "https://rummyzb.com/?from_gameid=2358779&channelCode=32015" 
        }
    ];

    // [Rest of your existing JavaScript code remains exactly the same]
    // Filter buttons, search functionality, etc.
    // ...

    // In your filterApps function, make sure the image is used like this:
    function filterApps(filter, searchTerm = '') {
        const appContainer = document.getElementById('appContainer');
        appContainer.innerHTML = '';
        
        apps.forEach((app, index) => {
            // [Your existing filter logic...]
            
            const appCard = document.createElement('div');
            appCard.className = 'app-card';
            appCard.innerHTML = `
                ${app.badge ? `<div class="app-badge">${app.badge === 'new' ? 'NEW' : 'HOT'}</div>` : ''}
                <img src="${app.image}" alt="${app.name}" class="app-icon">
                <h3>${app.name}</h3>
                <div class="app-info">
                    <span class="app-bonus">Bonus: ${app.bonus}</span>
                    <span class="app-withdrawal">Min. Withdrawal: ${app.withdrawal}</span>
                </div>
                <button class="download-btn" data-link="${app.link}">Download Now</button>
            `;
            appContainer.appendChild(appCard);
        });
    }

    // Initialize everything
    filterApps('all');

    // Handle download button clicks
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('download-btn')) {
            const link = e.target.getAttribute('data-link');
            if (link) window.open(link, '_blank');
        }
    });
});
