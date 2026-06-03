const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const gallery = document.querySelector("#templesGallery");
const pageTitle = document.querySelector("#page-title");

menuButton.setAttribute("aria-expanded", "false");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    const expanded = navigation.classList.contains("open");
    menuButton.textContent = expanded ? "✖" : "☰";
    menuButton.setAttribute("aria-expanded", expanded.toString());
});

// Temple data array (sample + 3 more)
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Added temples
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1988, December, 18",
        area: 20500,
        imageUrl:
            "https://newsroom.churchofjesuschrist.org/media/960x1280/Tokyo-Japan-Temple-Pic-20-copy.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 22500,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/60ecad34b8ccba920297633d3f3b4763a7785667/full/3840%2C/0/default"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1918, November, 17",
        area: 8500,
        imageUrl:
            "https://newsroom.churchofjesuschrist.org/media/orig/6c8619279db2cd95f8ab1d65eac545bcdbf2f4bb.jpeg"
    }
];

// Utility: parse year from dedicated string (expects 'YYYY, Month, D')
function getYear(dedicated) {
    const parts = String(dedicated).split(",");
    const year = parseInt(parts[0], 10);
    return Number.isFinite(year) ? year : null;
}

function createTempleCard(t) {
    const fig = document.createElement('figure');

    const img = document.createElement('img');
    img.src = t.imageUrl;
    img.alt = `${t.templeName} Temple`;
    img.loading = 'lazy';
    fig.appendChild(img);

    const cap = document.createElement('figcaption');
    const name = document.createElement('h3');
    name.textContent = t.templeName;
    cap.appendChild(name);

    const loc = document.createElement('p');
    loc.textContent = t.location;
    cap.appendChild(loc);

    const ded = document.createElement('p');
    ded.textContent = `Dedicated: ${t.dedicated}`;
    cap.appendChild(ded);

    const area = document.createElement('p');
    area.textContent = `Area: ${t.area.toLocaleString()} sq ft`;
    cap.appendChild(area);

    fig.appendChild(cap);
    return fig;
}

function displayTemples(list) {
    gallery.innerHTML = '';
    if (!list || list.length === 0) {
        gallery.textContent = 'No temples match the selected filter.';
        return;
    }
    const frag = document.createDocumentFragment();
    list.forEach(t => frag.appendChild(createTempleCard(t)));
    gallery.appendChild(frag);
}

// Filter handlers
function filterTemples(type) {
    switch (type) {
        case 'old':
            displayTemples(temples.filter(t => getYear(t.dedicated) < 1900));
            break;
        case 'new':
            displayTemples(temples.filter(t => getYear(t.dedicated) > 2000));
            break;
        case 'large':
            displayTemples(temples.filter(t => t.area > 90000));
            break;
        case 'small':
            displayTemples(temples.filter(t => t.area < 10000));
            break;
        default:
            displayTemples(temples);
    }
}

// Wire up navigation links
document.querySelectorAll('.navigation a').forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = a.dataset.filter || 'all';
        pageTitle.textContent = a.textContent;
        // close mobile nav
        navigation.classList.remove('open');
        menuButton.textContent = '☰';
        menuButton.setAttribute('aria-expanded', 'false');
        filterTemples(filter === 'all' ? 'all' : filter);
    });
});

// Initial render
displayTemples(temples);

// Footer data
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;