/* Navbar Menu Toggle */
function menuToggle() {
    const toggleItems = document.querySelectorAll('div.nav__toggle-item');
    const navList = document.querySelector('.nav__list');

    for (let i = 0; i < toggleItems.length; i++) {
        toggleItems[i].classList.toggle('toggle-item--active');
    }

    navList.classList.toggle('nav__list--active');
}


// Change Navbar Active Link
function changeActiveLink(active) {
    const activeLink = document.querySelector('.nav__link--active');
    activeLink.classList.remove('nav__link--active');

    active.classList.add('nav__link--active');
}

// Scroll For Navbar Links With Js
const navbarList = document.querySelector('.nav__list');
function changeView(event) {
    if (event.target.tagName === 'A') {
        // Prevent A To Change Href
        event.preventDefault();

        // Toggle Menu After Click For Mobile Device
        const mobileNavbar = document.querySelector('.nav__list--active');
        if (mobileNavbar) {
            menuToggle();
        }

        changeActiveLink(event.target);

        let id = event.target.getAttribute('href');
        if (id === '#') {
            window.scrollTo({
                top: 0
            });
            return;
        }

        id = id.slice(1);
        const view = document.getElementById(id);

        window.scrollBy({
            top: (view.getBoundingClientRect().top - 100)
        })
    }
}

navbarList.addEventListener('click', changeView);

// Change Navbar Active Link By Scrolling
const navLinks = document.querySelectorAll('.nav__link');

function checkActiveView() {
    for (let navLink of navLinks) {
        let id = navLink.getAttribute('href');

        if (id === '#') {
            if (window.pageYOffset < 100) {
                changeActiveLink(navLink);
                break;
            }
            continue;
        }

        id = id.slice(1);
        const view = document.getElementById(id);
        const viewRect = view.getBoundingClientRect();

        if (viewRect.top <= 150 && viewRect.bottom > 150) {
            changeActiveLink(navLink);
            break;
        }
    }
}

window.addEventListener('scroll', checkActiveView);

/* On Scroll Animation To Elements */
function onScrollAnimation() {
    const scrollElements = document.querySelectorAll('.osa[data-osa]');

    for (let item of scrollElements) {
        const rect = item.getBoundingClientRect();
        if (
            (rect.top < document.body.clientHeight && rect.top > 0)
            || (rect.top < 0 && rect.bottom > 0)
        ) {
            item.classList.remove('osa');
            item.classList.add(item.dataset.osa);
        }
    }

    if (!scrollElements.length) {
        window.removeEventListener('scroll', onScrollAnimation);
    }
}

window.addEventListener('scroll', onScrollAnimation);
