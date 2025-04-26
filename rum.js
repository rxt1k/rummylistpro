const apps = [
    { name: "Rummy Master", bonus: "₹51", withdrawal: "₹100", tag: "safe", badge: "popular", featured: true, link: "https://rummy.starsfast.xyz/agent-142-3079945" },
    { name: "Rummy Bharath", bonus: "₹41", withdrawal: "₹200", tag: "safe", badge: "", featured: true, link: "https://www.rich-games.com/fmdgdlt9UEJ7" },
    { name: "Rummy Noble", bonus: "₹100", withdrawal: "₹300", tag: "safe", badge: "", featured: true, link: "https://rummynobleb.com?from_gameid=10160960&channelCode=2880326" },
    { name: "Rummy Mars", bonus: "₹50", withdrawal: "₹150", tag: "safe", badge: "new", link: "https://rummymarsz.com?from_gameid=17269033&channelCode=4279744" },
    { name: "Rummy Most", bonus: "₹60", withdrawal: "₹100", tag: "safe", badge: "popular", link: "https://rummymost.net?from_gameid=6306617&channelCode=100000" },
    { name: "Rummy Nabob", bonus: "₹75", withdrawal: "₹250", tag: "safe", badge: "", link: "https://rummyae.com/?from_gameid=56128936&channelCode=100000" },
    { name: "Teen Patti Joy", bonus: "₹80", withdrawal: "₹200", tag: "safe", badge: "new", link: "https://rummyjc.com/?from_gameid=38783510&channelCode=100000" },
    { name: "334.com", bonus: "₹45", withdrawal: "₹100", tag: "safe", badge: "", link: "https://334app.com/?code=12480140" },
    { name: "66rummy", bonus: "₹55", withdrawal: "₹150", tag: "safe", badge: "popular", link: "https://share.66rummy.xyz?pid=503491781&pkg=com.rummy66.app" },
    { name: "Rummy A1", bonus: "₹65", withdrawal: "₹100", tag: "safe", badge: "", link: "https://www.rummya1.vip/share/5T_dJxy" },
    { name: "Rummy Ares", bonus: "₹70", withdrawal: "₹200", tag: "safe", badge: "new", link: "https://rummyao.com/?from_gameid=8965763&channelCode=4486837" },
    { name: "Rummy Gold", bonus: "₹40", withdrawal: "₹100", tag: "safe", badge: "", link: "https://rummygolds.com/?from_gameid=34500990&channelCode=4279744" },
    { name: "Rummy Grand", bonus: "₹90", withdrawal: "₹300", tag: "safe", badge: "", link: "https://rummygrand.cc?from_gameid=12675683&channelCode=100000" },
    { name: "Rummy Perfect", bonus: "₹85", withdrawal: "₹250", tag: "safe", badge: "popular", link: "https://rummy78.com/?code=26115714" },
    { name: "Rummy Glee", bonus: "₹95", withdrawal: "₹200", tag: "safe", badge: "new", link: "https://rummyzb.com/?from_gameid=2358779&channelCode=32015" }
];

function filterApps(appsToShow) {
    const container = document.getElementById('apps-container');
    container.innerHTML = '';

    appsToShow.forEach((app, index) => {
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
            <button class="download-btn" onclick="window.open('${app.link}', '_blank')">Download</button>
        `;
        container.appendChild(appCard);
    });
}

// Initial load
filterApps(apps);
